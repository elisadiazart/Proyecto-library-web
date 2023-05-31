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
	StyledSmallText,
	StyledImageBook,
	StyledReadingCard,
	StyledImageReading,
	StyledButtonBlack,
	StyledMoreBooks,
	StyledShelfBooksContainer
} from './styles';
import { AuthContext } from '../../contexts/auth.context';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import {
	blogCollectionReference,
	storage,
	usersCollectionReference
} from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const UserProfile = () => {
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	const [books, setBooks] = useState([]);
	const [booksFilteredLibrary, setBooksFilteredLibrary] = useState([]);
	const [booksFilteredToRead, setBooksFilteredToRead] = useState([]);
	const [booksFilteredAbandoned, setBooksFilteredAbandoned] = useState([]);
	const [booksFilteredReading, setBooksFilteredReading] = useState([]);
	const navigate = useNavigate();

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
				abandoned: dataInfo[0].abandoned,
				reading: dataInfo[0].reading,
				profilePicture: dataInfo[0].profilePicture
			});

			return () => subscribeToData();
		});
	}, []);

	useEffect(() => {
		if (currentUser) {
			getBooksByIdLibrary(books, currentUser, setBooksFilteredLibrary);
			getBooksByIdToRead(books, currentUser, setBooksFilteredToRead);
			getBooksByIdAbandoned(books, currentUser, setBooksFilteredAbandoned);
			getBooksByIdReading(books, currentUser, setBooksFilteredReading);
		}
	}, [books]);

	const booksPerShelf = 6;
	const libraryToRender = booksFilteredLibrary.slice(0, booksPerShelf - 1);
	const toReadToRender = booksFilteredToRead.slice(0, booksPerShelf - 1);
	const abandonedToRender = booksFilteredAbandoned.slice(0, booksPerShelf - 1);
	const readingToRender = booksFilteredReading.slice(0, 2);

	if (!currentUser) return <h1>Loading...</h1>;
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
							<input
								type='file'
								onChange={e =>
									handleLoadFile(
										e,
										e.target.files[0],
										currentUser,
										setCurrentUser
									)
								}
							/>
						</StyledImageContainer>
						<StyledSmallText>{currentUser.email}</StyledSmallText>
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
							<StyledShelfBooksContainer>
								{!booksFilteredLibrary ? (
									<h3>loading</h3>
								) : (
									<>
										<StyledShelfBooks>
											{libraryToRender.map(book => {
												return (
													<StyledImageBook
														onClick={() => navigate(`/book/${book.id}`)}
														key={book.id}
														src={book.image}
													/>
												);
											})}
										</StyledShelfBooks>
										{currentUser.library.length > 5 && (
											<StyledMoreBooks></StyledMoreBooks>
										)}
									</>
								)}
							</StyledShelfBooksContainer>
						</div>
						<div>
							<StyledShelfData>
								<StyledShelfTitle>Quiero Leer...</StyledShelfTitle>
								<StyledShelfTitle>{currentUser.toRead.length}</StyledShelfTitle>
							</StyledShelfData>
							<StyledShelfBooksContainer>
								{!booksFilteredToRead ? (
									<h3>loading</h3>
								) : (
									<>
										<StyledShelfBooks>
											{toReadToRender.map(book => {
												return (
													<StyledImageBook
														onClick={() => navigate(`/book/${book.id}`)}
														key={book.id}
														src={book.image}
													/>
												);
											})}
										</StyledShelfBooks>
										{currentUser.toRead.length > 5 && (
											<StyledMoreBooks></StyledMoreBooks>
										)}
									</>
								)}
							</StyledShelfBooksContainer>
						</div>
						<div>
							<StyledShelfData>
								<StyledShelfTitle>Abandonados</StyledShelfTitle>
								<StyledShelfTitle>
									{currentUser.abandoned.length}
								</StyledShelfTitle>
							</StyledShelfData>
							<StyledShelfBooksContainer>
								{!booksFilteredAbandoned ? (
									<h3>loading</h3>
								) : (
									<>
										<StyledShelfBooks>
											{abandonedToRender.map(book => {
												return (
													<StyledImageBook
														onClick={() => navigate(`/book/${book.id}`)}
														key={book.id}
														src={book.image}
													/>
												);
											})}
										</StyledShelfBooks>
										{currentUser.abandoned.length > 5 && (
											<StyledMoreBooks></StyledMoreBooks>
										)}
									</>
								)}
							</StyledShelfBooksContainer>
						</div>
					</div>
				</StyledMainContent>

				{currentUser.reading.length === 0 ? (
					<StyledCurrentReadings variant='empty'>
						<StyledMessage>
							No has marcado ningún libro como &quot;leyendo&quot;
						</StyledMessage>
					</StyledCurrentReadings>
				) : (
					<>
						<StyledCurrentReadings>
							<StyledShelfTitle>Leyendo ahora...</StyledShelfTitle>
							{readingToRender.map(book => {
								return (
									<StyledReadingCard key={book.id}>
										<StyledImageReading
											onClick={() => navigate(`/book/${book.id}`)}
											src={book.image}
										/>
										<div>
											<StyledSmallText variant='bold'>
												{book.name}
											</StyledSmallText>
											<StyledSmallText>{`De ${book.author}`}</StyledSmallText>
											<StyledSmallText>{book.publishedBy}</StyledSmallText>
										</div>
									</StyledReadingCard>
								);
							})}
							<StyledButtonBlack>Ver todos</StyledButtonBlack>
						</StyledCurrentReadings>
					</>
				)}
			</StyledMain>
		)
	);
};

const getBooksByIdLibrary = async (
	books,
	currentUser,
	setBooksFilteredLibrary
) => {
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

const getBooksByIdAbandoned = async (
	books,
	currentUser,
	setBooksFilteredAbandoned
) => {
	const filteredBooks = books.filter(book =>
		currentUser.abandoned.includes(book.id)
	);
	setBooksFilteredAbandoned(filteredBooks);
};

const getBooksByIdReading = async (
	books,
	currentUser,
	setBooksFilteredReading
) => {
	const filteredBooks = books.filter(book =>
		currentUser.reading.includes(book.id)
	);
	setBooksFilteredReading(filteredBooks);
};

const handleLoadFile = async (e, file, currentUser) => {
	const nameNoExtension = file.name.substring(0, file.name.indexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const directory = currentUser.email;
	const storageRef = ref(storage, `${directory}/${finalName}`);
	try {
		await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);
		console.log(imageURL);
		const userToUpdate = doc(usersCollectionReference, currentUser.uid);
		await updateDoc(userToUpdate, {
			profilePicture: imageURL
		});
	} catch (err) {
		console.log(err);
	}
};

export default UserProfile;
