import { useContext, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
} from './styles';
import { AuthContext } from '../../contexts/auth.context';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	const [registerData, setRegisterData] = useState({
		email: null,
		password: null
	});
	return (
		<StyledMain>
			<StyledTitle>Sign in</StyledTitle>
			<StyledText>
				Bienvenid@ a Lectus tu web de lecturas, donde descubriras tu proxima
				lectura, podras hacer un seguimiento de estas o conectar con la
				comunidad
			</StyledText>
			<StyledForm onSubmit={e => handleSubmit(e, registerData)}>
				<StyledInputContainer>
					<StyledLabel htmlFor='email'>Email</StyledLabel>
					<StyledInput
						type='text'
						name='email'
						id='email'
						onChange={e =>
							setRegisterData({ ...registerData, email: e.target.value })
						}
					/>
				</StyledInputContainer>
				<StyledInputContainer>
					<StyledLabel htmlFor='password'>Contraseña</StyledLabel>
					<StyledInput
						type='text'
						name='password'
						id='password'
						onChange={e =>
							setRegisterData({
								...registerData,
								password: e.target.value
							})
						}
					/>
				</StyledInputContainer>
				<StyledTextSignIn>
					¿Ya tienes cuenta?{' '}
					<StyledLogIn onClick={() => navigate('/log-in')}>Log In</StyledLogIn>
				</StyledTextSignIn>
				<StyledButton>Sign in</StyledButton>
			</StyledForm>
			<StyledButtonGoogle>
				Sign in with google
				<StyledGoogleIcon src='/Google.svg' alt='' />
			</StyledButtonGoogle>
		</StyledMain>
	);
};

const handleSubmit = async (e, registerData) => {
	e.preventDefault();
	const { email, password } = registerData;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.log(err);
	}
};

export default SignIn;
