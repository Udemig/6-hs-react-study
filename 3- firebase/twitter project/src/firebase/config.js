// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDlVm1EStOvzeqvjnoM9vU2G1T2GmwqQiM',
  authDomain: 'hs-twitter-e1b19.firebaseapp.com',
  projectId: 'hs-twitter-e1b19',
  storageBucket: 'hs-twitter-e1b19.appspot.com',
  messagingSenderId: '909404273123',
  appId: '1:909404273123:web:61d381f6020b8e7721c8d6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirme kurulumu
export const auth = getAuth(app);

// google sağlyıcı kurulumu
export const googleProvider = new GoogleAuthProvider();

// github sağlıyı kurulumu
export const githubProvider = new GithubAuthProvider();

// veritabanı kurulum
export const db = getFirestore(app);
