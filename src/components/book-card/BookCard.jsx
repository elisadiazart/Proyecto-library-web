import { useContext, useState } from 'react';
import {
	StyledBook,
	StyledBookContainer,
	StyledCover,
	StyledData,
	StyledButton,
	StyledAuthor
} from './styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';
import OptionsAdd from '../options-add/OptionsAdd';

const BookCard = ({ id, image, author, name }) => {
	const [options, setOptions] = useState(false);
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	return (
		<StyledBookContainer key={id} id={id}>
			<StyledBook onClick={() => navigate(`/book/${id}`)}>
				<StyledCover src={image} alt='' />
				<StyledData>
					<p>{name}</p>
					<StyledAuthor>{author}</StyledAuthor>
				</StyledData>
			</StyledBook>
			<StyledButton
				onClick={() =>
					currentUser ? setOptions(!options) : navigate('/sign-in')
				}
			>
				Añadir a...
			</StyledButton>
			{options && <OptionsAdd id={id} />}
		</StyledBookContainer>
	);
};

export default BookCard;
