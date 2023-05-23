import { useContext, useEffect, useState } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';

import { AuthContext } from '../../contexts/auth.context';
import { onSnapshot } from 'firebase/firestore';
import { StyledMain, StyledRow } from './styles';
import SectionTitle from '../../components/section-title/SectionTitle';
import BookCard from '../../components/book-card/BookCard';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const [page, setPage] = useState({
		start: 0,
		end: 18
	})
	const [postsToRender, setPostToRender] = useState([]);

	useEffect(() => {
		const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}));
			dataInfo.length === 0 ? setPosts(null) : setPosts(dataInfo);
			console.log(posts);
			nextPage(posts, setPostToRender, page.start, page.end)
			
		});
		return () => subscribeToData();
	}, [posts]);

	

	return (
		<StyledMain>
			<SectionTitle text='Descubre nuevas lecturas' />
			<StyledRow>
				{postsToRender.map(post => {
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
			<div>1</div>
			<button onClick={() => nextPage(posts, setPostToRender,  page.start, page.end, setPage)}>Next</button>
		</StyledMain>
	);
};

const nextPage = (posts, setPostToRender, start, end, setPage) => {
	if(end <= 18) setPostToRender(posts.slice(start, end))
	else {
		setPage({
			start: start +18,
			end: end + 18
		})
		setPostToRender(posts.slice(start, end))
	}
};

export default Home;
