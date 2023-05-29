import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMain = styled.main`
	width: 550px;
	margin: auto;
	margin-top: 12rem;
`;

const StyledTitle = styled.h2`
	font-family: 'Fungis Bold', sans-serif;
	text-transform: uppercase;
	text-align: center;
	font-size: 1.8rem;
	margin-bottom: 2rem;
`;

const StyledText = styled.p`
	font-family: 'Poppins', sans-serif;
	text-align: center;
	margin: auto;
	font-size: 0.85rem;
	margin-bottom: 3rem;
	width: 72%;
	line-height: 1.5rem;
`;

const StyledForm = styled.form`
	padding: 0 6rem;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
`;

const StyledInput = styled.input`
	padding: 0.5rem 1.5rem;
	border-radius: 50px;
	border: none;
	font-family: 'Cygre Regular', sans-serif;

	&:focus {
		outline: 2px solid ${COLORS.yellow};
	}
`;

const StyledLabel = styled.label`
	font-family: 'Cygre Medium Italic', sans-serif;
	text-transform: uppercase;
	font-size: 0.9rem;
`;

const StyledTextSignIn = styled.p`
	font-family: 'Poppins', sans-serif;
	font-size: 0.8rem;
	text-align: right;
	margin: 1rem 0;
`;

const StyledLogIn = styled.span`
	text-decoration: underline;
	cursor: pointer;

	&:hover {
		color: ${COLORS.yellow};
	}
`;

const StyledButton = styled.button`
	width: 100%;
	background-color: ${COLORS.yellow};
	border: none;
	padding: 0.6rem 1rem;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	cursor: pointer;
	border-radius: 50px;

	&:hover {
		background-color: black;
		color: white;
	}
`;

const StyledGoogleIcon = styled.img`
	width: 18px;
`;

const StyledButtonGoogle = styled.button`
	display: flex;
	gap: 0.5rem;
	background-color: ${COLORS.yellow};
	border: none;
	padding: 0.6rem 5.9rem;
	text-transform: uppercase;
	align-items: center;
	margin: 1rem auto;
	font-family: 'Poppins', sans-serif;
	cursor: pointer;

	border-radius: 50px;
	&:hover {
		background-color: black;
		color: white;

		${StyledGoogleIcon} {
			filter: invert(1);
		}
	}
`;

const StyledError = styled.p`
	font-size: 0.8rem;
	font-family: 'Poppins', sans-serif;
	color: ${COLORS.darkYellow};
`;

export {
	StyledMain,
	StyledTitle,
	StyledText,
	StyledForm,
	StyledInputContainer,
	StyledInput,
	StyledLabel,
	StyledTextSignIn,
	StyledLogIn,
	StyledButton,
	StyledButtonGoogle,
	StyledGoogleIcon,
	StyledError
};
