import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

const Layout = () => {
	const { currentUser, setCurrentUser } = useContext(AuthContext);

	if (currentUser) {
		return (
			<>
				<Header />
				<Outlet />
			</>
		);
	}

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Layout;
