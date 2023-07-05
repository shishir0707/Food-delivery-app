import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDNAgIfY3HFsOKcRzoPnUSJ0M2jPYAT5E0",
    authDomain: "restaurantapp-ec17b.firebaseapp.com",
    databaseURL: "https://restaurantapp-ec17b-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-ec17b",
    storageBucket: "restaurantapp-ec17b.appspot.com",
    messagingSenderId: "639995808401",
    appId: "1:639995808401:web:36cdbef7e11f1584a80d30"
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const stroge = getStorage(app);

export {app, firestore, stroge};