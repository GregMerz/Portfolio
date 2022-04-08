import {
  Header,
  Logo,
  Nav,
  Wrapper,
  Active,
  Link,
  Span,
  HamburgerMenuWrapper,
  MenuIcon,
  CloseIcon,
} from './NavbarElements.js'

import { useState } from 'react'
import Apple from '../../images/greg.png'
import Hamburger from '../../images/menu_icon.jpg'

function Navbar({ scroll }) {
  const [visible, setVisibility] = useState(false)

  const toggle = () => {
    setVisibility(!visible)
  }

  return (
    <Header>
      <div>
        <Logo href="/">Greg Merz</Logo>
      </div>

      <HamburgerMenuWrapper onClick={toggle}>
        {visible ? <CloseIcon /> : <MenuIcon />}
      </HamburgerMenuWrapper>

      <Nav>
        <Wrapper visible={visible} data-visible="false">
          <Active>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              scroll={scroll}
              offset={0}
              start={0.7}
              end={1.7}
            >
              <Span aria-hidden="true">01</Span>About
            </Link>
          </Active>
          <Active>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              scroll={scroll}
              offset={0}
              start={1.7}
              end={2.7}
            >
              <Span aria-hidden="true">02</Span>Experience
            </Link>
          </Active>
          <Active>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              scroll={scroll}
              offset={0}
              start={2.7}
              end={3.7}
            >
              <Span aria-hidden="true">03</Span>Projects
            </Link>
          </Active>
          <Active>
            <Link scroll={scroll} start={2588} end={3000}>
              <Span aria-hidden="true">04</Span>Contact
            </Link>
          </Active>
        </Wrapper>
      </Nav>
    </Header>
  )
}

export default Navbar
