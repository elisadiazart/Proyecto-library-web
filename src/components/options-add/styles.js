import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledOptions = styled.div`
	position: absolute;
	z-index: 1000;
	background-color: ${COLORS.yellow};
	display: flex;
	flex-direction: column;
	width: 150px;
	transform: translateY(0.5rem);
	border-radius: 22px;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	font-size: 0.9rem;
	padding: 0.2rem 0.5rem;
`;

const StyledOption = styled.p`
	padding: 0.5rem 0.5rem;
	border-bottom: 1px solid black;
	cursor: pointer;
	&:last-child {
		border-bottom: none;
	}

	&:hover {
		text-decoration: underline;
	}
`;

export { StyledOption, StyledOptions };
