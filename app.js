// RSM Video - Firebase Video Loader

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWlmSOewJUk5z2An5Qeabx7AB_AwjFPVc",
  authDomain: "rsm-video-486d6.firebaseapp.com",
  projectId: "rsm-video-486d6",
  storageBucket: "rsm-video-486d6.firebasestorage.app",
  messagingSenderId: "1022944379126",
  appId: "1:1022944379126:web:e3bbf6a341feb47a8d6cd7",
  measurementId: "G-0D39KPEK4B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadVideos() {
  try {
    const snapshot = await getDocs(collection(db, "videos"));

    console.log("Videos found:", snapshot.size);

    snapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });

  } catch (error) {
    console.error("Video loading error:", error);
  }
}

loadVideos();