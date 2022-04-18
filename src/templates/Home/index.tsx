/* eslint-disable @next/next/no-img-element */
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Menu from 'components/Menu'
import Link from 'next/link'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import * as S from './styles'
const Home = () => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>
    <S.Section imgBackground="/img/background.png">
      <Container>
        <S.Info>
          <S.Hello>Holla, {'i'}m</S.Hello>
          <S.Name>Justin Vaccaro</S.Name>
          <Heading>Creative</Heading>
          <Heading dots={true}> Designer</Heading>

          <S.Text>
            Since creative designers often interact with creative teams,
            managers and clients, they need strong communication skills.
          </S.Text>

          <S.SocialWrapper>
            <BsFacebook />
            <RiInstagramFill />
            <BsTwitter />
            <FaLinkedinIn />
          </S.SocialWrapper>

          <button>CV Here</button>
        </S.Info>
        <S.ImageWrapper>
          <S.IllustrationWrapper src="/img/foto.png" />
          <S.LineWrapper>
            <img src="/img/linha.png" alt="line" />
          </S.LineWrapper>
        </S.ImageWrapper>
      </Container>
    </S.Section>
    <Container>
      <S.AboutmeWrapper>
        <Heading dots>About me</Heading>
        <S.Text>
          Im Justin Vaccaro and i do web design, Graphic Design, User
          Experiences. habitant et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet.
        </S.Text>

        <S.WalkerWrapper src="/img/aboutme/abstract.png">
          <img className="lineAboutme" src="/img/aboutme/linha.png" alt="" />

          <img className="people" src="/img/aboutme/walk.png" />

          <img className="balls" src="/img/aboutme/balls.png" alt="" />

          <img className="eclipse" src="/img/aboutme/Eclipse.png" alt="" />
        </S.WalkerWrapper>
      </S.AboutmeWrapper>
    </Container>

    <S.ServicesWrapper>
      <Container>
        <Heading dots>Services</Heading>
        <S.Text>
          Since creative designers often interact with creative teams, managers
          and clients, they need strong communication skills.
        </S.Text>

        <S.ServicesItems>
          <S.ServiceItem>
            <S.ServiceItemInfo>
              <img src="/img/services/Vector.png" alt="" />
              <h2>UI/UX Design</h2>
              <p>
                Why money's in that office, right If she start giving me some
                bullshit about it ain't there someplace or anywhere.
              </p>
            </S.ServiceItemInfo>
          </S.ServiceItem>
          <S.ServiceItem className="center">
            <S.ServiceItemInfo>
              <img src="/img/services/Vector-1.png" alt="" />
              <h2>Web Design</h2>
              <p>
                Why money's in that office, right If she start giving me some
                bullshit about it ain't there someplace or anywhere.
              </p>
            </S.ServiceItemInfo>
          </S.ServiceItem>
          <S.ServiceItem>
            <S.ServiceItemInfo>
              <img src="/img/services/Vector-2.png" alt="" />
              <h2>WP Developing</h2>
              <p>
                Why money's in that office, right If she start giving me some
                bullshit about it ain't there someplace or anywhere.
              </p>
            </S.ServiceItemInfo>
          </S.ServiceItem>
        </S.ServicesItems>
      </Container>
    </S.ServicesWrapper>

    <S.ContributorsWrapper>
      <Heading dots>Contributors</Heading>
      <S.Text>
        Since creative designers often interact with creative teams, managers
        and clients, they need strong communication skills.
      </S.Text>

      <S.ContributorsItems>
        <Container>
          <Link href="#">
            <a>
              <img src="/img/contributors/behance.png" alt="" />
            </a>
          </Link>

          <Link href="#">
            <a>
              <img src="/img/contributors/behance-1.png" alt="" />
            </a>
          </Link>

          <Link href="#">
            <a>
              <img src="/img/contributors/behance-2.png" alt="" />
            </a>
          </Link>
        </Container>
        <Container>
          <Link href="#">
            <a>
              <img src="/img/contributors/behance-3.png" alt="" />
            </a>
          </Link>

          <Link href="#">
            <a>
              <img src="/img/contributors/behance-4.png" alt="" />
            </a>
          </Link>
        </Container>
      </S.ContributorsItems>
    </S.ContributorsWrapper>

    <S.ContactWrapper>
      <img src="/img/contact/line.png" />
      <Heading dots>Contact</Heading>

      <S.Text>
        Truth is a deep kindness that teaches us to be content in our everyday
        life and share with the people the same happiness. the feeling of sunday
        is the same everywhere: heavy, melancholy, standing still.
      </S.Text>

      <Logo size="medium" />

      <S.SocialWrapper>
        <BsFacebook />
        <RiInstagramFill />
        <BsTwitter />
        <FaLinkedinIn />
      </S.SocialWrapper>
    </S.ContactWrapper>

    <S.Footer>© 2021 AbbVie Inc. . All rights reserved</S.Footer>
  </S.Wrapper>
)

export default Home
