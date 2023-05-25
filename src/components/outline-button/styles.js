import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledButton = styled.button`
	background-color: transparent;
	border: 1px solid black;
	font-family: 'Poppins', sans-serif;
	padding: 0.4rem 1.2rem;
	border-radius: 50px;
	font-weight: 600;
	text-transform: uppercase;
	cursor: pointer;

	${props => {
		switch (props.variant) {
			case 'tag':
				return css`
					text-transform: none;
					font-weight: 400;
					font-size: 0.8rem;
				`;
		}
	}}

	&:hover {
		background-color: ${COLORS.yellow};
		text-decoration: underline;
	}
`;

export { StyledButton };
