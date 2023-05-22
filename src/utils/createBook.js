import { addDoc } from 'firebase/firestore';
import { blogCollectionReference } from '../config/firebase.config';

export const createBook = async () => {
	const newBook = {
		yearPublishe: 2020,
		author: 'Brandon Sanderson ',
		format: 'Tapa Dura',
		id: '',
		image:
			'https://firebasestorage.googleapis.com/v0/b/library-app-75d3b.appspot.com/o/91Nb4w7arrL.jpeg?alt=media&token=ef56863d-932c-4fe0-b2f6-5f44ef5b7829',
		isbn: 9788417347932,
		name: 'El Ritmo de la Guerra (El Archivo de las Tormentas 4)',
		pages: 1408,
		publishedBy: 'Nova',
		sinopsis:
			'Hay secretos que hemos guardado mucho tiempo. Vigilantes. Insomnes. Eternos. Y pronto dejarán de ser nuestros. La Una que es Tres busca, sin saberlo, el alma capturada. El spren aprisionado, olvidado hace mucho tiempo. ¿Puede liberar su propia alma a tiempo de hallar el conocimiento que condena a todos los pueblos de Roshar? El Soldado Caído acaricia y ama la lanza, incluso mientras el arma hiende su propia carne. Camina siempre hacia delante, siempre hacia la oscuridad, sin luz. No puede llevar consigo a nadie, salvo aquello que él mismo puede avivar. La Hermana Derrumbada comprende sus errores y piensa que ella misma es un error. Parece muy alejada de sus antepasados, pero no comprende que son quienes la llevan a hombros. Hacia la victoria, y hacia ese silencio, el más importante de todos. Y la Madre de Máquinas, la más crucial de todos ellos, danza con mentirosos en un gran baile. Debe desenmascararlos, alcanzar sus verdades ocultas y entregarlas al mundo. Tiene que reconocer que las peores mentiras son las que se cuenta a sí misma. Si lo hace, nuestros secretos por fin se convertirán en verdades.'
	};

	try {
		await addDoc(blogCollectionReference, {
			...newBook
		});
	} catch (err) {
		console.log(err);
	}
};
