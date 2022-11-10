import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5Ieu0hhyrLAG0TAFxQ4s_G7y2TlB5ViE",
  authDomain: "shopping-store-de2b8.firebaseapp.com",
  projectId: "shopping-store-de2b8",
  storageBucket: "shopping-store-de2b8.appspot.com",
  messagingSenderId: "787347269553",
  appId: "1:787347269553:web:2f62e4d33b4ebb93db3f90"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);