import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

const Layout = () => {
	const { currentUser, setCurrentUser } = useContext(AuthContext);

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Layout;
