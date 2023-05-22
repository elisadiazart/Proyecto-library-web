import styled from 'styled-components';

const StyledMain = styled.main`
	width: 1000px;
	margin: auto;
	margin-top: 4rem;
`;

const StyledRow = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 150px);
	justify-content: space-between;
	grid-template-rows: repeat(3, 1fr);
	gap: 4rem 0;
`;

export { StyledMain, StyledRow };
