import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import SignIn from '../pages/sign-in/SignIn';
import LogIn from '../pages/log-in/LogIn';
import Home from '../pages/home/Home';
import BookPage from '../pages/book-page/BookPage';
import BookPerGenre from '../pages/book-per-genre/BookPerGenre';
import UserProfile from '../pages/user-profile/UserProfile';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='sign-in' element={<SignIn />} />
				<Route path='log-in' element={<LogIn />} />
				<Route path='/book/:id' element={<BookPage />} />
				<Route path='/:genre' element={<BookPerGenre />} />
				<Route path='/user/:userId' element={<UserProfile />} />
			</Route>
		</Routes>
	);
};

export default Router;
