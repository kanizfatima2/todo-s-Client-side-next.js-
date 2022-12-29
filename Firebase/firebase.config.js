// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT3f4PAVO8BPqnyGJozE8KYgFXA56Vth8",
    authDomain: "task-manager-2674c.firebaseapp.com",
    projectId: "task-manager-2674c",
    storageBucket: "task-manager-2674c.appspot.com",
    messagingSenderId: "117786328464",
    appId: "1:117786328464:web:b9a7bd98a6275b5c144715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;