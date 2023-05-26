import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMain = styled.main`
	width: 1000px;
	margin: auto;
	margin-top: 2rem;
	display: flex;
`;

const StyledChallenge = styled.div`
	background-color: ${COLORS.lavander};
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	gap: 0.5rem;
	margin-bottom: 3rem;
`;

const StyledMainContent = styled.div`
	width: 650px;
`;

const StyledProfile = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;

const StyledProfileContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	gap: 1rem;
`;

const StyledText = styled.p`
	color: white;
	font-family: 'Cygre Book', sans-serif;
`;

const StyledButton = styled.button`
	padding: 0.5rem 1.5rem;
	border: none;
	border-radius: 50px;
	background-color: white;
	text-transform: uppercase;
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
	color: ${COLORS.lavander};
	cursor: pointer;

	&:hover {
		background-color: black;
		color: white;
	}
`;

const StyledShelfTitle = styled.h3`
	font-family: 'Cygre Medium Italic', sans-serif;
	text-transform: uppercase;
	font-size: 1rem;
`;

const StyledShelfData = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
`;

const StyledShelfBooks = styled.div`
	height: 150px;
`;

export {
	StyledMain,
	StyledChallenge,
	StyledMainContent,
	StyledProfile,
	StyledProfileContainer,
	StyledText,
	StyledButton,
	StyledShelfTitle,
	StyledShelfData,
	StyledShelfBooks
};
