import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

/* <{ width?: number }> o sinal de ? vai dizer que a props é opcional */
export const TableHeadColumn = styled.th<{ width?: number }>`
  /* criando props no styled components */
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 10px 0;
  text-align: left;
  `;
