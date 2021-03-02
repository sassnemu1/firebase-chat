import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCtIQD0iDE2Y5jBkf63p1jwuGc9tkYzmKk",
    authDomain: "messenger-c7cce.firebaseapp.com",
    projectId: "messenger-c7cce",
    storageBucket: "messenger-c7cce.appspot.com",
    messagingSenderId: "175817318989",
    appId: "1:175817318989:web:1eba682197b8cc2536f204",
    measurementId: "G-8S9G8WZKZV"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export { auth, firestore }