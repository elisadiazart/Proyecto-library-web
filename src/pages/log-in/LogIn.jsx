import { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import {
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
	StyledGoogleIcon
} from './styles.js';
import { AuthContext } from '../../contexts/auth.context';

const LogIn = () => {
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({
		email: null,
		password: null
	});
	return (
		<StyledMain>
			<StyledTitle>Log in</StyledTitle>
			<StyledText>
				Bienvenid@ a Lectus tu web de lecturas, donde descubriras tu proxima
				lectura, podras hacer un seguimiento de estas o conectar con la
				comunidad
			</StyledText>
			<StyledForm onSubmit={e => handleSubmit(e, loginData)}>
				<StyledInputContainer>
					<StyledLabel htmlFor='email'>Email</StyledLabel>
					<StyledInput type='text' name='email' id='email' onChange={e =>
							setLoginData({ ...loginData, email: e.target.value })
						} />
				</StyledInputContainer>
				<StyledInputContainer>
					<StyledLabel htmlFor='password'>Contraseña</StyledLabel>
					<StyledInput type='text' name='password' id='password' onChange={e =>
							setLoginData({ ...loginData, password: e.target.value })
						} />
				</StyledInputContainer>
				<StyledTextSignIn>
					¿No tienes cuenta? <StyledLogIn>Sign In</StyledLogIn>
				</StyledTextSignIn>
				<StyledButton>Log in</StyledButton>
			</StyledForm>
			<StyledButtonGoogle>
				Log in with google
				<StyledGoogleIcon src='/Google.svg' alt='' />
			</StyledButtonGoogle>
		</StyledMain>
	);
};

const handleSubmit = async (e, loginData) => {
	e.preventDefault();
	const { email, password } = loginData;
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.log('Invalid credential');
	}
};


export default LogIn