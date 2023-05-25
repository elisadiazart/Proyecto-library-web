import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledImage = styled.img`
	height: 398px;
	border-radius: 0px 20px 20px 0px;
`;

const StyledMain = styled.main`
	width: 1000px;
	margin: auto;
	display: flex;
	align-items: flex-start;
	gap: 6rem;
	justify-content: center;
	margin-top: 5rem;
`;

const StyledImageContainer = styled.div``;

const StyledDataContainer = styled.div`
	width: 400px;
	margin-top: 2rem;
`;

const StyledSinopsis = styled.div`
	margin-top: 2rem;
`;

const StyledButton = styled.button`
	background-color: black;
	color: white;
	text-transform: uppercase;
	padding: 0.8rem 1.5rem;
	border: none;
	border-radius: 20px;
	margin-top: 2rem;

	&:hover {
		color: ${COLORS.yellow};
		cursor: pointer;
	}
`;

const StyledTitle = styled.h2`
	font-family: 'Fungis Bold';
	text-transform: uppercase;
	font-size: 1.2rem;
	margin-bottom: 1rem;
`;

const StyledSmallTitle = styled.h3`
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	font-size: 0.9rem;
	font-weight: 500;
	font-style: italic;
	margin: 2rem 0 0.5rem 0;
`;

const StyledGenres = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 250px;
	gap: 0.5rem 0.2rem;
	margin-top: 1rem;
`;

export {
	StyledImage,
	StyledMain,
	StyledImageContainer,
	StyledDataContainer,
	StyledSinopsis,
	StyledButton,
	StyledTitle,
	StyledSmallTitle,
	StyledGenres
};
