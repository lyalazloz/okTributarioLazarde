import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
    
    apiKey: "AIzaSyCCP5bdZ0QLMDD5phttCdmqo_PFUf-bJXw",
    authDomain: "ok-tributario.firebaseapp.com",
    projectId: "ok-tributario",
    storageBucket: "ok-tributario.appspot.com",
    messagingSenderId: "802322429596",
    appId: "1:802322429596:web:e3d666f72480f0ecb25f59",
    measurementId: "G-C8CZ7PR4TH"    

}

export const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();