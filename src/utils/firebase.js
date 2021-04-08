import firebase from 'firebase/app'
require("firebase/firestore");
// require("firebase/auth");
// require("firebase/functions");
// require("firebase/messaging");
// require("firebase/storage");
// require("firebase/analytics");

// Firebase Config
let firebaseConfig = {
    apiKey: "AIzaSyBG4oWX934EU9dOsOY5r3V0ZRV-_v6YDIo",
    authDomain: "stem1-78af9.firebaseapp.com",
    databaseURL: "https://stem1-78af9.firebaseio.com",
    projectId: "stem1-78af9",
    storageBucket: "stem1-78af9.appspot.com",
    messagingSenderId: "753973198781",
    appId: "1:753973198781:web:cb4706ff6c88487a9d9cd4",
    measurementId: "G-SY1ZMQ7QNS"
};

/* Init Firebase */
firebase.initializeApp(firebaseConfig);

/* Firebase Firestore */
const firestore = firebase.firestore();


/* Firebase Auth */
// const auth = firebase.auth();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();
// const googleProvider = new firebase.auth.GoogleAuthProvider();


/* Firebase Messaging */
// const messaging = firebase.messaging();
// messaging.onMessage(function (payload) {
//     console.log('Message received. ', payload);
//     window.notify(payload.notification.title ,'success') 
// });


/* Firebase Functions */
// const functions = firebase.functions();
// if (process.env.REACT_APP_FIREBASE_FUNCTIONS_EMULATOR)
//     functions.useFunctionsEmulator(process.env.REACT_APP_FIREBASE_FUNCTIONS_EMULATOR)


/* Firebase Storage */
// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage();
// const storageRef = storage.ref(); // Create a storage reference from our storage service
// const imagesRef = storageRef.child('images'); // Create a child reference; imagesRef now points to 'images'
// const audiosRef = storageRef.child('audios'); // Create a child reference; imagesRef now points to 'images'
// Child references can also take paths delimited by '/'
// var spaceRef = storageRef.child('images/space.jpg');
// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"


// Uncomment the desired reference from all aspects for usage
// export {storageRef, imagesRef, firestore, auth, functions, facebookProvider, googleProvider, firebaseProjectId }
// export { firebase, firestore, functions, storageRef, imagesRef, PADRef, auth, facebookProvider, googleProvider, firebaseProjectId }
export { firebase, firestore }