import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  display: grid;
  overflow: auto;
`

export const TableHeader = styled.thead`
  background-color: #f4f4f4;
  text-align: left;
  text-indent: 1rem;
`

export const TableRow = styled.tr`
  &:hover {
    background-color: #eaeaea;
  }
`

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  color: ${props => props.color || 'inherit'};
`
