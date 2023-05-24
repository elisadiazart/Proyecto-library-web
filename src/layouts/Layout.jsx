import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

const Layout = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<>
			<Header />
			<div>
				<Outlet />
				{currentUser && <div>Hola</div>}
			</div>
		</>
	);
};

export default Layout;
