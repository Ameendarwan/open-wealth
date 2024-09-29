/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing(2)};
    height: 100vh;
    width:100%
    border-right: 0.1rem solid ${theme.palette.grey[200]};
    box-shadow: ${theme.shadows[2]};

    a:not(:first-of-type) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
      background-color: ${theme.palette.grey[100]};
      color: ${theme.palette.grey[600]};
      border-radius: ${theme.spacing(1)};

      &:hover {
        background-color: ${theme.palette.grey[200]};
        color: ${theme.palette.grey[700]};
      }

      &.active {
        color: ${theme.palette.primary.main};
        background-color: ${theme.palette.primary[50]};

        &:hover {
          color: ${theme.palette.primary.dark};
          background-color: ${theme.palette.primary[100]};
        }
      }
    }
  `}
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(1)};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 6.9rem;
  `}
`
