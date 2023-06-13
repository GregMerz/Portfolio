import {
  Header,
  Description,
  Image,
  Card,
  Info,
  Title,
  Content,
  Bio,
  About,
  Tools,
  Tool,
  Homepage,
  Page,
  Container,
  SignatureName,
  Wrapper,
} from './HomeElements'

import { Span } from '../components/Navbar/NavbarElements.js'
import React from 'react'
import ChessImg from '../images/HoveringOverPieces.jpeg'
import Quarantine from '../images/Quarantine.png'
import Profile from '../images/profile.jpg'

function Home({ scroll }) {
  return (
    <Homepage>
      <Page num_pages={1}>
        <Content>
          <Wrapper>
            <div 
              style={{
                position: `relative`,
                top: `-6rem`,
              }}
            >
              Hello, my name is
              <SignatureName>Greg Merz</SignatureName>
            </div>
            <Image src={Profile} alt="quarantine" position="left"></Image> 
          </Wrapper>
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
            <Wrapper>
              <Header><Span>01</Span>About</Header>
              <Bio>
                <About>
                  I am a software engineer currently based in New York.
                  I have experience working with Java, Spring Boot, and MySQL
                  on the backend and React, Next.js, and Bulma in the frontend.
                  Currently, I am looking for new opportunities and am able to work
                  from New York, San Francisco, or Seattle areas so feel free to reach
                  out about any exciting opportunies you would want me to be apart 
                  of.
                </About>
                <Image src={Profile} alt="quarantine" position="left"></Image> 
              </Bio>
            </Wrapper>
          </Container>
        </Content>
      </Page>

      <Page id="experience" num_pages={1}>
        <Content>
          <Container>
            <Wrapper>
              <Header><Span>02</Span>Experience</Header>
            </Wrapper>
          </Container>
        </Content>
        {/* <TimeLine></TimeLine> */}
      </Page>

      <Page id="projects" num_pages={'auto'}>
        <Content>
          <Container>
            <Wrapper>
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
            </Wrapper>
          </Container>
        </Content>
      </Page>
    </Homepage>
  )
}

export default Home
