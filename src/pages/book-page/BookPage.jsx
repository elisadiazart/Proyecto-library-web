import { useParams } from 'react-router-dom';
import Text from '../../components/text/Text';

const BookPage = () => {
	const params = useParams();
	return (
		<main>
			<h1>{params.id}</h1>
			<div>
				<img src='' alt='' />
			</div>
			<div>
				<h3>saga</h3>
				<h2>Titulo</h2>
				<Text text='author' />
				<Text text='editorial' />
				<Text text='paginas' />
				<Text text='fecha' />
				<Text text='isbn' />
				<Text text='sinopsis' />
			</div>
		</main>
	);
};

export default BookPage;
