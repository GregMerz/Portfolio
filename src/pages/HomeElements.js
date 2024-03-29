import styled from 'styled-components'

export const Homepage = styled.div`
  width: 100%;
`

export const Page = styled.div`
  padding-left: 100px;
  height: ${({ num_pages }) =>
    num_pages !== 'auto' ? num_pages * 100 + 'vh' : 'auto'};
  padding-block: ${({ num_pages }) => (num_pages === 'auto' ? '0' : '0')};
  position: relative;
  display: block;

  @media (max-width: 1240px) {
    padding: 0;
  }
`

export const Content = styled.div`
  display: block;
  height: 100%;
  padding: 3rem 3rem 0 5rem;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 1240px) {
    padding: 3rem 0 0 0;
    margin: 0;
  }
`

export const ExperienceContainter = styled.div`
  padding: 1em 1em;
  margin: 2rem 0rem;
  position: relative;
  font-size: 1.5rem;
  border-radius: 10px;
  width: 80%;
`

export const BulletPoints = styled.li`
  margin: 1rem 0;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-block: 3rem;
`

export const Headline = styled.h1`
  font-size: 6rem;
  transition: 0.2s;
  margin: 0;
  font-family: Bubbly;

  :hover {
    cursor: default;
    transition: 0.2s ease-in-out;
  }
`

export const Subtitle = styled.h1`
  font-size: 14rem;
  margin: 0;
`
export const Header = styled.div`
  position: relative;
  display: inline;
  font-size: 2.25rem;
  font-family: 'Fira Sans';
  letter-spacing: 1px;

  /* :hover {
    cursor: default;
    transition: 0.2s ease-in-out;
  }

  :after {
    content: '';
    position: absolute;
    left: 0;
    width: 0%;
    top: 5px;
    height: 4px;
    transition-property: width;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }

  :hover:after,
  :focus:after,
  :active:after {
    width: 100%;
  } */
`

export const Section = styled.div`
  /* width: 1240px; */
  width: ${({ size }) => size}px;
  margin-inline: auto;
  height: 100%;

  @media (max-width: 1550px) {
    width: 1050px;
  }

  @media (max-width: 1240px) {
    width: auto;
    margin-inline: 2rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-size: 3rem;
  transition: 0.2s;
  font-family: 'Fira Sans';
  letter-spacing: 1px;

  @media (max-width: 1240px) {
    display: ${({ isFlex }) => (isFlex ? 'flex' : 'block')};
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: space-evenly;
  }

  /* :hover {
    cursor: default;
    transition: 0.2s ease-in-out;
  }

  :after {
    content: '';
    position: absolute;
    left: 0;
    width: 0;
    bottom: -4px;
    height: 4px;
    transition-property: width;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }

  :hover:after,
  :focus:after,
  :active:after {
    width: 100%;
  } */
`

export const Card = styled.div`
  position: relative;
  height: auto;
  padding-top: 3rem;
  width: 100%;
`

export const Headshot = styled.img`
  position: relative;
  border-radius: 10px;
  width: 46.25%;
  /* max-height: 75%; */
  filter: brightness(75%);
  transition: 1s;
  /* right: ${({ position }) => (position === 'left' ? 0 : 'auto')}; */

  @media (max-width: 1240px) {
    width: 40%;
    margin-inline: 5%;
  }
  /* @media (max-width: 920px) {
    width: 60%;
  } */
  @media (max-width: 720px) {
    width: 20rem;
  }

  :hover {
    filter: brightness(90%);
    transition: 1s;
  }
`

export const Image = styled.img`
  position: relative;
  border-radius: 10px;
  width: 46.25%;
  /* max-height: 75%; */
  filter: brightness(75%);
  transition: 1s;
  /* right: ${({ position }) => (position === 'left' ? 0 : 'auto')}; */

  @media (max-width: 1240px) {
    /* max-height: 40%; */
    width: 75%;
    margin-inline: 7.5%;
  }

  :hover {
    filter: brightness(90%);
    transition: 1s;
  }
`

export const Info = styled.div`
  position: relative;
  width: 46.25%;
  font-size: 1.5rem;
  padding: ${({ position }) =>
    position === 'left' ? '0 7.5% 0 1.5rem' : '0 1.5rem 0 7.5%'};

  @media (max-width: 1240px) {
    width: auto;
    padding-inline: 1.5rem;
  }
`

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const About = styled.p`
  position: relative;
  margin: 0;
  height: auto;
  padding-block: 2rem;
  font-size: 1.25rem;
  line-height: 1.625rem;
`

export const Skills = styled.div`
  font-family: Courier;
  font-weight: 500;
  font-size: 1.125rem;
  letter-spacing: 0px;
  padding-bottom: 2rem;

  @media (max-width: 1240px) {
    font-size: 1rem;
  }
`

export const Skill = styled.p`
  margin: 0;
`

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  font-family: 'Fira Sans';
  letter-spacing: 1px;
`

export const Description = styled.p`
  transition: 1s;
  border-radius: 10px;
  /* padding: 0.5em 0.5em; */
  margin: 2rem 0;
  font-size: 1.125rem;
`

export const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  font-family: Courier;
  font-weight: 500;
  font-size: 1.25rem;
  margin-block: 2rem;
  font-size: 1.125rem;

  @media (max-width: 1240px) {
    font-size: 1rem;
  }
`

export const Tool = styled.p`
  display: inline;
  padding-right: 1em;
  margin: 0 0 0.5rem 0;
`

export const Record = styled.div`
  position: fixed;
  bottom: 28.8%;
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

export const SignatureName = styled.div`
  font-size: 6rem;

  @media (max-width: 1550px) {
    font-size: 5rem;
  }

  @media (max-width: 850px) {
    font-size: 4rem;
  }
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
