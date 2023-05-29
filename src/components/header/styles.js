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
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 1000;
`;

const StyledContainer = styled.div`
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 0;
	@media screen and (min-width: 640px) {
		width: 700px;
		align-items: flex-start;
	}
	@media screen and (min-width: 1024px) {
		width: 1000px;
	}
`;

const StyledUl = styled.ul`
	display: flex;
	gap: 1.5rem;
`;

const StyledNav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	align-items: flex-end;
	@media screen and (min-width: 1024px) {
		display: flex;
		gap: 1.5rem;
		flex-direction: row;
		align-items: center;
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

const StyledSearch = styled.input`
	border: 0;
	border-radius: 50px;
	background-color: transparent;
	font-family: 'Poppins', sans-serif;
	font-size: 0.8rem;
	height: 100%;

	&:focus {
		outline: none;
	}
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
	width: 150px;
	opacity: 0;
	transform: translateX(-70%);
	bottom: -240%;
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
