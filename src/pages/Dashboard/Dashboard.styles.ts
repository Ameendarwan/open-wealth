import styled, { css } from 'styled-components'

export const TableContainer = styled.div`
  ${() => css`
    width: 100%;
    display: grid;
    overflow: auto;
  `}
`

export const TableHeader = styled.thead`
  background-color: #f4f4f4;
  text-align: left;
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

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
