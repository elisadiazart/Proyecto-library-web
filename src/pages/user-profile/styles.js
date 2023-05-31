import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMain = styled.main`
	width: 1000px;
	margin: auto;
	margin-top: 9rem;
	display: flex;
	justify-content: space-between;
	position: relative;
	align-items: flex-start;
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
	justify-content: space-between;
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
	margin-bottom: 0.5rem;
`;

const StyledShelfData = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
`;

const StyledShelfBooks = styled.div`
	display: flex;
	height: 150px;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

const StyledCurrentReadings = styled.div`
	width: 310px;
	background-color: #eae5d9;
	border-radius: 22px;
	margin-top: 3.4rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem 2rem;
	padding-top: 3rem
		${props => {
			switch (props.variant) {
				case 'empty':
					return css`
						justify-content: center;
					`;
			}
		}};
`;

const StyledMessage = styled.p`
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	width: 150px;
	text-align: center;
	margin: auto;
	font-weight: 500;
	font-size: 0.9rem;
`;

const StyledImageContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledSmallText = styled.p`
	font-family: 'Cygre Book', sans-serif;
	font-size: 0.9rem;
	margin: 0.3rem 0;
	line-height: 130%;
	${props => {
		switch (props.variant) {
			case 'bold':
				return css`
					font-weight: 600;
				`;
		}
	}}
`;

const StyledImageBook = styled.img`
	width: 100px;
	height: 150px;
	border-radius: 0px 10px 10px 0px;
	cursor: pointer;
`;

const StyledReadingCard = styled.div`
	display: flex;
	gap: 1rem;
	padding-bottom: 2rem;

	&:nth-child(3) {
		border-bottom: 1px solid black;
	}
`;

const StyledImageReading = styled.img`
	width: 90px;
	height: 130px;
	object-fit: cover;
	border-radius: 0px 10px 10px 0px;
	cursor: pointer;
`;

const StyledButtonBlack = styled.button`
	background-color: black;
	color: white;
	padding: 0.7rem 1.5rem;
	border: none;
	border-radius: 50px;
	text-transform: uppercase;
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
	margin: 0.5rem 0;
	cursor: pointer;

	&:hover {
		background-color: ${COLORS.yellow};
		color: black;
	}
`;

export {
	StyledButtonBlack,
	StyledMain,
	StyledChallenge,
	StyledMainContent,
	StyledProfile,
	StyledProfileContainer,
	StyledText,
	StyledButton,
	StyledShelfTitle,
	StyledShelfData,
	StyledShelfBooks,
	StyledCurrentReadings,
	StyledMessage,
	StyledImageContainer,
	StyledSmallText,
	StyledImageBook,
	StyledReadingCard,
	StyledImageReading
};
