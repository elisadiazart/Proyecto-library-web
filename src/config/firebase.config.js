// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDfihz3Zm-PvUykKltXtZlKhC9c0XQvRYE',
	authDomain: 'library-app-75d3b.firebaseapp.com',
	projectId: 'library-app-75d3b',
	storageBucket: 'library-app-75d3b.appspot.com',
	messagingSenderId: '468745552648',
	appId: '1:468745552648:web:703c3e74b462d9c11e62bd'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export const blogCollectionReference = collection(db, 'post-1');

export const storage = getStorage(app);
