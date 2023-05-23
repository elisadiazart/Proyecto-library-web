import { useContext } from 'react';
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
	StyledGoogleIcon,
	StyledError
} from './styles.js';
import { AuthContext } from '../../contexts/auth.context';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/form-validations/formValidations';
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from '../../config/firebase.config.js';

const LogIn = () => {
	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	if (!currentUser)
		return (
			<StyledMain>
				<StyledTitle>Log in</StyledTitle>
				<StyledText>
					Bienvenid@ a Lectus tu web de lecturas, donde descubriras tu proxima
					lectura, podras hacer un seguimiento de estas o conectar con la
					comunidad
				</StyledText>
				<StyledForm onSubmit={handleSubmit(onSubmit)}>
					<StyledInputContainer>
						<StyledLabel htmlFor='email'>Email</StyledLabel>
						<StyledInput
							type='text'
							name='email'
							id='email'
							{...register('email', {
								required: FORM_VALIDATIONS.email.require,
								pattern: {
									value: FORM_VALIDATIONS.email.pattern,
									message: FORM_VALIDATIONS.email.message
								}
							})}
						/>
					</StyledInputContainer>
					{errors.email && <StyledError>{errors.email.message}</StyledError>}
					<StyledInputContainer>
						<StyledLabel htmlFor='password'>Contraseña</StyledLabel>
						<StyledInput
							type='password'
							name='password'
							id='password'
							{...register('password', {
								required: FORM_VALIDATIONS.password.require,
								pattern: {
									value: FORM_VALIDATIONS.password.pattern,
									message: FORM_VALIDATIONS.password.message
								}
							})}
						/>
					</StyledInputContainer>
					{errors.password && (
						<StyledError>{errors.password.message}</StyledError>
					)}
					<StyledTextSignIn>
						¿No tienes cuenta?{' '}
						<StyledLogIn onClick={() => navigate('/sign-in')}>
							Sign In
						</StyledLogIn>
					</StyledTextSignIn>
					<StyledButton>Log in</StyledButton>
				</StyledForm>
				<StyledButtonGoogle onClick={() => loginWithGoogle}>
					Log in with google
					<StyledGoogleIcon src='/Google.svg' alt='' />
				</StyledButtonGoogle>
			</StyledMain>
		);
};

const onSubmit = (data, e) => {
	console.log(data);
	console.log(e);
};


const loginWithGoogle = async () => {
	const provider = new GoogleAuthProvider()
	try{
		const result = await signInWithPopup(auth, provider)
		const credential = GoogleAuthProvider.credentialFromResult(result)
		console.log(credential);
	}catch (err){
		console.log(err);
	}
}

export default LogIn;
