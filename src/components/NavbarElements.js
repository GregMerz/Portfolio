import styled from 'styled-components'
// import { Link as LinkS } from 'react-scroll';

export const Header = styled.header`
    /* class="primary-header flex"  */
    display: fixed;
    gap: var(--gap, 1rem);
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.img`
    height: 3rem;
    margin: 2rem;
`

export const Nav = styled.nav`
    
`

export const Wrapper = styled.ul` 
/* id="primary-navigation" class="primary-navigation flex" */
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

export const HyperLink = styled.a`
    /* font-family:  */
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    letter-spacing: 2px;
`

export const Span = styled.span`
    font-weight: 700;
    margin-inline-end: 0.75em;

    @media (min-width: 35em) and (max-width: 55em){
        display: none;
    }
`

export const HamburgerMenu = styled.button`
    display: none;

    @media (max-width: 35em) {
        display: block;
        position: absolute;
        z-index: 9999;
        background: red;
        width: 2rem;
        aspect-ratio: 1;
        top: 2rem;
        right: 2rem;
    }
`