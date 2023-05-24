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
} from './styles';
import { AuthContext } from '../../contexts/auth.context';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/form-validations/formValidations';
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup
} from 'firebase/auth';
import { auth } from '../../config/firebase.config.js';

const SignIn = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	if (currentUser) return <Navigate to='/' />;

	return (
		<StyledMain>
			<StyledTitle>Sign in</StyledTitle>
			<StyledText>
				Bienvenid@ a Lectus tu web de lecturas, donde descubriras tu proxima
				lectura, podras hacer un seguimiento de estas o conectar con la
				comunidad. Registrate para disfrutar de toda la web y sus ventajas.
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
					¿Ya tienes cuenta?{' '}
					<StyledLogIn onClick={() => navigate('/log-in')}>Log In</StyledLogIn>
				</StyledTextSignIn>
				<StyledButton>Sign in</StyledButton>
			</StyledForm>
			<StyledButtonGoogle onClick={() => signinWithGoogle(navigate)}>
				Sign in with google
				<StyledGoogleIcon src='/Google.svg' alt='' />
			</StyledButtonGoogle>
		</StyledMain>
	);
};

const onSubmit = async data => {
	const { email, password } = data;
	console.log(email);
	try {
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.log(err);
	}
};

const signinWithGoogle = async navigate => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
		navigate('/');
	} catch (err) {
		console.log(err);
	}
};

export default SignIn;
