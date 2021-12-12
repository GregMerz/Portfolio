import { SidebarContainer, SidebarLink, SidebarWrapper, SidebarImg } from './SidebarElements';
import LinkedIn from '../images/LinkedIn.png';
import GitHub from '../images/Github.png';
import Email from '../images/Email.png';

function Sidebar({ scroll }) {
    return (
        <SidebarContainer scroll={scroll}>
            <SidebarWrapper>
                <SidebarLink to='/'>
                    Home
                </SidebarLink>
                <SidebarLink to='contact'>
                    Experience
                </SidebarLink>
                <SidebarLink to='home'>
                    Projects
                </SidebarLink>
                <SidebarLink to='projects'>
                    Contact
                </SidebarLink>
                <SidebarLink to='contact'>
                </SidebarLink>
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