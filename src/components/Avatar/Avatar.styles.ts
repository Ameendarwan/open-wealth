/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { switchProp } from 'styled-tools'
import type { AvatarBaseProps } from './types'

export const StyledAvatar = styled.div<AvatarBaseProps>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    background-color: ${theme.palette.grey[50]};
    color: ${theme.palette.grey[100]};
  `}

  ${switchProp('size', {
    s: css`
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 1.6rem;
      font-size: 1.2rem;
    `,
    m: css`
      width: 4rem;
      height: 4rem;
      border-radius: 2rem;
      font-size: 1.2rem;
    `,
    l: css`
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 2.4rem;
      font-size: 1.4rem;
    `,
    xl: css`
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 2.8rem;
      font-size: 1.6rem;
    `,
  })}

  ${switchProp('variant', {
    primary: css`
      background-color: #edb0ec;
      color: #450f44;

      &:hover {
        background-color: #dc79da;
      }
    `,
    secondary: css`
      background-color: #5df3a7;
      color: #09432f;

      &:hover {
        background-color: #22e76d;
      }
    `,
  })}
`
