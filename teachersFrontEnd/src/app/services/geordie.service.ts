import { Injectable } from '@angular/core';
import {
  AnonymousCredential,
  RemoteMongoClient,
  Stitch
} from "mongodb-stitch-browser-sdk";
import { DummyService } from './dummy.service';

// import { sha1 } from 'sha1';

@Injectable({
  providedIn: 'root'
})
export class GeordieService {

  constructor() { }

  public static DB = "hack";
  public static COL = "all";
  public static CHATTYPE = 1;
  public static CONTENTTYPE = 2;
  // sha1 = require('sha1');
  

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
    return client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db(this.DB).collection(this.COL);
  }

  public async getChat() {
    const col = await GeordieService.collection();
    return GeordieService.get(await col.findOne({id: GeordieService.CHATTYPE}), 'chat');
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
    client.callFunction('searchPictures', searchString).then(result => {
      callback(result) // Output: 7
    });
  }

  public async uploadImageBase64(file, title, caption, time, classRoom, teacher) {
    const timestamp = Math.round((new Date()).getTime() / 1000);
    const secret = "iQGiAgXkaFyd-4L4fFF9mWyQucQ";
    // const signature = sha1(`timestamp=${timestamp}${secret}`);
    const cloudRes = await fetch(
        "https://api.cloudinary.com/v1_1/dejr26gaj/image/upload", {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'},
          body: "file=" + encodeURIComponent(file) + "&upload_preset=weshwemr"
        });
    const cloudJson = await cloudRes.json();
    if (cloudJson && cloudJson.url) {
      const doc = {
        mediaUrl: cloudJson.url,
        title: title,
        caption: caption,
        classroom: classRoom,
        teacher: teacher,
        time: time ? time : new Date(),
      };
      await fetch(
          "https://webhooks.mongodb-realm.com/api/client/v2.0/app/klasku-owyck/service/getInfo/incoming_webhook/addPicture", {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: doc
          });

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
      'fullDocument.type': GeordieService.CONTENTTYPE,
      "operationType": "insert"
    });
    stream.onNext((event) => {
      const doc = event.fullDocument;
      if (callback) callback(doc);
    });
    return stream;
  }
}
