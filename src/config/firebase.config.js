// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAQfVfbd10haRdQYSMd2qex56l_IY4c8jU',
	authDomain: 'library-app-bceff.firebaseapp.com',
	projectId: 'library-app-bceff',
	storageBucket: 'library-app-bceff.appspot.com',
	messagingSenderId: '185344184853',
	appId: '1:185344184853:web:5661b850af29d35156341c',
	measurementId: 'G-553TYGKJ76'
};

// Initialize Firebase
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);

export const blogCollectionReference = collection(db, 'books');

export const storage = getStorage(app);
