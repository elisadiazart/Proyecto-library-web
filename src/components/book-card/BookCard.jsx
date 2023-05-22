import {
	StyledBook,
	StyledBookContainer,
	StyledCover,
	StyledData,
	StyledButton,
	StyledAuthor
} from './styles';

const BookCard = ({ id, image, author, name }) => {
	return (
		<StyledBookContainer key={id} id={id}>
			<StyledBook>
				<StyledCover src={image} alt='' />
				<StyledData>
					<p>{name}</p>
					<StyledAuthor>{author}</StyledAuthor>
				</StyledData>
			</StyledBook>
			<StyledButton>Añadir a...</StyledButton>
		</StyledBookContainer>
	);
};

export default BookCard;
