import Logo from 'components/Logo'
import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.LogoWrapper>
      <Logo size="small" />
    </S.LogoWrapper>

    <S.MenuNav>
      <S.MenuLink>Home</S.MenuLink>
      <S.MenuLink>Contributors</S.MenuLink>
      <S.MenuLink>About me</S.MenuLink>
      <S.MenuLink>Services</S.MenuLink>
      <S.MenuLink>Portfolio</S.MenuLink>
      <S.MenuLink>Contact</S.MenuLink>
    </S.MenuNav>

    <S.ButtonWrapper>
      <button>Portfolio Here</button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default Menu
