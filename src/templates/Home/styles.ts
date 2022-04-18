import { Container } from 'components/Container'
import * as Heading from 'components/Heading/styles'
import * as Logo from 'components/Logo/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

type SectionProps = {
  imgBackground: string
}
export const Section = styled.div<SectionProps>`
  ${({ imgBackground }) => css`
    margin-top: 5rem;
    width: 100%;
    height: 75rem;
    background-image: url(${imgBackground});
    background-position: center center;
    background-size: cover;
  `}

  ${Container} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24rem;
    position: relative;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  ${Heading.Wrapper} {
    padding-top: -2rem;
  }

  ${({ theme }) => css`
    > button {
      width: 18rem;
      height: 5.2rem;
      border: none;

      background-color: ${theme.colors.primary};
      color: white;
      font-weight: 600;
      font-size: 1.8rem;

      margin-top: 3.3rem;
    }
  `}
`

export const Hello = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.semibold};
    font-size: ${theme.font.sizes.normal};
    color: ${theme.colors.black};
    opacity: 0.6;
  `}
`

export const Name = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.semibold};
    font-size: 3.2rem;
    color: ${theme.colors.primary};
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
    margin-top: 1.2rem;
  `}
`

export const SocialWrapper = styled.div`
  margin-top: 3.5rem;
  svg {
    font-size: 2.7rem;
    margin-right: 4.5rem;
  }
`

export const ImageWrapper = styled.div``

type IllustrationWrapperProps = {
  src: string
}

export const IllustrationWrapper = styled.div<IllustrationWrapperProps>`
  ${({ src }) => css`
    width: 55rem;
    height: 83rem;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(62, 62, 228, 0) 41%
      ),
      url(${src});
    background-size: cover;
    position: relative;
  `}
`

export const LineWrapper = styled.div`
  position: absolute;
  left: 5rem;
  bottom: 15rem;
`

export const AboutmeWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Text} {
    padding: 0 20rem;
    text-align: center;
  }
`
type WalkerWrapperPropos = {
  src: string
}
export const WalkerWrapper = styled.div<WalkerWrapperPropos>`
  ${({ src }) => css`
    width: 100%;
    height: 110rem;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    display: flex;
    justify-content: center;

    position: relative;

    .people {
      object-fit: cover;
    }

    .lineAboutme {
      width: 100%;
    }

    .balls {
      position: absolute;
      left: 10rem;
    }

    .eclipse {
      position: absolute;
      right: 0;
      top: 25rem;
    }
    > img {
      margin-top: 11rem;
      position: absolute;
    }
  `}
`

export const ServicesWrapper = styled.section`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 15rem;

  ${Text} {
    padding: 0 20rem;
  }
`

export const ServicesItems = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8rem;

    position: relative;

    .center {
      width: 41rem;

      background-color: ${theme.colors.white};
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  `}
`
export const ServiceItem = styled.div`
  margin-top: 17rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ServiceItemInfo = styled.div`
  ${({ theme }) => css`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    img {
      height: 12rem;
      object-fit: cover;
    }

    h2 {
      font-size: 3.2rem;
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.black};
      margin-top: 4rem;
    }

    p {
      font-size: 2.4rem;
      font-weight: 400;
      color: ${theme.colors.gray};
      text-align: left;
      margin-top: 0.9rem;
    }
  `}
`

export const ContributorsWrapper = styled.section`
  margin-top: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${Text} {
    padding: 0 20rem;
    text-align: center;
  }
`

export const ContributorsItems = styled.div`
  margin-top: 17rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${Container} {
    margin-bottom: 6rem;
  }

  a {
    margin-right: 4rem;
  }
`

export const ContactWrapper = styled.section`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 20rem;
  }

  ${Heading.Wrapper} {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${Text} {
    padding: 0 20rem;
    text-align: center;
    margin-top: 2rem;
  }

  ${Logo.Wrapper} {
    margin-top: 12rem;
  }

  ${SocialWrapper} {
    margin-top: 11rem;
    display: flex;
  }
`

export const Footer = styled.p`
  text-align: center;

  padding: 5rem 0;
`
