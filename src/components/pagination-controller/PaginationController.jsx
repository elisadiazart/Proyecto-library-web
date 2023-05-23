import OutlineButton from "../outline-button/OutlineButton"
import { StyledContainer } from "./styles"

const PaginationController = ({handleClickPrevious, handleClickNext}) => {
    return <StyledContainer>
        <OutlineButton handleClick={handleClickPrevious} text='Anterior'/>
        <p style={{textDecoration: 'underline'}}>1</p>
        <p>2</p>
        <OutlineButton handleClick={handleClickNext} text='Siguiente'/>
    </StyledContainer>
}

export default PaginationController