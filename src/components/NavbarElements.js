import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

import { Menu } from '../images/menu_icon.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = styled.header`
    position: fixed;
    display: flex;
    width: 100%;
    margin: 2rem;
    gap: var(--gap, 1rem);
    align-items: center;
    justify-content: space-between;
    font-family: Fira Sans;
    z-index: 20;
`

export const Nav = styled.nav`
    
`

export const Wrapper = styled.ul` 
    display: flex;
    gap: var(--gap, 1rem);

    list-style: none;
    padding: 0;
    margin: 0;

    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1rem);

    @media (max-width: 35em) {
        --gap: 3em;

        position: fixed;
        inset: 0 0 0 30%;
        z-index: 1000;

        flex-direction: column;
        padding: min(30vh, 10rem) 2em;

        transform: ${({ visible }) => (visible ? "translateX(0%)" : "translateX(100%)")};
        transition: 0.35s ease-in-out;
    }

    @media (min-width: 35em) {
        --gap: clamp(1.5rem, 5vw, 3rem);
        padding-block: 2rem;
        padding-inline: clamp(3em, 8vw, 10rem)
    }
`

export const Active = styled.li`

`

export const Link = styled(LinkS)`
    display: inline;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    color: white;
    letter-spacing: 2px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    :hover {
        color: #FFD8BE;
        transition: 0.2s ease-in-out;
    }

    :after {
        content: "";
        position: absolute;
        left: 0;
        width: 0;
        bottom: -3px;
        background: white;
        height: 2px;
        transition-property: width;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
    }

    :hover:after,
    :focus:after,
    :active:after {
        background: #FFD8BE;
        width: 100%;
    }
`

export const Span = styled.span`
    font-family: Courier;
    font-size: 70%;
    font-weight: 600;
    margin-inline-end: 0.75em;

    @media (min-width: 35em) and (max-width: 55em){
        display: none;
    }
`

export const HamburgerMenu = styled.img`
    display: none;

    @media (max-width: 35em) {
        display: block;
        position: absolute;
        z-index: 9999;
        top: 2rem;
        right: 2rem;
        width: 2rem;
        height: 2rem;
    }
`