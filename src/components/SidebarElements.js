import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.div`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: calc(100vh - 4rem);
    position: fixed;
    display: grid;
    top: 2rem;
    left: 0;
    z-index: 10;
    /* border-right: 3px solid #B8B8FF; */

    /* :after {
        content: "${({scroll}) => scroll.y}";
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translate(0, -50%);
        height: 90%;
        width: 4px;
        background: #B8B8FF;
    }

    :before {
        content: "";
        position: absolute;
        right: -25px;
        top: calc(${({scroll}) => (scroll.y * .9 / 23.52) + 5}% - 7.5px);
        height: 15px;
        width: 15px;
        border-radius: 100%;
        background: #B8B8FF;
    } */
`

export const SidebarWrapper = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
`

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    font-weight: bold;
    margin: .25rem 0;
    background: #B8B8FF;
    /* border: 2px solid blue; */
    border-radius: 0 50px 50px 0;

    :hover {
        background: #FFD8BE;
        transition: 0.2s ease-in-out;
        width: 110%;
    }

    :nth-child(1) {
        grid-row-start: 7;
    }

    :nth-child(2) {
        grid-row-start: 8;
    }

    :nth-child(3) {
        grid-row-start: 9;
    } 
`

export const SidebarImg = styled.img`
    cursor: pointer;
    width: 30%;
`