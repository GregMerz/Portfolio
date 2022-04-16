import {
  Headline,
  Header,
  Subtitle,
  Description,
  Image,
  Card,
  Info,
  Title,
  Content,
  Headshot,
  Bio,
  About,
  Tools,
  ExperienceContainter,
  Tool,
  CompanyHeader,
  BulletPoints,
  Homepage,
  Page,
  Container,
  Rotate,
  Record,
} from './HomeElements'

import { Span } from '../components/Navbar/NavbarElements.js'
import React from 'react'
import PropTypes from 'prop-types'

import ChessImg from '../images/HoveringOverPieces.png'
import Quarantine from '../images/Quarantine.png'
import Profile from '../images/profile.jpg'
import reactDom from 'react-dom'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

const characters = 'Hello, my name is'
const characters1 = 'Hello, my name is'
const arc = 180
const radius = 150
const degree = arc / (characters.length - 1)

function Home({ scroll }) {
  return (
    <Homepage>
      <Page num_pages={1}>
        <Content>
          <Record scroll={scroll}>
            <h2>
              {characters.split('').map((char, i) => (
                <span
                  key={`heading-span-${i}`}
                  style={{
                    height: '175px',
                    width: '15px',
                    transform: `rotate(${8 * i - 64}deg)`,
                    transformOrigin: `bottom center`,
                    position: 'absolute',
                    fontFamily: 'courier',
                    top: `-105px`,
                    left: '65px',
                    color: 'white',
                    // background: 'blue',
                  }}
                >
                  {char}
                </span>
              ))}
            </h2>

            <h1
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                margin: '0',
                color: 'white',
                fontFamily: 'Simply Glamorous',
                width: 'max-content',
                fontSize: '4rem',
              }}
            >
              Greg Merz
            </h1>
            {/* <h2>
              {characters1.split('').map((char, i) => (
                <span
                  key={`heading-span-${i}`}
                  style={{
                    height: `${radius}px`,
                    transform: `rotate(${degree * i - arc / 2}deg)`,
                    transformOrigin: `0 ${-radius}px 0`,
                    position: 'absolute',
                    fontFamily: 'courier',
                    bottom: '0',
                    left: '150px',
                  }}
                >
                  {char}
                </span>
              ))}
            </h2> */}
          </Record>
        </Content>
      </Page>

      {/* <Page num_pages={1}>
        <Content>
          <Container>
            <Headline>
              Hello, my name is
              <Subtitle>Greg!</Subtitle>
            </Headline>
          </Container>
        </Content>
      </Page> */}

      <Page id="about" num_pages={1}>
        <Content>
          <Container>
            <Header>
              <Span>01</Span>About
            </Header>
            <Bio>
              <About>
                Hello! My name is Greg and I am a senior computer science major
                at San Diego State University. Hello! My name is Greg and I am a
                senior computer science major at San Diego State University.
                Hello! My name is Greg and I am a senior computer science major
                at San Diego State University.
              </About>
              <Headshot src={Profile} alt="Greg"></Headshot>
            </Bio>
          </Container>
        </Content>
      </Page>

      <Page id="experience" num_pages={1}>
        <Content>
          <Container>
            <Header>
              <Span>02</Span>Experience
            </Header>
            <ExperienceContainter>
              <CompanyHeader>SDSU Artificial Intelligence Lab</CompanyHeader>
              <CompanyHeader>Research Intern</CompanyHeader>
              <BulletPoints>
                Developing an augmented reality UI on Hololens to facilitate
                equipment maintenance on US Navy ships with Unreal Engine
              </BulletPoints>
              <BulletPoints>
                Using 3D models of equipment to perform diagnostics for routine
                maintenance and display metrics for performance
              </BulletPoints>

              <CompanyHeader>SDSU Math Learning Center</CompanyHeader>
              <CompanyHeader>Course Tutor</CompanyHeader>
              <BulletPoints>
                Coordinate and conduct weekly 1-on-1 tutoring sessions for
                students in both lower-level and higher-level computer science
                and mathematics courses
              </BulletPoints>
              <BulletPoints>
                Help improve students’ understanding by reviewing course
                material and answering questions in addition to guiding problem
                sets and coding projects
              </BulletPoints>
            </ExperienceContainter>
          </Container>
        </Content>
      </Page>

      <Page id="projects" num_pages={1.67}>
        <Content>
          <Container>
            <Header>
              <Span>03</Span>Projects
            </Header>
            <Card>
              <Image src={ChessImg} alt="chess"></Image>
              <Info>
                <Title>Chess</Title>
                <Description>
                  Designed a chess game using Java and JFrame that allows two
                  players to play chess with implemented GUI. Implementing a
                  second iteration of the project that will parse through large
                  sets of data from
                </Description>
                <Tools>
                  <Tool>Java</Tool>
                  <Tool>JFrame</Tool>
                  <Tool>Chess.com API</Tool>
                </Tools>
              </Info>
            </Card>
            <Card>
              <Image src={Quarantine} alt="quarantine" position="left"></Image>
              <Info position="left">
                <Title>Quarantine</Title>
                <Description>
                  Programmed a singleton instance of the player and created a UI
                  to display the player instance’s metrics such as a health bar,
                  ammo capacity, and money. Designed and created the level
                  design and game layout for the player and zombie models to
                  navigate and interact to update metrics such as health points
                  and ammo count
                </Description>
                <Tools>
                  <Tool>C#</Tool>
                  <Tool>Unity</Tool>
                  <Tool>Singleton</Tool>
                </Tools>
              </Info>
            </Card>
          </Container>
        </Content>
      </Page>
    </Homepage>
  )
}

export default Home
