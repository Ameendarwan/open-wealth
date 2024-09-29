/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'

export const Layout = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 88rem;
    margin: ${theme.spacing(7)} auto;
    padding-left: ${theme.spacing(2)};
    padding-right: ${theme.spacing(2)};

    > section {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: ${theme.spacing(2)};
    }

    > footer {
      margin-top: ${theme.spacing(6)};
      padding-top: ${theme.spacing(4)};
      border-top: 0.1rem solid ${theme.palette.grey[300]};
    }

    pre {
      margin: ${theme.spacing(0.5)} 0 ${theme.spacing(4)};
      padding: ${theme.spacing(2)};
      overflow-x: auto;
      border-radius: ${theme.spacing(0.5)};
      font-family:
        SFMono-Regular,
        Consolas,
        Liberation Mono,
        Menlo,
        monospace;
      tab-size: 4;
      background-color: ${theme.palette.grey[100]};
      color: ${theme.palette.grey[900]};
    }
  `}
`
