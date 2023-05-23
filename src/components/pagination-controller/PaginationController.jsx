import OutlineButton from '../outline-button/OutlineButton';
import { StyledContainer } from './styles';

const PaginationController = ({
	handleClickPrevious,
	handleClickNext,
	currentPage,
	disabledNext,
	disabledPrevious
}) => {
	return (
		<StyledContainer>
			<OutlineButton
				handleClick={handleClickPrevious}
				text='Anterior'
				disabled={disabledPrevious}
			/>
			<p style={{ textDecoration: 'underline' }}>{currentPage}</p>
			<OutlineButton
				handleClick={handleClickNext}
				text='Siguiente'
				disabled={disabledNext}
			/>
		</StyledContainer>
	);
};

export default PaginationController;
