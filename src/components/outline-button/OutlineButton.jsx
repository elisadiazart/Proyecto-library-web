import { StyledButton } from "./styles"

const OutlineButton = ({text, handleClick}) => {
    return <StyledButton onClick={handleClick}>{text}</StyledButton>
}

export default OutlineButton