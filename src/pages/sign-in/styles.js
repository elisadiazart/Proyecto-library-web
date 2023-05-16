import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledMain = styled.main`
	width: 550px;
	margin: auto;
	margin-top: 6rem;
`;

const StyledTitle = styled.h2`
	font-family: 'Fungis Bold', sans-serif;
	text-transform: uppercase;
	text-align: center;
	font-size: 1.6rem;
	margin-bottom: 1rem;
`;

const StyledText = styled.p`
	font-family: 'Cygre Regular', sans-serif;
	text-align: center;
	margin: auto;
	font-size: 0.9rem;
	margin-bottom: 3rem;
	width: 80%;
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
	padding: 0.6rem 1rem;
	border-radius: 50px;
	border: none;

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
	font-family: 'Cygre Regular', sans-serif;
	font-size: 0.9rem;
	text-align: right;
	margin: 1rem 0;
`;

const StyledLogIn = styled.span`
	text-decoration: underline;
	cursor: pointer;
`;

const StyledButton = styled.button`
	width: 100%;
	background-color: ${COLORS.yellow};
	border: none;
	margin: 1rem 0;
	padding: 0.6rem 1rem 0.8rem 1rem;
	border-radius: 50px;
	font-family: 'Cygre Regular';
	text-transform: uppercase;
	cursor: pointer;
`;

const StyledButtonGoogle = styled.button`
	display: flex;
	gap: 0.5rem;
	background-color: ${COLORS.yellow};
	border: none;
	margin: auto;
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
	StyledButtonGoogle
};
