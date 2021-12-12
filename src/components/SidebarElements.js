import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.div`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 90%;
    margin-top: 2.5%;
    position: fixed;
    display: grid;
    top: 0;
    z-index: 10;
    left: ${({ scroll }) => (scroll.y / 6 < 100 ? -100 + scroll.y / 6 : 0)}px;
    opacity: ${({ scroll }) => (scroll.y / 6 < 100 ? scroll.y / 6 : 100)}%;
    border-right: 2px solid white;
    border-radius: 10px;
`

export const SidebarWrapper = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    text-align: center;
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    font-weight: bold;
    color: #F8F7FF;

    &:hover {
        color: #FFD8BE;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarImg = styled.img`
    cursor: pointer;
    width: 30%;
`