import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';
import BookCard from '../../components/book-card/BookCard';
import { StyledMain, StyledRow } from './styles';
import SectionTitle from '../../components/section-title/SectionTitle';
import { useParams } from 'react-router-dom';
import { removeAccents } from '../../hooks/removeAccents';

const BookPerGenre = () => {
	const [books, setBooks] = useState([]);
	const params = useParams();
	const [booksFiltered, setBooksFiltered] = useState([]);

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
		getBooksByGenre(params.genre, setBooksFiltered, books);
	}, [books]);

	return (
		<StyledMain>
			<SectionTitle text={params.genre} />
			<StyledRow>
				{booksFiltered.map(post => {
					return (
						<BookCard
							key={post.id}
							id={post.id}
							image={post.image}
							author={post.author}
							name={post.name}
						/>
					);
				})}
			</StyledRow>
		</StyledMain>
	);
};

const getFormatedGenders = book => {
	const formatedBook = book.genres.map(genre =>
		removeAccents(genre.toLowerCase())
	);
	return formatedBook;
};

const getBooksByGenre = async (genre, setBooksFiltered, books) => {
	// const formatedArray = books.genres.map(book =>
	// 	removeAccents(book.genres.toLowerCase()).includes(genre)
	// );
	const filteredBooks = books.filter(book =>
		getFormatedGenders(book).includes(genre)
	);

	setBooksFiltered(filteredBooks);
};

export default BookPerGenre;
