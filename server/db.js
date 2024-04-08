import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtuTVstxPeQeBL0l1oxFQVOc_JNi0bZL8",
  authDomain: "webbasedlock.firebaseapp.com",
  projectId: "webbasedlock",
  storageBucket: "webbasedlock.appspot.com",
  messagingSenderId: "479184213621",
  appId: "1:479184213621:web:41b83cecab3acd786a4a3c",
  measurementId: "G-MLE1735RJB",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;