import { useContext } from 'react';
import { StyledOption, StyledOptions } from './styles';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth.context';

const OptionsAdd = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	return (
		<StyledOptions>
			<StyledOption
				onClick={() => {
					selectOption(currentUser, navigate);
				}}
			>
				Mi estanteria
			</StyledOption>
			<StyledOption
				onClick={() => {
					selectOption(currentUser, navigate);
				}}
			>
				Cambiar datos
			</StyledOption>
			<StyledOption onClick={() => selectOption(currentUser, navigate)}>
				Prueba
			</StyledOption>
		</StyledOptions>
	);
};

const selectOption = (currentUser, navigate) => {
	!currentUser && navigate('sign-in');
};

export default OptionsAdd;
