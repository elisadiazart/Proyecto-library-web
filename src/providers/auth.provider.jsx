import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { auth, usersCollectionReference } from '../config/firebase.config';
import { doc, getDoc } from 'firebase/firestore';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				getUserInfo(user, setCurrentUser);
			} else {
				setCurrentUser(null);
			}
		});

		return () => unsuscribe();
	}, []);

	return (
		<>
			<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
				{children}
			</AuthContext.Provider>
		</>
	);
};

const getUserInfo = async (user, setCurrentUser) => {
	const userReference = doc(usersCollectionReference, user.uid);
	try {
		const userDoc = await getDoc(userReference);
		const userInfo = userDoc.data();

		setCurrentUser({ ...user, ...userInfo });
	} catch (err) {
		setCurrentUser(null);
	}
};
