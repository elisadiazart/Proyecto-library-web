import { addDoc } from 'firebase/firestore';
import { blogCollectionReference } from '../config/firebase.config';

export const createBook = async () => {
	const newBook = {
		yearPublishe: 2020,
		author: ' Agatha Christie',
		format: 'Tapa Blanda',
		image:
			'https://firebasestorage.googleapis.com/v0/b/library-app-75d3b.appspot.com/o/53450043.jpg?alt=media&token=b230f4bc-9620-475b-8e0f-f2490e985062',
		isbn: 9788467060164,
		name: 'Muerte en la vicaría',
		pages: 288,
		publishedBy: 'Planeta',
		sinopsis:
			'El cuerpo sin vida del coronel retirado Lucius Protheroe aparece en el despacho del vicario de St. Mary Mead, un pequeño y tranquilo pueblo de la campiña inglesa. La esposa de Lucius y su joven amante confiesan el asesinato. Sin embargo, su vecina, Miss Marple, una anciana con un profundo conocimiento de la naturaleza humana y una agudísima intuición, descarta inmediatamente su culpabilidad. La hija adolescente del coronel, el neurótico ayudante del vicario, el doctor del pueblo, un exconvicto encarcelado por el coronel y la enigmática viuda de un explorador forman la larga lista de sospechosos a los que Miss Marple investigará para dar con el culpable.'
	};

	try {
		await addDoc(blogCollectionReference, {
			...newBook
		});
	} catch (err) {
		console.log(err);
	}
};
