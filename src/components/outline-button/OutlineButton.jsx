import { StyledButton } from './styles';

const OutlineButton = ({ text, handleClick, disabled, variant }) => {
	return (
		<StyledButton disabled={disabled} onClick={handleClick} variant={variant}>
			{text}
		</StyledButton>
	);
};

export default OutlineButton;
