import firebase from 'firebase/app'
require("firebase/firestore");
// require("firebase/auth");
// require("firebase/functions");
// require("firebase/messaging");
require("firebase/storage");
// require("firebase/analytics");

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCoJonxISopHc6rZmt_znmHU7th1Va5_X8",
    authDomain: "techna-pk.firebaseapp.com",
    databaseURL: "https://techna-pk.firebaseio.com",
    projectId: "techna-pk",
    storageBucket: "techna-pk.appspot.com",
    messagingSenderId: "776458310170",
    appId: "1:776458310170:web:52b7c58fe031ad1d"
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
const storage = firebase.storage();
const storageRef = storage.ref(); // Create a storage reference from our storage service
const resumesRef = storageRef.child('resumes'); // Create a child reference; imagesRef now points to 'images'
// const audiosRef = storageRef.child('audios'); // Create a child reference; imagesRef now points to 'images'
// Child references can also take paths delimited by '/'
// var spaceRef = storageRef.child('images/space.jpg');
// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"


// Uncomment the desired reference from all aspects for usage
// export {storageRef, imagesRef, firestore, auth, functions, facebookProvider, googleProvider, firebaseProjectId }
// export { firebase, firestore, functions, storageRef, imagesRef, PADRef, auth, facebookProvider, googleProvider, firebaseProjectId }
export { firebase, firestore, resumesRef }