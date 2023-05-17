import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledH1 = styled.h1`
	font-family: 'Delius Unicase', cursive;
`;

const StyledLogo = styled.div`
	display: flex;
	gap: 0.8rem;
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
	padding: 0.5rem 6rem 0.65rem 2.5rem;
	border-radius: 50px;
	font-family: 'Arimo', sans-serif;
	height: 100%;

	&:focus {
		outline: none;
	}
`;

const StyledForm = styled.form`
	position: relative;
`;

const StyledSearchIcon = styled.img`
	position: absolute;
	transform: translate(0, -50%);
	top: 50%;
	left: 1rem;
	width: 13px;
`;

const StyledLi = styled.li`
	background-color: black;
	color: white;
	padding: 0.6rem 1.4rem;
	font-size: 0.88rem;
	border-radius: 50px;
	text-transform: uppercase;
	font-family: 'Arimo', sans-serif;
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
	padding: 1rem;
	width: 160px;
	display: none;
	bottom: -4rem;
	text-transform: uppercase;
	font-family: 'Arimo', sans-serif;
	font-size: 0.88rem;
	
`

const StyledProfileDiv = styled.div`
	position: relative;
	&:hover {
		${StyledLogOut}{
			display: block;
		}
	}
`

const StyledUserIcon = styled.img`
	background-color: red;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;

	
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
	StyledProfileDiv
};
