import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import SignIn from '../pages/sign-in/SignIn';
import LogIn from '../pages/log-in/LogIn';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home/>} />
				<Route path='sign-in' element={<SignIn />} />
				<Route path='log-in' element={<LogIn />} />
			</Route>
		</Routes>
	);
};

export default Router;
