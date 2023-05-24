import { useParams } from 'react-router-dom';
import Text from '../../components/text/Text';
import { doc, getDoc } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';
import { useEffect, useState } from 'react';
import {
	StyledImage,
	StyledMain,
	StyledImageContainer,
	StyledDataContainer,
	StyledSinopsis,
	StyledButton,
	StyledTitle
} from './styles';
import OptionsAdd from '../../components/options-add/OptionsAdd';

const BookPage = () => {
	const params = useParams();
	const [book, setBook] = useState([]);
	const [options, setOptions] = useState(false);

	useEffect(() => {
		getPostById(params.id, setBook);
	}, []);

	return (
		<StyledMain>
			<StyledImageContainer>
				<StyledImage src={book.image} alt={book.name} />
				<StyledButton onClick={() => setOptions(!options)}>
					Añadir a...
				</StyledButton>
				{options && <OptionsAdd />}
			</StyledImageContainer>
			<StyledDataContainer>
				<StyledTitle>{book.name}</StyledTitle>
				<Text text={book.author} />
				<Text text={book.publishedBy} />
				<Text text={book.pages} />
				<Text text={book.yearPublishe} />
				<Text text={book.isbn} />
				<StyledSinopsis>
					<Text text={book.sinopsis} />
				</StyledSinopsis>
			</StyledDataContainer>
		</StyledMain>
	);
};

const getPostById = async (id, setBook) => {
	const postReference = doc(blogCollectionReference, id);
	try {
		const bookToRead = await getDoc(postReference);
		const data = bookToRead.data();
		setBook(data);
	} catch (err) {
		console.log(err);
	}
};

export default BookPage;
