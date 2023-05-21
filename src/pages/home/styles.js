import styled from 'styled-components';

const StyledData = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: none;
	opacity: 0;
	color: white;
	z-index: 100;
`

const StyledBook = styled.div`
	width: 146px;
	height: 205px;
	position: relative;
	&:hover {

		::after{
			content: '';
			width: 100%;
			height: 100%;
			background-color: rgba(144, 164, 234, 0.79);
			position: absolute;
			top: 0;
			z-index: 10;
		}

		${StyledData} {
			display: block;
			opacity: 1;
			transition: opacity .5s;
		}
	}
`

const StyledCover = styled.img`
	width: 100%;
	border-radius: 0px 10px 10px 0px;
`



export { StyledBook, StyledCover, StyledData };