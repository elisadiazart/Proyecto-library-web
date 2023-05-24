import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './providers/auth.provider';
import { SearchProvider } from './providers/search.provider';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<AuthProvider>
					<SearchProvider>
						<Router />
					</SearchProvider>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
