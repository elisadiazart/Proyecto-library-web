import { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../components/section-title/SectionTitle';
import {
	StyledButton,
	StyledChallenge,
	StyledMain,
	StyledMainContent,
	StyledProfile,
	StyledProfileContainer,
	StyledText,
	StyledShelfTitle,
	StyledShelfData,
	StyledShelfBooks,
	StyledCurrentReadings,
	StyledMessage,
	StyledImageContainer,
	StyledEmail,
	StyledImageBook
} from './styles';
import { AuthContext } from '../../contexts/auth.context';
import OutlineButton from '../../components/outline-button/OutlineButton';
import { onSnapshot } from 'firebase/firestore';
import {
	blogCollectionReference,
	usersCollectionReference
} from '../../config/firebase.config';

const UserProfile = () => {
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	const [books, setBooks] = useState([]);
	const [booksFilteredLibrary, setBooksFilteredLibrary] = useState([]);
	const [booksFilteredToRead, setBooksFilteredToRead] = useState([]);

	useEffect(() => {
		const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}));
			dataInfo.length === 0 ? setBooks(null) : setBooks(dataInfo);
		});
		return () => subscribeToData();
	}, []);

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

	useEffect(() => {
		if (currentUser) {
			getBooksByIdLibrary(books, currentUser, setBooksFilteredLibrary);
			getBooksByIdToRead(books, currentUser, setBooksFilteredToRead);
		}
	}, [books]);

	if (!currentUser) return <h1>Loading...</h1>;

	const booksPerShelf = 6;

	const libraryToRender = booksFilteredLibrary.slice(0, booksPerShelf - 1);

	return (
		currentUser && (
			<StyledMain>
				<StyledMainContent>
					<StyledProfileContainer>
						<StyledImageContainer>
							{currentUser.profilePicture.length === 0 ? (
								<StyledProfile src='/public/profile.jpeg' alt='profile' />
							) : (
								<StyledProfile src={currentUser.profilePicture} alt='profile' />
							)}
							<OutlineButton text='cambiar foto' />
						</StyledImageContainer>
						<StyledEmail>{currentUser.email}</StyledEmail>
					</StyledProfileContainer>
					{!currentUser.yearChallenge ? (
						<StyledChallenge>
							<StyledText>No hay reto anual</StyledText>
							<StyledButton>Crear Reto</StyledButton>
						</StyledChallenge>
					) : (
						<StyledChallenge>hay reto </StyledChallenge>
					)}

					<div>
						<SectionTitle text='Mis libros' />
						<div>
							<StyledShelfData>
								<StyledShelfTitle>Mi estantería</StyledShelfTitle>
								<StyledShelfTitle>
									{currentUser.library.length}
								</StyledShelfTitle>
							</StyledShelfData>
							<StyledShelfBooks>
								{!booksFilteredLibrary ? (
									<h3>loading</h3>
								) : (
									libraryToRender.map(book => {
										return <StyledImageBook key={book.id} src={book.image} />;
									})
								)}
							</StyledShelfBooks>
						</div>
						<div>
							<StyledShelfData>
								<StyledShelfTitle>Quiero Leer...</StyledShelfTitle>
								<StyledShelfTitle>{currentUser.toRead.length}</StyledShelfTitle>
							</StyledShelfData>
							<StyledShelfBooks></StyledShelfBooks>
						</div>
						<div>
							<StyledShelfData>
								<StyledShelfTitle>Abandonados</StyledShelfTitle>
								<StyledShelfTitle>
									{currentUser.abandoned.length}
								</StyledShelfTitle>
							</StyledShelfData>
							<StyledShelfBooks></StyledShelfBooks>
						</div>
					</div>
				</StyledMainContent>
				<StyledCurrentReadings>
					{currentUser.reading.length === 0 && (
						<StyledMessage>
							No has marcado ningún libro como &quot;leyendo&quot;
						</StyledMessage>
					)}
				</StyledCurrentReadings>
			</StyledMain>
		)
	);
};

const getBooksByIdLibrary = async (
	books,
	currentUser,
	setBooksFilteredLibrary
) => {
	console.log(books);
	const filteredBooks = books.filter(book =>
		currentUser.library.includes(book.id)
	);
	setBooksFilteredLibrary(filteredBooks);
};

const getBooksByIdToRead = async (
	books,
	currentUser,
	setBooksFilteredToRead
) => {
	const filteredBooks = books.filter(book =>
		currentUser.toRead.includes(book.id)
	);
	setBooksFilteredToRead(filteredBooks);
};

export default UserProfile;
