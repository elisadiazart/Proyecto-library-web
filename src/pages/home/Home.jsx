import { useContext, useEffect, useState } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';
import { onSnapshot } from 'firebase/firestore';
import { StyledMain, StyledRow } from './styles';
import SectionTitle from '../../components/section-title/SectionTitle';
import BookCard from '../../components/book-card/BookCard';
import PaginationController from '../../components/pagination-controller/PaginationController';
import { SearchContext } from '../../contexts/search.context';

const Home = () => {
	const booksPerPage = 12;
	const [currentPage, setCurrentPage] = useState(0);
	const [books, setBooks] = useState([]);
	const [booksToRender, setBooksToRender] = useState([]);
	const { search } = useContext(SearchContext);

	const dataToRender = booksToRender.slice(
		currentPage * booksPerPage,
		(currentPage + 1) * booksPerPage
	);

	useEffect(() => {
		filterData(books, search, setBooksToRender);
	}, [search]);

	useEffect(() => {
		const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}));
			dataInfo.length === 0 ? setBooks(null) : setBooks(dataInfo);
			setBooksToRender(dataInfo);
		});
		return () => subscribeToData();
	}, []);

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
				disabledNext={(currentPage + 1) * booksPerPage >= booksToRender.length}
				disabledPrevious={currentPage === 0}
			/>
		</StyledMain>
	);
};

const filterData = (books, search, setBooksToRender) => {
	const filteredData = books.filter(post =>
		post.name.toLowerCase().includes(search.toLowerCase())
	);
	setBooksToRender(filteredData);
};

const nextPage = (setCurrentPage, currentPage) => {
	setCurrentPage(currentPage + 1);
};

const previousPage = (setCurrentPage, currentPage) => {
	setCurrentPage(currentPage - 1);
};

export default Home;
