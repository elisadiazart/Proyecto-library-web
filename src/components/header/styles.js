import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledH1 = styled.h1`
	font-family: 'Delius Unicase', cursive;
`;

const StyledLogo = styled.div`
	display: flex;
	gap: 0.8rem;
	cursor: pointer;
`;

const StyledLogoImage = styled.img`
	width: 45px;
`;

const StyledHeader = styled.header`
	background-color: ${COLORS.yellow};
`;

const StyledContainer = styled.div`
	width: 1000px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 0;
`;

const StyledUl = styled.ul`
	display: flex;
	gap: 1.5rem;
`;

const StyledNav = styled.nav`
	display: flex;
	gap: 1.5rem;
	align-items: center;
`;

const StyledSearch = styled.input`
	border: 0;
	border-radius: 50px;
	background-color: transparent;
	font-family: 'Arimo', sans-serif;
	height: 100%;

	&:focus {
		outline: none;
	}
`;

const StyledForm = styled.form`
	position: relative;
	width: 290px;
	display: flex;
	padding: 0.6rem 1rem;
	border-radius: 50px;
	background-color: ${COLORS.bgColor};
	align-items: center;
	gap: 1rem;
`;

const StyledSearchIcon = styled.img`
	width: 13px;
`;

const StyledLi = styled.li`
	background-color: black;
	color: white;
	padding: 0.5rem 1.4rem;
	font-size: 0.88rem;
	border-radius: 50px;
	text-transform: uppercase;
	font-family: 'Poppins', sans-serif;
	height: 100%;
	font-weight: 500;

	&:hover {
		color: ${COLORS.yellow};
	}
`;

const StyledLogOut = styled.div`
	background-color: black;
	position: absolute;
	color: white;
	padding: 0.5rem;
	width: 180px;
	opacity: 0;
	transform: translateY(100%);
	bottom: -0.2rem;
	text-transform: uppercase;
	font-family: 'Poppins', sans-serif;
	font-size: 0.88rem;
	transition: opacity 0.2s;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	border-radius: 22px;

	&:hover {
		opacity: 1;
	}
`;

const StyledProfileDiv = styled.div`
	position: relative;
	&:hover {
		${StyledLogOut} {
			opacity: 1;
		}
	}
`;

const StyledUserIcon = styled.img`
	background-color: red;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`;

const StyledProfileOption = styled.p`
	font-family: 'Poppins', sans-serif;
	padding: 0.5rem 0;
	margin: 0 0.5rem;
	font-weight: 500;

	&:hover {
		color: ${COLORS.yellow};
	}
	&:first-child {
		border-bottom: 1px solid white;
	}
`;

export {
	StyledH1,
	StyledLogo,
	StyledLogoImage,
	StyledHeader,
	StyledContainer,
	StyledUl,
	StyledNav,
	StyledSearch,
	StyledForm,
	StyledSearchIcon,
	StyledLi,
	StyledUserIcon,
	StyledLogOut,
	StyledProfileDiv,
	StyledProfileOption
};
