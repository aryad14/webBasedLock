import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6D0IgbBAMLupJGKmylNtSBkUachqEfFc",
  authDomain: "webbasedlocknew.firebaseapp.com",
  projectId: "webbasedlocknew",
  storageBucket: "webbasedlocknew.appspot.com",
  messagingSenderId: "791900597510",
  appId: "1:791900597510:web:cc758bdb82709b5f6b0287",
  measurementId: "G-2HLKJSKJNN"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;