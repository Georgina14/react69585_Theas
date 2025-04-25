import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDVUfrJvi7AX-YZlEr0pntGRcVOmu6-fc4",
  authDomain: "react-comision-db.firebaseapp.com",
  projectId: "react-comision-db",
  storageBucket: "react-comision-db.firebasestorage.app",
  messagingSenderId: "644498453873",
  appId: "1:644498453873:web:caf60297399ad4d018f2d0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db