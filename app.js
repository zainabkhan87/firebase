import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyA25Ov7Px3PKRu-gQMg9vdaqJR5AXSTZA0",
    authDomain: "mobile-store-8283f.firebaseapp.com",
    projectId: "mobile-store-8283f",
    storageBucket: "mobile-store-8283f.firebasestorage.app",
    messagingSenderId: "486685345500",
    appId: "1:486685345500:web:6703756efd47ffa4c49619",
    measurementId: "G-3DTJVYBJKJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  function signup(){
    
  }