import { StyledButton } from './styles';

const OutlineButton = ({ text, handleClick, disabled }) => {
	return (
		<StyledButton disabled={disabled} onClick={handleClick}>
			{text}
		</StyledButton>
	);
};

export default OutlineButton;
