import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

import { Menu } from '../../images/menu_icon.jpg'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Header = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  margin: 2rem 0;
  gap: var(--gap, 1rem);
  align-items: center;
  justify-content: space-between;
  font-family: Fira Sans;
  z-index: 20;
  top: 0rem;

  @media (max-width: 40em) {
    margin-top: 4rem;
  }
`

export const Logo = styled.a`
  color: var(--secondary--color);
  font-weight: bold;
  font-size: 22px;
  font-family: Simply Glamorous;
  text-decoration: none;
  /* background: linear-gradient(0.25turn, var(--secondary--color), #e27d5f); */
  background: rgba(0, 0, 0, .12);
  border-radius: 0 50px 50px 0;
  padding: 2rem 2rem 2rem 1rem;
  border-bottom: 5px solid var(--shadow--color);
  border-right: 5px solid var(--shadow--color);

  :hover {
    cursor: none;
    font-size: 26px;
    background: rgba(0, 0, 0, .14);
    /* filter: brightness(110%); */
  }
`

export const Nav = styled.nav``

export const Wrapper = styled.ul`
  display: flex;
  gap: var(--gap, 1rem);

  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 50px 0 0 50px;
  /* border-top: 3px solid #abccd8; */
  /* border-bottom: 7px solid var(--shadow--color);
  border-left: 7px solid var(--shadow--color); */
  /* background: linear-gradient(0.25turn, #e27d5f, var(--secondary--color)); */
  background: rgba(0, 0, 0, .105);

  backdrop-filter: blur(1rem);

  @media (max-width: 40em) {
    --gap: 3em;

    position: fixed;
    inset: 0 0 0 30%;
    z-index: 1000;

    border-radius: 0;
    flex-direction: column;
    padding: min(30vh, 10rem) 2em;

    transform: ${({ visible }) =>
      visible ? 'translateX(0%)' : 'translateX(100%)'};
    transition: 0.35s ease-in-out;
  }

  @media (min-width: 40em) {
    --gap: clamp(1.5rem, 5vw, 3rem);
    padding-block: 2rem;
    padding-inline: clamp(1.5em, 4vw, 5rem);
  }
`

export const Active = styled.li`
  position: relative;
  width: 10rem;
  height: 20px;

  /* :after {
        content: "";
        position: absolute;
        left: 0;
        width: 0;
        bottom: -3px;
        background: black;
        height: 2px;
        transition-property: width;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
    }

    :hover:after,
    :focus:after,
    :active:after {
        background: black;
        width: 100%;
    } */
`

export const Link = styled(LinkS)`
    display: inline;
    position: absolute;
    text-align: center;
    width: 100%;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 2px;
    /* cursor: pointer; */
    transition: 0.2s ease-in-out;
    /* color: ${({ scroll, start, end }) =>
      scroll.y >= start * window.innerHeight &&
      scroll.y < end * window.innerHeight
        ? 'var(--bright--green)'
        : 'black'}; */
    font-size: ${({ scroll, start, end }) =>
      scroll.y >= start * window.innerHeight &&
      scroll.y < end * window.innerHeight
        ? '110%'
        : '100%'};

    :hover {
        /* color: var(--bright--green); */
        transition: 0.2s ease-in-out;
        font-size: 110%;
    }

    /* :before {
        content: "${({ scroll }) => scroll.y}"
    } */
`

export const Span = styled.span`
  font-family: Courier;
  font-size: 70%;
  font-weight: 600;
  margin-inline-end: 0.75em;

  @media (min-width: 40em) and (max-width: 60em) {
    display: none;
  }
`

export const HamburgerMenuWrapper = styled.div`
  display: none;

  @media (max-width: 40em) {
    display: block;
    position: absolute;
    right: 2rem;
    z-index: 9999;
    font-size: 25px;
    color: black;
  }
`

export const MenuIcon = styled(FaBars)``

export const CloseIcon = styled(FaTimes)``
