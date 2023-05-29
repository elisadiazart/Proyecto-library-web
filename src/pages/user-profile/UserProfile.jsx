import { useContext } from 'react';
import SectionTitle from '../../components/section-title/SectionTitle';
import {
	StyledButton,
	StyledChallenge,
	StyledMain,
	StyledMainContent,
	StyledProfile,
	StyledProfileContainer,
	StyledText,
	StyledShelfTitle,
	StyledShelfData,
	StyledShelfBooks,
	StyledCurrentReadings,
	StyledMessage
} from './styles';
import { AuthContext } from '../../contexts/auth.context';
import OutlineButton from '../../components/outline-button/OutlineButton';

const UserProfile = () => {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	return (
		currentUser && (
			<StyledMain>
				<StyledMainContent>
					<StyledProfileContainer>
						{currentUser.profilePicture.length === 0 ? (
							<StyledProfile src='/public/profile.jpeg' alt='profile' />
						) : (
							<StyledProfile src={currentUser.profilePicture} alt='profile' />
						)}
						<OutlineButton text='cambiar foto' />
					</StyledProfileContainer>
					{!currentUser.yearChallenge ? (
						<StyledChallenge>
							<StyledText>No hay reto anual</StyledText>
							<StyledButton>Crear Reto</StyledButton>
						</StyledChallenge>
					) : (
						<StyledChallenge>hay reto </StyledChallenge>
					)}

					<div>
						<SectionTitle text='Mis libros' />
						<div>
							<StyledShelfData>
								<StyledShelfTitle>Mi estantería</StyledShelfTitle>
								<StyledShelfTitle>
									{currentUser.library.length}
								</StyledShelfTitle>
							</StyledShelfData>
							<StyledShelfBooks></StyledShelfBooks>
						</div>
						<div>
							<StyledShelfData>
								<StyledShelfTitle>Quiero Leer...</StyledShelfTitle>
								<StyledShelfTitle>{currentUser.toRead.length}</StyledShelfTitle>
							</StyledShelfData>
							<StyledShelfBooks></StyledShelfBooks>
						</div>
						<div>
							<StyledShelfData>
								<StyledShelfTitle>Abandonados</StyledShelfTitle>
								<StyledShelfTitle>
									{currentUser.abandoned.length}
								</StyledShelfTitle>
							</StyledShelfData>
							<StyledShelfBooks></StyledShelfBooks>
						</div>
					</div>
				</StyledMainContent>
				<StyledCurrentReadings>
					{currentUser.reading.length === 0 && <StyledMessage>No has marcado ningún libro como &quot;leyendo&quot;</StyledMessage>}
				</StyledCurrentReadings>
			</StyledMain>
		)
	);
};

export default UserProfile;
