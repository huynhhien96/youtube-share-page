import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// change firebaseConfig to config
var config = {
    apiKey: "AIzaSyB5wX6_XUhPP13KLgEBVHCF-8uf_VR_4WU",
    authDomain: "share-plan-hien.firebaseapp.com",
    databaseURL: "https://share-plan-hien.firebaseio.com",
    projectId: "share-plan-hien",
    storageBucket: "share-plan-hien.appspot.com",
    messagingSenderId: "667900380544",
    appId: "1:667900380544:web:14441db7b9b5039bc76d65",
    measurementId: "G-1NRY8KBMCS"
};
// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

export default firebase;