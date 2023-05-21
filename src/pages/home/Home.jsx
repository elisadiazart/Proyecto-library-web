import { useContext, useEffect, useState } from "react";
import { blogCollectionReference } from '../../config/firebase.config';

import { AuthContext } from '../../contexts/auth.context';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { StyledBook, StyledCover, StyledData} from "./styles";

const Home = () => {
    const [posts, setPosts] = useState([]);
	const { currentUser } = useContext(AuthContext);

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

    return <main>
        <h2>Descubre nuevas lecturas</h2>
        {posts.map(post => {
					return (
                        <div key={post.id}>
						<StyledBook >
							<StyledCover src={post.image} alt="" />
                            <StyledData>
                                <p>{post.name}</p>
                                <p>{post.author}</p>
                            </StyledData>
						</StyledBook>
                            <button>Añadir a</button>
                        </div>
					);
				})}
    </main>
}

export default Home