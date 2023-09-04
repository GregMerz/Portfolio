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
  Skills,
  Skill,
  Section
} from './HomeElements'

import { Span } from '../components/Navbar/NavbarElements.js'
import React from 'react'
import ChessImg from '../images/HoveringOverPieces.jpeg'
import Quarantine from '../images/Quarantine.png'
import Profile from '../images/profile.jpg'
import WalnutLogo from '../images/WalnutLogo.jpg'
import WalnutMeetup from '../images/WalnutMeetup.png'
import SDSUAILab from '../images/SDSUAILab.png'
import BuildingWebpage from '../images/BuildingWebpage.jpeg'

function Home({ scroll }) {
  return (
    <Homepage>
      <Page num_pages={1}>
        <Content>
          <Section size='1220'>
            <Wrapper isFlex="true">
              <Info position="left">
                <div
                  style={{
                    fontSize: `2.5rem`,
                  }}
                >
                  Hello, my name is
                  <SignatureName>Greg Merz</SignatureName>
                </div>
              </Info>
              <Image src={Profile} alt="quarantine" position="left"></Image>
            </Wrapper>
          </Section>
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

      <Page id="about" num_pages={'auto'}>
        <Content>
          <Container>
            <Section size='1220'>
              <Wrapper>
                <Info position='left'>
                  <Bio>
                    <Header>
                      <Span>01</Span>About
                    </Header>
                    <About>
                      I am a new grad software engineer based in the Bay Area. My
                      love for coding began when I started my first project which
                      involved me learning how to rendering 3D graphics. This marked the first
                      milestone of the possibilities of coding and introduced me
                      to the behind the scene of how applications are made. I have
                      always been curious to learn about the inner workings of
                      technology which has led to my interest in learning how
                      webpages function and how they are designed.
                      <br />
                      <br />
                      Currently, I am looking for new software engineering
                      opportunities and am able to work from San Francisco or
                      Seattle.
                    </About>

                    <Skills>
                      <Skill>
                        Languages: Java, Javascript, Python, C++, C#, C
                      </Skill>
                      <Skill>
                        Frontend Tools: React (Native), Next.js, Node.js
                      </Skill>
                      <Skill>
                        Backend Tools: Spring Boot, MySQL, MongoDB, Stripe, AWS
                      </Skill>
                    </Skills>
                  </Bio>
                </Info>
                <Image
                  src={BuildingWebpage}
                  alt="quarantine"
                  position="left"
                ></Image>
              </Wrapper>
            </Section>
          </Container>
        </Content>
      </Page>

      <Page id="experience" num_pages={'auto'}>
        <Content>
          <Container>
            <Section size='1350'>
              <Header>
                <Span>02</Span>Experience
              </Header>
              <Card>
              <Wrapper>
                <Info position="left">
                  <Title>
                    Walnut
                    {/* <img src={WalnutLogo} alt="Walnut" /> */}
                    <p
                      style={{
                        fontSize: `1rem`,
                        fontWeight: `normal`,
                        marginBlock: `.5rem`,
                      }}
                    >
                      January 2022 - November 2022
                    </p>
                  </Title>
                  <Description>
                    <ul
                      style={{
                        padding: `0`,
                        fontSize: `1.125rem`,
                      }}
                    >
                      <li>
                        Software Engineer on the Acquisition and Retention team
                        which specialized in innovating upon our existing
                        products by improving the aesthetics, usability, and
                        functionality
                      </li>
                      <li>
                        Decreased the amount of time to fix bugs by 30% by
                        implementing a monitoring system that prints out a log
                        of the data being sent in and out by third-party systems
                      </li>
                      <li>
                        Improved the payment infrastructure with Stripe’s
                        third-party system by storing new patient and
                        transactional data in a database which enabled the
                        product release of payment plans for medical bills
                      </li>
                      <li>
                        Collaborated with our design team to enhance the layout
                        of the product website by designing a sidebar menu with
                        page navigation and implementing a table filter
                      </li>
                    </ul>
                  </Description>
                  <Tools>
                    <Tool>Java</Tool>
                    <Tool>SpringBoot</Tool>
                    <Tool>MySQL</Tool>
                    <Tool>MongoDB</Tool>
                    <Tool>React</Tool>
                    <Tool>Next.js</Tool>
                  </Tools>
                </Info>
                <Image src={WalnutMeetup} alt="chess"></Image>
              </Wrapper>
              </Card>
              <Card>
                <Wrapper>
                  <Info position="left">
                    <Title>
                      SDSU AI Lab
                      <p
                        style={{
                          fontSize: `1rem`,
                          fontWeight: `normal`,
                          marginBlock: `.5rem`,
                        }}
                      >
                        September 2021 - January 2022
                      </p>
                    </Title>
                    <Description>
                      <ul
                        style={{
                          padding: `0`,
                          fontSize: `1.125rem`,
                        }}
                      >
                        <li>
                          Worked on the layout design for the augmented reality
                          interface on HoloLens that facilitates equipment
                          maintenance on US Navy ships to reduce mistakes during
                          repairs
                        </li>
                        <li>
                          Used 3D models of equipment to undergo diagnostics for
                          routine maintenance and display metrics based on
                          performance to increase visibility and analyze the
                          functionality of machine parts
                        </li>
                      </ul>
                    </Description>
                    <Tools>
                      <Tool>Java</Tool>
                      <Tool>JFrame</Tool>
                      <Tool>Chess.com API</Tool>
                    </Tools>
                  </Info>
                  <Image src={SDSUAILab} alt="SdsuAILab"></Image>
                </Wrapper>
              </Card>
            </Section>
          </Container>
        </Content>
      </Page>

      <Page id="projects" num_pages={'auto'}>
        <Content>
          <Container>
            <Section size='1350'>
              <Header>
                <Span>03</Span>Projects
              </Header>
              <Card>
                <Wrapper>
                  
                  <Info>
                    <Title>Chess</Title>
                    <Description>
                      Designed a chess game using Java and JFrame that allows two
                      players to play chess with implemented GUI. Implementing a
                      second iteration of the project that will parse through
                      large sets of data from high-level chess players using the
                      Chess.com API. Splitting the data into features and labels
                      for a neural network to optimize chess moves in
                      single-player mode.
                    </Description>
                    <Tools>
                      <Tool>Java</Tool>
                      <Tool>JFrame</Tool>
                      <Tool>RESTful API</Tool>
                    </Tools>
                  </Info>
                  <Image src={ChessImg} alt="chess"></Image>
                </Wrapper>
              </Card>
              <Card>
                <Wrapper>
                  <Info position="left">
                    <Title>Quarantine</Title>
                    <Description>
                      Programmed a singleton instance of the player and created a
                      UI to display the player instance’s metrics such as a health
                      bar, ammo capacity, and money. Designed and created the
                      level design and game layout for the player and zombie
                      models to navigate and interact to update metrics such as
                      health points and ammo count. Designed and created the level
                      design and game layout for the player and zombie models to
                      navigate and interact to update metrics such as health
                      points and ammo count.
                    </Description>
                    <Tools>
                      <Tool>C#</Tool>
                      <Tool>Unity</Tool>
                      <Tool>Singleton</Tool>
                    </Tools>
                  </Info>
                  <Image src={Quarantine} alt="quarantine"></Image>
                </Wrapper>
              </Card>
              </Section>
          </Container>
        </Content>
      </Page>
    </Homepage>
  )
}

export default Home
