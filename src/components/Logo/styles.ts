import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 9.6rem;
    height: 4.6rem;
  `,
  medium: () => css`
    width: 26.2rem;
    height: 12.6rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`
