import {
    Header,
    Nav,
    Wrapper,
    Active,
    Link,
    Span,
    HamburgerMenu
} from './NavbarElements.js';



import { useState } from 'react';
import Apple from '../images/greg.png';
import Hamburger from '../images/menu_icon.jpg';

function Navbar() {
    const [visible, setVisibility] = useState(false);

    return (
        <Header>
            <div>
                {/* <Logo to="/" onClick={() => toggleHome()}></Logo> */}
            </div>

            <HamburgerMenu src={ Hamburger } alt='Hello' onClick={() => setVisibility(!visible)}/>

            <Nav>
                <Wrapper visible={ visible } data-visible="false">
                    <Active>
                        <Link 
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        ><Span aria-hidden="true">01</Span>About</Link>
                    </Active>
                    <Active>
                        <Link
                            to="experience"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        ><Span aria-hidden="true">02</Span>Experience</Link>
                    </Active>
                    <Active>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        ><Span aria-hidden="true">03</Span>Projects</Link>
                    </Active>
                    <Active>
                        <Link><Span aria-hidden="true">04</Span>Contact</Link>
                    </Active>
                </Wrapper>
            </Nav>
        </Header>
    );
}

export default Navbar;