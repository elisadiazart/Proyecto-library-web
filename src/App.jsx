import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './providers/auth.provider';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
