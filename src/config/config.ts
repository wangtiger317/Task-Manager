import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQohvZryfJxcWfulh8EJ3hnPiFttpaaXM",
  authDomain: "task-manager-e5de7.firebaseapp.com",
  projectId: "task-manager-e5de7",
  storageBucket: "task-manager-e5de7.appspot.com",
  messagingSenderId: "663528777021",
  appId: "1:663528777021:web:a5a82d2ea5d30a9d129154"
};


const configDb = initializeApp(firebaseConfig);

export { configDb }