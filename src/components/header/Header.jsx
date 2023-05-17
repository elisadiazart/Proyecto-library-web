import { useContext } from 'react';
import {
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
} from './styles';
import { AuthContext } from '../../contexts/auth.context';

const Header = () => {
	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return (
			<StyledHeader>
				<StyledContainer>
					<StyledLogo>
						<StyledLogoImage src='public/Logo.svg' alt='' />
						<StyledH1>LectUs</StyledH1>
					</StyledLogo>
					<StyledNav>
						<StyledForm>
							<StyledSearchIcon src='public/search.svg' alt='' />
							<StyledSearch type='text' placeholder='Buscar lectura...' />
						</StyledForm>
						<StyledUl>
							<StyledLi>
								<a href=''>Calendario</a>
							</StyledLi>
							<StyledLi>
								<a href=''>Siguiendo</a>
							</StyledLi>
							<StyledProfileDiv>
							<StyledUserIcon src='' alt='' />
							<StyledLogOut>Cerrar Sesión</StyledLogOut>
							</StyledProfileDiv>
						</StyledUl>
					</StyledNav>
				</StyledContainer>
			</StyledHeader>
		);
	}
	return (
		<StyledHeader>
			<StyledContainer>
				<StyledLogo>
					<StyledLogoImage src='public/Logo.svg' alt='' />
					<StyledH1>LectUs</StyledH1>
				</StyledLogo>
				<StyledNav>
					<StyledUl>
						<StyledLi>
							<a href=''>Sign in</a>
						</StyledLi>
						<StyledLi>
							<a href=''>Log in</a>
						</StyledLi>
					</StyledUl>
				</StyledNav>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
