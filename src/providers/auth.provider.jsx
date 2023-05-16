import { useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { auth } from '../config/firebase.config';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log('Usuario Autentificado', user);
				setCurrentUser(user);
			} else {
				console.log('Usuario no autentificado');
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
