import styled from 'styled-components';

const StyledMain = styled.main`
	margin: auto;
	margin-top: 11rem;
	width: 500px;
	@media screen and (min-width: 1024px) {
		width: 1000px;
	}
`;

const StyledRow = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 150px);
	grid-template-rows: repeat(6, 1fr);
	justify-content: space-between;
	gap: 4rem 0;
	margin-bottom: 6rem;
	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(6, 150px);
		grid-template-rows: repeat(2, 1fr);
	}
`;

export { StyledMain, StyledRow };
