import { useContext, useEffect, useState } from 'react';
import { StyledOption, StyledOptions } from './styles';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth.context';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { usersCollectionReference } from '../../config/firebase.config';

const OptionsAdd = ({ id }) => {
	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(AuthContext);

	useEffect(() => {
		const subscribeToData = onSnapshot(usersCollectionReference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));

			setCurrentUser({
				...currentUser,
				library: dataInfo[0].library,
				toRead: dataInfo[0].toRead
			});

			return () => subscribeToData();
		});
	}, []);

	return (
		<StyledOptions>
			<StyledOption
				onClick={() => {
					selectOption(currentUser, navigate);
					updateLibrary(currentUser, id);
				}}
			>
				Mi estanteria
			</StyledOption>
			<StyledOption
				onClick={() => {
					selectOption(currentUser, navigate);
					updateToRead(currentUser, id);
				}}
			>
				Quiero leer...
			</StyledOption>
			<StyledOption onClick={() => selectOption(currentUser, navigate)}>
				Abandonados
			</StyledOption>
		</StyledOptions>
	);
};

const selectOption = (currentUser, navigate) => {
	!currentUser && navigate('sign-in');
};

const updateLibrary = async (currentUser, id) => {
	try {
		if (currentUser.library.includes(id)) return;
		const userToUpdate = doc(usersCollectionReference, currentUser.uid);
		await updateDoc(userToUpdate, { library: [...currentUser.library, id] });
	} catch (err) {
		console.log(err);
	}
};

const updateToRead = async (currentUser, id) => {
	try {
		if (currentUser.toRead.includes(id)) return;
		const userToUpdate = doc(usersCollectionReference, currentUser.uid);
		await updateDoc(userToUpdate, { toRead: [...currentUser.toRead, id] });
	} catch (err) {
		console.log(err);
	}
};

export default OptionsAdd;
