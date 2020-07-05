import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDS9hLpPDAsBQ5z1YoBGyEiJT29iv84eOQ",
    authDomain: "votum-1220b.firebaseapp.com",
    databaseURL: "https://votum-1220b.firebaseio.com",
    projectId: "votum-1220b",
    storageBucket: "votum-1220b.appspot.com",
    messagingSenderId: "497598256931",
    appId: "1:497598256931:web:6ef7c12e8b26ef8a13de96",
    measurementId: "G-2MYJFRWH85"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebase1 = require('firebase');

require('firebase/firestore');

export const dbFireStore = firebase1.firestore();

export const storage = firebase1.storage();