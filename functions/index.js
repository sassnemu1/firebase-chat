const functions = require("firebase-functions");
const Filter = require('bad-words');

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.detectEvilUser = functions.firestore
        .document('message/{msgId}')
        .onCreate(async (doc, ctx) => {

            const filter = new Filter();
            const { text, uid } = doc.data();

        })

