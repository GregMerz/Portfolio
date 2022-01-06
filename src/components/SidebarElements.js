import styled from 'styled-components'

export const SidebarContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100vh;
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  z-index: 10;
  /* border-right: 3px solid var(--secondary--color); */

  /* :after {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translate(0, -50%);
    height: 90%;
    width: 4px;
    background: var(--secondary--color);
  }

  :before {
    content: '';
    position: absolute;
    right: -25px;
    top: calc(${({ scroll }) => ((scroll.y * 100) / 3.5) * 0.9 + 5}% - 7.5px);
    height: 15px;
    width: 15px;
    border-radius: 100%;
    background: var(--secondary--color);
  } */
`

export const SidebarWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: auto;
  padding-block: 2rem;

  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 1fr); */
`

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  font-weight: bold;
  margin: 0.75rem 0;
  background: var(--secondary--color);
  border-radius: 0 50px 50px 0;
  height: 4rem;

  :hover {
    background: var(--accent--text);
    transition: 0.2s ease-in-out;
    width: 110%;
  }
`

export const SidebarImg = styled.img`
  cursor: pointer;
  width: 30%;
`
