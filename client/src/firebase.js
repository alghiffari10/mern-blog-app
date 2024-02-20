// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-4ca88.firebaseapp.com',
  projectId: 'mern-blog-4ca88',
  storageBucket: 'mern-blog-4ca88.appspot.com',
  messagingSenderId: '511802973943',
  appId: '1:511802973943:web:0c795db1619a1ad4223df2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
