import {
    AnonymousCredential,
    RemoteMongoClient,
    Stitch
} from "mongodb-stitch-browser-sdk";
import * as GU from "./GU";

// IMPORTANT: Every function here is an asynchronous function, which returns a promise.
// To use return value, either call the following functions with an await in an async function:
// E.g.
// async function workflow() {
//     const client = await getClient();
//     setClient(client);
// }
// or handle with a .then():
// E.g.
// getClient().then(client => setClient(client));

const DB = "hack";
const COL = "all";
const CHATTYPE = 1;
const CONTENTTYPE = 2;

const CHATSAMPLE = {
    type: CHATTYPE,
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

const IMAGESAMPLE = {
    type: CONTENTTYPE,
    mediaUrl: "",
    title: "",
    caption: "",
    class: "",
    teacher: "",
    time: new Date(),
};

export async function getClient() {
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
export async function collection() {
    const client = await getClient();
    return client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas").db(DB).collection(COL);
}

export async function getChat() {
    const col = await collection();
    return GU.get(await col.findOne({id: CHATTYPE}), "chat");
}

export async function getAllPictures() {
    const col = await collection();
    return col.find(
        {type: CONTENTTYPE},
        {sort: {time: -1}}
    ).asArray();
}

export async function searchImage(searchString, callback) {
    const client = await getClient();
    client.callFunction("searchPictures", searchString).then(result => {
        callback(result) // Output: 7
    });
}

export async function uploadImage(file, title, caption, time, classRoom, teacher) {
    console.log(file);
    let reader  = new FileReader();
    reader.onload = async function(e)  {
        console.log(e.target.result);
        const cloudRes = await fetch(
            "https://api.cloudinary.com/v1_1/deqpjsxud/image/upload", {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'},
                body: "file=" + encodeURIComponent(e.target.result) +
                    "&api_key=643636984455417&signature=de8e536b88a8491d0b42120fda812e642377a1af"
            });
        const cloudJson = await cloudRes.json();
        if (cloudJson && cloudJson.url) {
            const url = cloudJson.url;
            const doc = {
                type: CONTENTTYPE,
                mediaUrl: url,
                title: title,
                caption: caption,
                class: classRoom,
                teacher: teacher,
                time: time ? time : new Date(),
            };
            (await collection()).insertOne(doc);
        }
    };
    reader.readAsDataURL(file);
}

export async function sendMessage(message) {
    const client = await getClient();
    client.callFunction("sendWhatsappMessage", message).then(result => {
        console.log(result) // Output: 7
    });
}

// watch changes in chat
export async function chatWatcher(callback) {
    const col = await collection();
    const stream = await col.watch({
        "fullDocument.id": CHATTYPE
    });
    stream.onNext((event) => {
        const doc = GU.get(event.fullDocument, "chat");
        if (callback) callback(doc);
    });
    return stream;
}

// watch new picture
export async function newPictureWatcher(callback) {
    const col = await collection();
    const stream = await col.watch({
        "fullDocument.type": CONTENTTYPE,
        "operationType": "insert"
    });
    stream.onNext((event) => {
        const doc = event.fullDocument;
        if (callback) callback(doc);
    });
    return stream;
}
// make wrapper function for teacher and admin watchers

