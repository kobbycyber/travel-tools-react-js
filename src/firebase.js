import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC5LCVTpWZxCrVCGVSZP1pr1_8K0DExgrs",
    authDomain: "travel-tools-a806c.firebaseapp.com",
    databaseURL: "https://travel-tools-a806c.firebaseio.com",
    projectId: "travel-tools-a806c",
    storageBucket: "travel-tools-a806c.appspot.com",
    messagingSenderId: "688671555675"
};

firebase.initializeApp(config);

export const database = firebase.database();