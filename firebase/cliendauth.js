import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'

const cliendCredentials = {
  apiKey: process.env.NEXT_PUBUIL_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBUIL_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBUIL_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBUIL_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBUIL_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBUIL_FIREBASE_API_ID
}

export default function cliendaut() {
    if(!firebase.appslength) {
        firebase.initializeApp(cliendCredentials)
        if(typeof window !== 'undefined') {
            if('measurementId' in cliendCredentials) {
                firebase.analytics()
                firebase.performance()
            }
        }
        console.log('sucess')
    }
}
