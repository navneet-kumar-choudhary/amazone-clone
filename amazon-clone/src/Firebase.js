import firebase from "firebase/app";
import "firebase/auth"

firebase.initializeApp({
  apiKey: "AIzaSyAPBgC2xMp3aq6y8Qin8H3_DitzkGOHayo",
  authDomain: "clone-f7817.firebaseapp.com",
  projectId: "clone-f7817",
  storageBucket: "clone-f7817.appspot.com",
  messagingSenderId: "180486811552",
  appId: "1:180486811552:web:d82316004fcad1bcb7bec5",
  measurementId: "G-VQ8XT5RZPT",
});

export const auth = firebase.auth();
export default firebase;
