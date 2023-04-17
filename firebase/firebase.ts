import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDMAU8Y20DeK8W5sX1NccfIAwy69FPJvhc",
  authDomain: "todo-s-list-dfbf5.firebaseapp.com",
  projectId: "todo-s-list-dfbf5",
  storageBucket: "todo-s-list-dfbf5.appspot.com",
  messagingSenderId: "857939656645",
  appId: "1:857939656645:web:f39122ba7d4a9bb71f95ac",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
