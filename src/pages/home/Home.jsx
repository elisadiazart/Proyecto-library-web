import { useContext, useEffect, useState } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';

import { AuthContext } from '../../contexts/auth.context';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { StyledMain, StyledRow } from './styles';
import SectionTitle from '../../components/section-title/SectionTitle';
import BookCard from '../../components/book-card/BookCard';
import { set } from 'react-hook-form';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const [postsToRender, setPostToRender] = useState([]);

	useEffect(() => {
		const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}));
			dataInfo.length === 0 ? setPosts(null) : setPosts(dataInfo);
		});
		return () => subscribeToData();
	}, []);

	return (
		<StyledMain>
			<SectionTitle text='Descubre nuevas lecturas' />
			<StyledRow>
				{postsToRender.map((post, index) => {
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
			{posts.length > 18 && <div>1</div>}
			<button onClick={() => nextPage(posts, setPostToRender)}>Next</button>
		</StyledMain>
	);
};

const nextPage = (posts, setPostToRender) => {
	setPostToRender(posts.slice(0, 18));
};

export default Home;
