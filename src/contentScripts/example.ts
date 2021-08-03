import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCIi3S7kU-c71fvW1unNjZV71py-bXVIBw",
  authDomain: "foxbase-e6abd.firebaseapp.com",
  projectId: "foxbase-e6abd",
  storageBucket: "foxbase-e6abd.appspot.com",
  messagingSenderId: "670582650890",
  appId: "1:670582650890:web:992b248917236744fcc7f3",
};
firebase.initializeApp(FIREBASE_CONFIG);

const fetchDoc = async (docPath: string) => {
  try {
    const snapshot = await firebase.firestore().doc(docPath).get();
    console.log("fetchedDoc: ");
    console.log(snapshot.data());
  } catch (err) {
    console.log("caught error while fetching");
    console.log(err);
  }
};

fetchDoc("test/1");

console.log("🔥 Hello from Extension Starter Kit! 🔥");
