import { useContext, useEffect, useState } from 'react';
import { StyledOption, StyledOptions } from './styles';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth.context';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { usersCollectionReference } from '../../config/firebase.config';

const OptionsAdd = ({ id, setOptions}) => {
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
				toRead: dataInfo[0].toRead,
				abandoned: dataInfo[0].abandoned
			});

			return () => subscribeToData();
		});
	}, []);

	return (
		<StyledOptions>
			<StyledOption onClick={() => {
				selectOption(currentUser, navigate);
				setOptions(false);
				updateReading(currentUser, id)
				}}>
				Leyendo
			</StyledOption>
			<StyledOption
				onClick={() => {
					selectOption(currentUser, navigate);
					updateLibrary(currentUser, id);
					setOptions(false)
				}}
			>
				Mi estanteria
			</StyledOption>
			<StyledOption
				onClick={() => {
					selectOption(currentUser, navigate);
					updateToRead(currentUser, id);
					setOptions(false)
				}}
			>
				Quiero leer...
			</StyledOption>
			<StyledOption onClick={() => {
				selectOption(currentUser, navigate);
			updateAbandoned(currentUser, id);
			setOptions(false)}}>
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

const updateAbandoned = async (currentUser, id) => {
	try {
		if (currentUser.abandoned.includes(id)) return;
		const userToUpdate = doc(usersCollectionReference, currentUser.uid);
		await updateDoc(userToUpdate, { abandoned: [...currentUser.abandoned, id] });
	} catch (err) {
		console.log(err);
	}
};

const updateReading = async (currentUser, id) => {
	try {
		if (currentUser.reading.includes(id)) return;
		const userToUpdate = doc(usersCollectionReference, currentUser.uid);
		await updateDoc(userToUpdate, { reading: [...currentUser.reading, id] });
	} catch (err) {
		console.log(err);
	}
};

export default OptionsAdd;
