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
  z-index: 20;

  @media (max-width: 1240px) {
    opacity: 0;
  }

  @media (max-width: 920px) {
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    transition: 0.35s ease-out;
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
    height: 120px;
    width: 100vw;
    z-index: 1000000;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  left: 0;
  bottom: 0;
  height: auto;
  padding-block: 1rem;

  @media (max-width: 920px) {
    flex-direction: row;
    width: 40%;
    left: auto;
    right: 0;
    top: 0;
    padding-inline: 10%;
    align-items: center;
  }

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
  background: white;
  /* border-bottom: 5px solid var(--shadow--color);
  border-right: 5px solid var(--shadow--color); */

  @media (max-width: 920px) {
    border: none;
    background: none;
    margin: 0;

    :hover {
      width: 100%;
    }
  }

  :hover {
    /* background: var(--accent--text); */
    /* filter: brightness(110%); */
    transition: 0.2s ease-in-out;
    width: 110%;

    /* background: rgba(0, 0, 0, 0.14); */
  }
`

export const SidebarImg = styled.img`
  cursor: pointer;
  width: 27.5%;

  @media (max-width: 920px) {
    /* max-width: 64px; */
    width: 32px;
  }
`
