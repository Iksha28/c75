import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAUlV3UZF-auT7Udh1v66Tt-Jx1YXoJrx0",
  authDomain: "e-rid-eb384.firebaseapp.com",
  projectId: "e-rid-eb384",
  storageBucket: "e-rid-eb384.appspot.com",
  messagingSenderId: "71234974248",
  appId: "1:71234974248:web:f43f8a0fba38c2d73c7b1d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
