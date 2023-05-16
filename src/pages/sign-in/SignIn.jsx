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
	StyledButtonGoogle
} from './styles';

const SignIn = () => {
	return (
		<StyledMain>
			<StyledTitle>Sign in</StyledTitle>
			<StyledText>
				Bienvenid@ a Lectus tu web de lecturas, donde descubriras tu proxima
				lectura, podras hacer un seguimiento de estas o conectar con la
				comunidad
			</StyledText>
			<StyledForm>
				<StyledInputContainer>
					<StyledLabel htmlFor='email'>Email</StyledLabel>
					<StyledInput type='text' name='email' id='email' />
				</StyledInputContainer>
				<StyledInputContainer>
					<StyledLabel htmlFor='password'>Contraseña</StyledLabel>
					<StyledInput type='text' name='password' id='password' />
				</StyledInputContainer>
				<StyledTextSignIn>
					¿Ya tienes cuenta? <StyledLogIn>Log In</StyledLogIn>
				</StyledTextSignIn>
				<StyledButton>Sign in</StyledButton>
			</StyledForm>
			<StyledButtonGoogle>
				Sign in with google
				<img src='/Google.svg' alt='' />
			</StyledButtonGoogle>
		</StyledMain>
	);
};

export default SignIn;
