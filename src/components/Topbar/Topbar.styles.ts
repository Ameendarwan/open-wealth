import styled, { css } from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 0.1rem solid ${theme.palette.grey[200]};
    height: 6.4rem;
    display: flex;
    align-items: center;
    padding: ${theme.spacing(2)} ${theme.spacing(4)} ${theme.spacing(2)} ${theme.spacing(4)};
  `}
`
