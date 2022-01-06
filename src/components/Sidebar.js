import {
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SidebarImg,
} from './SidebarElements'
import LinkedIn from '../images/LinkedIn.png'
import GitHub from '../images/Github.png'
import Email from '../images/Email.png'
import Signature from '../images/signature.png'

import { animateScroll as scroll } from 'react-scroll'

function Sidebar({ scroll }) {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <SidebarContainer scroll={scroll}>
      <SidebarWrapper>
        <SidebarLink
          href="https://www.linkedin.com/in/greg-merz-228756198/"
          target="_blank"
        >
          <SidebarImg src={LinkedIn} alt="LinkedIn"></SidebarImg>
        </SidebarLink>
        <SidebarLink href="https://github.com/GregMerz" target="_blank">
          <SidebarImg src={GitHub} alt="GitHub"></SidebarImg>
        </SidebarLink>
        <SidebarLink
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWxDcgmwcZfBrXKZSvzjmCWfwGXRpFWFlFsMKnHQhngNWVBPZFDXSMjDRcBxDlswszbBB"
          target="_blank"
        >
          <SidebarImg src={Email} alt="Email"></SidebarImg>
        </SidebarLink>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
