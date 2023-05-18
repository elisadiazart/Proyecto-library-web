const messages = {
	name: 'El formato introducido no es el correcto',
	requireName: 'El nombre es obligatorio',
	email: 'Debes introducir una dirección correcta',
	requireEmail: 'El email es obligatorio',
	password:
		'La contraseña debe tener entre 8 y 16 caracteres, al menos un número y una letra mayuscula.',
	requirePassword: 'La contraseña es obligatoria'
};

const patterns = {
	name: /^[A-Za-záéíóúñÁÉÍÓÚ]*$/,
	email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
	password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
};

export const FORM_VALIDATIONS = {
	name: {
		require: messages.requireName,
		pattern: patterns.name,
		message: messages.name
	},
	email: {
		require: messages.requireEmail,
		pattern: patterns.email,
		message: messages.email
	},
	password: {
		require: messages.requirePassword,
		pattern: patterns.password,
		message: messages.password
	}
};
