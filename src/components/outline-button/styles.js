import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledButton = styled.button`
	background-color: transparent;
	border: 1px solid black;
	font-family: 'Poppins', sans-serif;
	padding: 0.4rem 1.2rem;
	border-radius: 50px;
	font-weight: 600;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.yellow};
		text-decoration: underline;
	}
`;

export { StyledButton };
