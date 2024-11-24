import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA25Ov7Px3PKRu-gQMg9vdaqJR5AXSTZA0",
  authDomain: "mobile-store-8283f.firebaseapp.com",
  projectId: "mobile-store-8283f",
  storageBucket: "mobile-store-8283f.appspot.com", // Fixed the storage bucket URL typo
  messagingSenderId: "486685345500",
  appId: "1:486685345500:web:6703756efd47ffa4c49619",
  measurementId: "G-3DTJVYBJKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();

// Sign-up function
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;

  // Input validation
  if (!email || !password || !name || !city) {
    Swal.fire('Please fill out all the fields.');
    return;
  }
  if (password.length < 6) {
    Swal.fire('Password should be at least 6 characters long.');
    return;
  }

  // Firebase Authentication
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed up:', user);

      // Display success message
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Successfully Created",
        showConfirmButton: false,
        timer: 2500
      });
      window.location.pathname='./login.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);

      // Display user-friendly error message
      Swal.fire({
        icon: 'error',
        title: 'Sign-Up Failed',
        text: errorMessage
      });
    });
}
// Attach event listener to button
document.getElementById('signup-btn').addEventListener('click', signup);


  

//sign in with email and password
function signin() {
  const email = document.getElementById('email').value; // Replace 'email' with your email input field ID
  const password = document.getElementById('password').value; // Replace 'password' with your password input field ID
  if (email === '' || password === '') {
    Swal.fire('Please fill out both fields.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('Signed in successfully: ', user)
    alert('Logged in...')
    sessionStorage.setItem("user", user.email);
    window.location.pathname = './quiz.html'
    // ...
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Sign-In Error: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Sign-In Failed',
        text: errorMessage,
      });
    });
}

// Attach the event listener to the login button
document.getElementById('login-btn').addEventListener('click', signin);




