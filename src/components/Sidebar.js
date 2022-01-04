import { SidebarContainer, SidebarLink, SidebarSection, SidebarWrapper, SidebarImg, Logo } from './SidebarElements';
import LinkedIn from '../images/LinkedIn.png';
import GitHub from '../images/Github.png';
import Email from '../images/Email.png';
import Signature from '../images/signature.png';

import { animateScroll as scroll } from 'react-scroll';

function Sidebar({ scroll }) {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <SidebarContainer scroll={scroll}>
            <Logo src={Signature} alt="Greg" onClick={() => toggleHome()}></Logo>
            <SidebarWrapper> 
                <SidebarSection 
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                />
                <SidebarSection 
                    to="experience"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                />
                <SidebarSection 
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                />
                <SidebarSection 
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                />
                <SidebarLink to='linkedin'>
                    <SidebarImg src={LinkedIn} alt="LinkedIn"></SidebarImg>
                </SidebarLink>
                <SidebarLink to='github'>
                    <SidebarImg src={GitHub} alt="GitHub"></SidebarImg>
                </SidebarLink>
                <SidebarLink to='email'>
                    <SidebarImg src={Email} alt="Email"></SidebarImg>
                </SidebarLink>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;