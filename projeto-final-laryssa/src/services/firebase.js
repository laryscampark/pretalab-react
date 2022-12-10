// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV_11vWVXk00wedxsvlzryXcaOjPSNi0s",
  authDomain: "projeto-final-pretalab-laryssa.firebaseapp.com",
  projectId: "projeto-final-pretalab-laryssa",
  storageBucket: "projeto-final-pretalab-laryssa.appspot.com",
  messagingSenderId: "619466293233",
  appId: "1:619466293233:web:ee670f4d827aa6988e0e50",
  databaseURL: "https://projeto-final-pretalab-laryssa-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase()

export { database }