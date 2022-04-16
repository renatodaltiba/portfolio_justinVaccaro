import styled, { css } from 'styled-components'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.semibold};
    font-size: ${theme.font.sizes.title};

    span {
      color: ${theme.colors.primary};
    }
  `}
`
