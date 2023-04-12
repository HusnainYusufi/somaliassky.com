import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// 

const app = firebase.initializeApp({
    apiKey: "AIzaSyDhZKbJh7D8X91pD3qe7rnXscyO6ZL577U",
    authDomain: "mirto-5b5fd.firebaseapp.com",
    projectId: "mirto-5b5fd",
    storageBucket: "mirto-5b5fd.appspot.com",
    messagingSenderId: "352600032258",
    appId: "1:352600032258:web:8a622b90f43d89f429931b",
    measurementId: "G-8VJ0476G37"
})
export const auth = app.auth()
export default app

