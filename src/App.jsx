import Header from './components/header/Header';
import SignIn from './pages/sign-in/SignIn';
import { AuthProvider } from './providers/auth.provider';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<AuthProvider>
				<Header />
				<SignIn />
			</AuthProvider>
		</>
	);
};

export default App;
