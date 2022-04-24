const admin = require('firebase')
const serviceAccount = require('./secrets.json')

export const verifyIdToken = (token) => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "auth-next-5a010.firebaseapp.com",
        })
    }
    return admin.auth().verifyIdToken(token).catch((error) => {
        throw error;
    });
};