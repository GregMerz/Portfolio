import styled from 'styled-components'

export const Homepage = styled.div`
  width: 100%;
`

export const Page = styled.div`
  padding-left: 100px;
  height: ${({ num_pages }) =>
    num_pages !== 'auto' ? num_pages * 100 + 'vh' : 'auto'};
  padding-block: ${({ num_pages }) => (num_pages === 'auto' ? '5.5rem' : '0')};
  position: relative;
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  padding: 4rem 6rem;
  position: relative;
`

export const ExperienceContainter = styled.div`
  padding: 1em 1em;
  color: var(--dark--text);
  margin: 2rem 0rem;
  position: relative;
  font-size: 1.5rem;
  border-radius: 10px;
  background: var(--bubble--color);
  width: 80%;
  border: 2px solid var(--dark--text);
`

export const CompanyHeader = styled.p`
  padding: 0;
  margin: 0;
`

export const BulletPoints = styled.li`
  margin: 1rem 0;
`

export const Container = styled.div`
  width: 100%;
`

export const Headline = styled.h1`
  font-size: 6rem;
  color: var(--light--text);
  transition: 0.2s;
  margin: 0;
  font-family: Bubbly;

  :hover {
    /* cursor: default; */
    color: var(--accent--text);
    transition: 0.2s ease-in-out;
  }
`

export const Subtitle = styled.h1`
  font-size: 14rem;
  margin: 0;
`

export const Header = styled.h1`
  display: inline;
  position: relative;
  overflow: hidden;
  font-size: 3rem;
  color: var(--bold--dark--text);
  transition: 0.2s;
  padding: 0.25rem;
  font-family: 'Fira Sans';
  letter-spacing: 1px;

  :hover {
    /* cursor: default; */
    color: var(--accent--text);
    transition: 0.2s ease-in-out;
  }

  :after {
    content: '';
    position: absolute;
    left: 0;
    width: 0;
    bottom: -4px;
    background: var(--accent--text);
    height: 4px;
    transition-property: width;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }

  :hover:after,
  :focus:after,
  :active:after {
    background: var(--accent--text);
    width: 100%;
  }
`

export const Card = styled.div`
  position: relative;
  height: 22rem;
  margin: 2rem 0 6rem 0;
`

export const Image = styled.img`
  position: absolute;
  border-radius: 10px;
  height: 100%;
  opacity: 70%;
  transition: 1s;
  right: ${({ position }) => (position === 'left' ? 0 : 'auto')};

  :hover {
    opacity: 100%;
    transition: 1s;
  }
`

export const Info = styled.div`
  position: absolute;
  color: var(--dark--text);
  left: ${({ position }) => (position === 'left' ? 0 : 'auto')};
  right: ${({ position }) => (position === 'left' ? 'auto' : 0)};
  top: 50%;
  transform: translate(0%, -50%);
  width: 35rem;
  text-align: right;
  text-align: ${({ position }) => (position === 'left' ? 'left' : 'right')};
  font-size: 1.5rem;
  padding: 1rem 1rem;
`

export const Bio = styled.div`
  margin: 2rem 0rem;
  position: relative;
  height: 25rem;
`

export const Headshot = styled.img`
  position: absolute;
  border-radius: 100%;
  height: 65%;
  right: 0;
  top: 50%;
  transform: translate(0%, -50%);
  border: 2px solid var(--dark--text);
`

export const About = styled.p`
  position: relative;
  color: var(--dark--text);
  width: 80%;
  height: calc(100% - 1em);
  padding: 0.5em 0 0 0.5em;
  font-size: 1.5rem;
  background: var(--bubble--color);
  border-radius: 10px;
  border: 2px solid var(--dark--text);
`

export const Skills = styled.p``

export const Title = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: var(--bold--dark--text);
  font-family: 'Fira Sans';
  letter-spacing: 1px;
`

export const Description = styled.p`
  transition: 1s;
  border-radius: 10px;
  background: var(--bubble--color);
  border: 2px solid var(--dark--text);
  padding: 0.5em 0.5em;
  margin: 1rem 0;
  color: var(--dark--text);
`

export const Tools = styled.div`
  margin: 0;
  font-family: Courier;
  font-weight: 500;
  color: var(--bold--dark--text);
`

export const Tool = styled.p`
  display: inline;
  padding: 0 0.5em;
`

export const Record = styled.div`
  position: fixed;
  left: 37.5%;
  transform: rotate(
    ${({ scroll }) =>
      scroll.y < 0.8 * window.innerHeight
        ? (scroll.y * 220) / window.innerHeight
        : 180}deg
  );
  opacity: ${({ scroll }) => (scroll.y > 0.98 * window.innerHeight ? 0 : 1)};
  background: linear-gradient(0.25turn, #db9eb1, #e27d5f, #db9eb1);
  aspect-ratio: 1;
  width: 150px;
  border-radius: 50%;
  border: 150px solid black;

  :hover {
    transform: rotate(90deg);
    transition: 0.3s ease-in-out;
  }
`
// transform: rotate(${-(degree * i - arc / 2)}deg) translate(0, 70%);
export const CurvedLetters = styled.h2`
  transform: rotate(${({ i, degree, arc }) => -(degree * i - arc / 2)}deg)
    translate(0, ${({ radius }) => radius}px);
  transform-origin: top center;
  position: absolute;
  font-family: courier;
  color: white;
  margin: 0;
`

export const TimeLine = styled.div`
  position: relative;
  margin-inline: 15rem;
  top: 20%;
  left: 0;
  translate: transform(0, -20%);
  height: 60%;
  width: 50px;
  background: green;
  justify-content: center;

  :before {
    content: '';
    position: absolute;
    height: 100%;
    width: 5px;
    left: 50%;
    transform: translate(-50%, 0);
    background: black;
  }
`

export const Center = styled.div`
  top: 0;
  left: 0;
`
