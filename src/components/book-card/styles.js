import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledData = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: none;
	opacity: 0;
	color: white;
	z-index: 100;
	font-family: 'Fungis Bold', sans-serif;
	text-transform: uppercase;
	text-align: center;
`;

const StyledBook = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	cursor: pointer;

	&:hover {
		::after {
			content: '';
			width: 100%;
			height: 100%;
			background-color: rgba(144, 164, 234, 0.89);
			position: absolute;
			top: 0;
			z-index: 10;
			border-radius: 0px 10px 10px 0px;
		}

		${StyledData} {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			opacity: 1;
			transition: opacity 0.5s;
		}
	}
`;

const StyledCover = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 0px 10px 10px 0px;
	cursor: pointer;
`;

const StyledBookContainer = styled.div`
	width: 150px;
	height: 230px;
	position: relative;
`;

const StyledButton = styled.button`
	width: 100%;
	border-radius: 50px;
	border: none;
	padding: 0.5rem 1.4rem;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	margin-top: 0.5rem;
	cursor: pointer;
	background-color: black;
	color: white;
	&:hover {
		background-color: ${COLORS.yellow};
		color: black;
	}
`;

const StyledAuthor = styled.p`
	font-size: 0.9rem;
	font-family: 'Poppins', sans-serif;
	text-transform: none;
`;

export {
	StyledBook,
	StyledCover,
	StyledData,
	StyledBookContainer,
	StyledButton,
	StyledAuthor
};
