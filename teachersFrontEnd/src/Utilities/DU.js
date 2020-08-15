import {
    AnonymousAuthProvider,
    AnonymousCredential,
    FacebookRedirectCredential,
    GoogleRedirectCredential,
    UserPasswordCredential,
    UserPasswordAuthProvider,
    RemoteMongoClient,
    Stitch,
    UserPasswordAuthProviderClient
} from "mongodb-stitch-browser-sdk";
import ObjectID from 'bson-objectid';
import * as GU from './GU';

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
const SCHOOLTYPE = 0;
const TEACHERTYPE = 1;
const CONTENTTYPE = 2;

// QUERY MACROS
export const safeObjectId = (id) => GU.tryNull(() => ObjectID(id));
export const OBJECTID = (label, id, other) => typeof id === 'string' ?
    { [label]: safeObjectId(id), ...other } :
    { [label]: id, ...other };
export const _ID = (id, other) => OBJECTID("_id", id, other);
export const TEACHERID = (id, other) => OBJECTID("teacherId", id, other);
export const SCHOOLID = (id, other) => OBJECTID("schoolId", id, other);
export const CLASSID = (id, other) => OBJECTID("classId", id, other);
export const ALL = () => { return {} };
export const GETID = (doc) => GU.get(doc, "_id");
export const GETNAME = (doc) => GU.get(doc, "name");
export const GETSCHOOL = (doc) => GU.get(doc, "school");
export const GETTEACHER = (doc) => GU.get(doc, "teacher");
export const GETPHONENUMBER = (doc) => GU.get(doc, "phoneNumber");
export const GETPICTURE = (doc) => GU.get(doc, "picture");
export const GETBIO = (doc) => GU.get(doc, "bio");
export const GETSENDFREQUENCY = (doc) => GU.get(doc, "frequency");

const school = {
    name: "",
    principal: "",
    teachers: [
        {
            name: "",
            picture: "",
            classes: [""]
        }
    ],
    classes: [
        {
            name: "",
            picture: "",
            students: [
                {
                    name: "",
                    picture: ""
                }
            ]
        }
    ]
};

const teacher = {
    name: "",
    picture: "",
    school: "",
    classes: [
        {
            name: "",
            picture: "",
            students: [
                {
                    name: "",
                    picture: "",
                    parentNumber: ""
                }
            ]
        }
    ],
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

export async function getTeacher() {
    const col = await collection();
    return col.find({id: TEACHERTYPE});
}

export async function getSchool() {
    const col = await collection();
    return col.find({id: SCHOOLTYPE});
}

export async function getAllPictures() {
    const col = await collection();
    return col.find({type: CONTENTTYPE}).sort({time: -1})
}

export async function searchImage(searchString, callback) {
    const client = await getClient();
    client.callFunction("searchPictures", searchString).then(result => {
        callback(result) // Output: 7
    });
}

export async function uploadImage(file, title, caption, time, classRoom) {
    let reader  = new FileReader();
    reader.onload = async function(e)  {
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
                picture: url,
                title: title,
                caption: caption,
                time: time ? time : new Date(),
                class: classRoom
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

// watch teacher
export async function teacherWatcher(callback) {
    const col = await collection();
    const stream = await col.watch({
        "fullDocument.id": TEACHERTYPE
    });
    stream.onNext((event) => {
        const doc = event.fullDocument;
        if (callback) callback(doc);
    });
    return stream;
}
// watch admin
export async function schoolWatcher(callback) {
    const col = await collection();
    const stream = await col.watch({
        "fullDocument.id": SCHOOLTYPE
    });
    stream.onNext((event) => {
        const doc = event.fullDocument;
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

