import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyATfd2UGCT6_0hpSioWYfgHc6HrSvAOboM",
    authDomain: "auth-vue-2022.firebaseapp.com",
    databaseURL: "https://auth-vue-2022-default-rtdb.firebaseio.com",
    projectId: "auth-vue-2022",
    storageBucket: "auth-vue-2022.appspot.com",
    messagingSenderId: "488723181428",
    appId: "1:488723181428:web:d2426b9175c35dec2a4621"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

// Initialize DB
const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}