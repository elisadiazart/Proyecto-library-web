import { useNavigate, useParams } from 'react-router-dom';
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
	StyledTitle,
	StyledSmallTitle,
	StyledGenres
} from './styles';
import OptionsAdd from '../../components/options-add/OptionsAdd';
import OutlineButton from '../../components/outline-button/OutlineButton';
import { v4 } from 'uuid';
import { removeAccents } from '../../hooks/removeAccents';

const BookPage = () => {
	const params = useParams();
	const [book, setBook] = useState([]);
	const [options, setOptions] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		getPostById(params.id, setBook);
	}, []);

	if (book.length !== 0)
		return (
			<StyledMain>
				<StyledImageContainer>
					<StyledImage src={book.image} alt={book.name} />
					<StyledButton onClick={() => setOptions(!options)}>
						Añadir a...
					</StyledButton>
					{options && <OptionsAdd />}
					<StyledSmallTitle>Géneros</StyledSmallTitle>
					<StyledGenres>
						{book.genres.map(genre => {
							return (
								<OutlineButton
									key={v4()}
									text={genre}
									variant='tag'
									handleClick={() =>
										navigate(`/${removeAccents(genre.toLowerCase())}`)
									}
								/>
							);
						})}
					</StyledGenres>
				</StyledImageContainer>
				<StyledDataContainer>
					<StyledTitle>{book.name}</StyledTitle>
					<Text text={`De ${book.author} `} />
					<Text text={book.publishedBy} />
					<Text text={`${book.pages} páginas`} />
					<Text text={`Publicado en ${book.yearPublishe}`} />
					<Text text={`ISBN: ${book.isbn}`} />
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
