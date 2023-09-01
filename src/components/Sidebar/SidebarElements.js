import styled from 'styled-components'

export const SidebarContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100vh;
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  z-index: 10;
  background: white;

  @media (max-width: 1200px) {
    width: 75px;
  }

  @media (max-width: 1200px) {
    opacity: ${({ visible }) =>
      visible ? '1' : '0'};
    transition: 0.35s ease-in-out;
  }
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
  padding-block: 1rem;

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
  margin: 1rem 0;
  /* background: linear-gradient(0.25turn, var(--secondary--color), #e27d5f); */
  /* background: rgba(0, 0, 0, 0.12); */
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 0 50px 50px 0;
  height: 4rem;
  /* border-bottom: 5px solid var(--shadow--color);
  border-right: 5px solid var(--shadow--color); */

  :hover {
    /* background: var(--accent--text); */
    /* filter: brightness(110%); */
    transition: 0.2s ease-in-out;
    width: 110%;
    /* background: rgba(0, 0, 0, 0.14); */
  }

  @media (max-width: 1200px) {
    height: 3.5rem;
  }
`

export const SidebarImg = styled.img`
  cursor: pointer;
  width: 27.5%;
`
