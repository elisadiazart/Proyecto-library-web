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
	StyledProfileDiv,
	StyledProfileOption
} from './styles';
import { AuthContext } from '../../contexts/auth.context';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { NavLink, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../contexts/search.context';

const Header = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	const { setSearch } = useContext(SearchContext);

	return (
		<StyledHeader>
			<StyledContainer>
				<StyledLogo onClick={() => navigate('/')}>
					<StyledLogoImage src='/public/Logo.svg' alt='Logo Lectus' />
					<StyledH1>LectUs</StyledH1>
				</StyledLogo>
				<StyledNav>
					<StyledForm>
						<StyledSearchIcon src='/search.svg' alt='' />
						<StyledSearch
							type='text'
							placeholder='Buscar por título...'
							onChange={e => setSearch(e.target.value)}
						/>
					</StyledForm>
					<StyledUl>
						{currentUser ? (
							<>
								{/* <StyledLi>
									<NavLink href=''>Calendario</NavLink>
								</StyledLi>
								<StyledLi>
									<NavLink href=''>Siguiendo</NavLink>
								</StyledLi> */}
								<StyledProfileDiv>
									<StyledUserIcon src='' alt='' />
									<StyledLogOut>
										<StyledProfileOption>Perfil</StyledProfileOption>
										<StyledProfileOption
											onClick={() => handleSignOut(navigate)}
										>
											Cerrar Sesión
										</StyledProfileOption>
									</StyledLogOut>
								</StyledProfileDiv>
							</>
						) : (
							<>
								<StyledLi>
									<NavLink to={'/sign-in'}>Sign in</NavLink>
								</StyledLi>
								<StyledLi>
									<NavLink to={'/log-in'}>Log in</NavLink>
								</StyledLi>
							</>
						)}
					</StyledUl>
				</StyledNav>
			</StyledContainer>
		</StyledHeader>
	);
};

const handleSignOut = async navigate => {
	await signOut(auth);
	navigate('/');
};

export default Header;
