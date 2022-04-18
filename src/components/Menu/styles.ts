import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`
export const LogoWrapper = styled.div``
export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
    `}
  `}
`
export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.normal};
    margin: 0.3rem ${theme.spacings.medium} 0;
    text-decoration: none;
    cursor: pointer;
    text-align: center;

    &:hover {
      color: ${theme.colors.primary};
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.2rem;
        border-radius: ${theme.border.radius};
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 0%;
        }
        to {
          width: 50%;
          left: 0;
        }
      }
    }
  `}
`
export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    > button {
      width: 18.8rem;
      height: 5.2rem;

      border: none;
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};

      font-weight: ${theme.font.semibold};
      font-size: 1.8rem;
    }
  `}
`
