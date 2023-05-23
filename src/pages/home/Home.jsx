import { useContext, useEffect, useState } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';

import { AuthContext } from '../../contexts/auth.context';
import { onSnapshot } from 'firebase/firestore';
import { StyledMain, StyledRow } from './styles';
import SectionTitle from '../../components/section-title/SectionTitle';
import BookCard from '../../components/book-card/BookCard';
import PaginationController from '../../components/pagination-controller/PaginationController';
import { BOOKS } from '../../constants/libros de prueba de caca/librosdeKK';

const Home = () => {
	const booksPerPage = 18;
	const [currentPage, setCurrentPage] = useState(0);

	const dataToRender = BOOKS.slice(
		currentPage * booksPerPage,
		(currentPage + 1) * booksPerPage
	);

	const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(AuthContext);

	// useEffect(() => {
	// 	const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
	// 		const dataInfo = snapshot.docs.map(doc => ({
	// 			...doc.data(),
	// 			id: doc.id
	// 		}));
	// 		dataInfo.length === 0 ? setPosts(null) : setPosts(dataInfo);
	// 	});
	// 	return () => subscribeToData();
	// }, []);

	return (
		<StyledMain>
			<SectionTitle text='Descubre nuevas lecturas' />
			<StyledRow>
				{dataToRender.map(post => {
					return (
						<BookCard
							key={post.id}
							id={post.id}
							image={post.image}
							author={post.author}
							name={post.name}
						/>
					);
				})}
			</StyledRow>
			<PaginationController
				handleClickNext={() => nextPage(setCurrentPage, currentPage)}
				handleClickPrevious={() => previousPage(setCurrentPage, currentPage)}
				currentPage={currentPage + 1}
				disabledNext={(currentPage + 1) * booksPerPage >= BOOKS.length}
				disabledPrevious={currentPage === 0}
			/>
		</StyledMain>
	);
};

const nextPage = (setCurrentPage, currentPage) => {
	setCurrentPage(currentPage + 1);
};

const previousPage = (setCurrentPage, currentPage) => {
	setCurrentPage(currentPage - 1);
};

export default Home;
