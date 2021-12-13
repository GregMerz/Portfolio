import {
    Header,
    Logo,
    Nav,
    Wrapper,
    Active,
    HyperLink,
    Span,
    HamburgerMenu
} from './NavbarElements.js';

import { useState } from 'react';
import Apple from '../images/apple.png';

function Navbar() {
    const [visible, setVisibility] = useState(false);

    return (
        <Header>
            <div>
                <Logo src={ Apple } alt="Logo"></Logo>
            </div>

            <HamburgerMenu onClick={() => setVisibility(!visible)}></HamburgerMenu>

            <Nav>
                <Wrapper visible={ visible } data-visible="false">
                    <Active>
                        <HyperLink href='/'><Span aria-hidden="true">00</Span>Home</HyperLink>
                    </Active>
                    <Active>
                        <HyperLink href='/'><Span aria-hidden="true">01</Span>Experience</HyperLink>
                    </Active>
                    <Active>
                        <HyperLink href='/'><Span aria-hidden="true">02</Span>Projects</HyperLink>
                    </Active>
                    <Active>
                        <HyperLink href='/'><Span aria-hidden="true">03</Span>Contact</HyperLink>
                    </Active>
                </Wrapper>
            </Nav>
        </Header>
    );
}

export default Navbar;