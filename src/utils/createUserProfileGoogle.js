import { signInWithPopup } from 'firebase/auth';
import { auth, db } from '../config/firebase.config';
import { doc, setDoc } from 'firebase/firestore';

export const createUserProfile = async provider => {
	const result = await signInWithPopup(auth, provider);
	const newUser = {
		abandoned: [],
		library: [],
		profilePicture: '',
		reading: [],
		toRead: [],
		userEmail: result.user.email,
		newLists: []
	};
	console.log(result);
	await setDoc(doc(db, 'users', result.user.uid), newUser);
};
