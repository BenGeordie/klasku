import { Injectable } from '@angular/core';
import {
  AnonymousCredential,
  RemoteMongoClient,
  Stitch
} from "mongodb-stitch-browser-sdk";
import { DummyService } from './dummy.service'

@Injectable({
  providedIn: 'root'
})
export class GeordieService {

  constructor() { }

  public static DB = "hack";
  public static COL = "all";
  public static CHATTYPE = 1;
  public static CONTENTTYPE = 2;

  public static get = (nestedObj, path, defaultValue = null) => {
    if (path === "") return nestedObj;
    let pathArr = path.split('.');
    const getValue = pathArr.reduce((obj, key) =>
        (obj && obj[key] !== undefined) ? obj[key] : undefined, nestedObj); // used to be !== 'undefined'
    return (getValue === undefined || getValue === null) && defaultValue !== undefined ? defaultValue : getValue;
  };

  public CHATSAMPLE = {
    type: GeordieService.CHATTYPE,
    chat: [
      { // parent
        parent: true,
        message: "",
        mediaUrl: "",
        mediaType: "",
        sentiment: 0,
        time: new Date()
      }, { // teacher
        message: "",
        time: new Date()
      }
    ]
  };

  public IMAGESAMPLE = {
    type: GeordieService.CONTENTTYPE,
    mediaUrl: "",
    title: "",
    caption: "",
    class: "",
    teacher: "",
    path: [],
    time: new Date(),
  };

  public static async getClient() {
    const appId = 'klasku-owyck';
    const client = Stitch.hasAppClient(appId)
        ? Stitch.getAppClient(appId)
        : Stitch.initializeAppClient(appId);
    if (!client.auth.isLoggedIn) {
      const credential = new AnonymousCredential();
      await client.auth.loginWithCredential(credential);
    }
    return client;
  }

// If nothing or null is passed to the client argument, the function calls getClient() by default.
  public static async collection() {
    const client = await GeordieService.getClient();
    return client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas").db(this.DB).collection(this.COL);
  }

  public async getChat() {
    const col = await GeordieService.collection();
    return GeordieService.get(await col.findOne({id: GeordieService.CHATTYPE}), "chat");
  }

  public async getAllPictures() {
    const col = await GeordieService.collection();
    return col.find(
        {type: GeordieService.CONTENTTYPE},
        {sort: {time: -1}}
    ).asArray();
  }

  public async searchImage(searchString, callback) {
    const client = await GeordieService.getClient();
    client.callFunction("searchPictures", [searchString]).then(result => {
      callback(result) // Output: 7
    });
  }

  public async uploadImage(file, title, caption, time, classRoom, teacher) {
    console.log(file);
    let reader  = new FileReader();
    reader.onload = async function(e)  {
      console.log(e.target.result);
      const cloudRes = await fetch(
          "https://api.cloudinary.com/v1_1/deqpjsxud/image/upload", {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'},
            body: "file=" + encodeURIComponent(e.target.result as string) +
                "&api_key=712697848369561&signature=de8e536b88a8491d0b42120fda812e642377a1af"
          });
      const cloudJson = await cloudRes.json();
      if (cloudJson && cloudJson.url) {
        const url = cloudJson.url;
        const doc = {
          type: GeordieService.CONTENTTYPE,
          mediaUrl: url,
          title: title,
          caption: caption,
          class: classRoom,
          teacher: teacher,
          time: time ? time : new Date(),
        };
        (await GeordieService.collection()).insertOne(doc);
      }
    };
    reader.readAsDataURL(file);
  }

  public async uploadImageBase64(file, title, caption, time, classRoom, teacher) {
    const cloudRes = await fetch(
        "https://api.cloudinary.com/v1_1/dejr26gaj/image/upload", {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'},
          body: "file=" + encodeURIComponent(file) +
              "&api_key=712697848369561&signature=de8e536b88a8491d0b42120fda812e642377a1af"
        });
    const cloudJson = await cloudRes.json();
    if (cloudJson && cloudJson.url) {
      const url = cloudJson.url;
      const doc = {
        type: GeordieService.CONTENTTYPE,
        mediaUrl: url,
        title: title,
        caption: caption,
        class: classRoom,
        teacher: teacher,
        time: time ? time : new Date(),
      };
      return (await GeordieService.collection()).insertOne(doc);
    }
  };

  public async sendMessage(message) {
    const client = await GeordieService.getClient();
    client.callFunction("sendWhatsappMessage", [message]).then(result => {
      console.log(result) // Output: 7
    });
  }

  public async sendPastWeek() {
    const client = await GeordieService.getClient();
    const school = DummyService.teacher.school;
    const teacher = DummyService.teacher.name;
    const classroom = DummyService.teacher.classes[0].name;
    client.callFunction("sendPastWeek", [school, teacher, classroom]).then(result => {
      console.log(result) // Output: 7
    });
  }

// watch changes in chat
  public async chatWatcher(callback) {
    const col = await GeordieService.collection();
    const stream = await col.watch({
      "fullDocument.id": GeordieService.CHATTYPE
    });
    stream.onNext((event) => {
      const doc = GeordieService.get(event.fullDocument, "chat");
      if (callback) callback(doc);
    });
    return stream;
  }

// watch new picture
  public async newPictureWatcher(callback) {
    const col = await GeordieService.collection();
    const stream = await col.watch({
      "fullDocument.type": GeordieService.CONTENTTYPE,
      "operationType": "insert"
    });
    stream.onNext((event) => {
      const doc = event.fullDocument;
      if (callback) callback(doc);
    });
    return stream;
  }
}
