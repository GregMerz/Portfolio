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
  Section,
  Headshot,
} from "./HomeElements";

import { Span } from "../components/Navbar/NavbarElements.js";
import React from "react";
import BankerApp from "../images/BankerApp.png";
import ChessImg from "../images/HoveringOverPieces.jpeg";
import Quarantine from "../images/Quarantine.png";
import Profile from "../images/profile.jpg";
import WalnutLogo from "../images/WalnutLogo.jpg";
import CaretHealthLogo from "../images/caret_logo.svg";
import WalnutMeetup from "../images/WalnutMeetup.png";
import SDSUAILab from "../images/SDSUAILab.png";
import BuildingWebpage from "../images/BuildingWebpage.jpeg";

function Home({ scroll }) {
  return (
    <Homepage>
      <Page num_pages={1}>
        <Content>
          <Section size="1240">
            <Wrapper isFlex="true">
              <Info position="left">
                <div
                  style={{
                    fontSize: `2.25rem`,
                  }}
                >
                  Hello, my name is
                </div>
                <SignatureName>Greg Merz</SignatureName>
              </Info>
              <Headshot src={Profile} alt="quarantine"></Headshot>
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

      <Page id="about" num_pages={"auto"}>
        <Content>
          <Container>
            <Section size="1240">
              <Wrapper>
                <Info position="left">
                  <Bio>
                    <Header>
                      <Span>01</Span>About
                    </Header>
                    <About>
                      Hello everyone! My name is Greg and I am a Software
                      Engineer based in the Bay Area. My love for coding began
                      when I started my first project where I was learning how
                      to render 3D graphics. I have always been curious to learn
                      about the inner workings of technology which has led to my
                      interest in designing webpages.
                      <br />
                      <br />I am interested in the software engineering
                      opportunities in the healthcare sector so please feel free
                      to reach out!
                    </About>

                    <Skills>
                      <Skill>
                        Languages: Java, Typescript, Python, HTML/CSS, SQL
                      </Skill>
                      <Skill>
                        Frontend Tools: React (Native), Next.js, Node.js
                      </Skill>
                      <Skill>
                        Backend Tools: Spring Boot, Nest.js, MySQL, MongoDB
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

      <Page id="experience" num_pages={"auto"}>
        <Content>
          <Container>
            <Section size="1350">
              <Header>
                <Span>02</Span>Experience
              </Header>
              <Card>
                <Wrapper>
                  <Info position="left">
                    <Title>
                      Caret Health
                      <p
                        style={{
                          fontSize: `1rem`,
                          fontWeight: `normal`,
                          marginBlock: `.5rem`,
                        }}
                      >
                        May 2024 - Present
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
                          Extended widget for viewing high-risk patients' vital
                          submissions by displaying graphs with future trends in
                          patient engagement
                        </li>
                        <li>
                          Created Python script to pull and transform analytical
                          data on triage agents to extrapolate activity and
                          productivity statistics
                        </li>
                        <li>
                          Increased task completion for triage agents by 32% by
                          building a performance management dashboard for
                          managers to plan weekly task distribution
                        </li>
                      </ul>
                    </Description>
                    <Tools>
                      <Tool>Typescript</Tool>
                      <Tool>React</Tool>
                      <Tool>Nest.js</Tool>
                      <Tool>MySQL</Tool>
                    </Tools>
                  </Info>
                  <Image src={CaretHealthLogo} alt="SdsuAILab"></Image>
                </Wrapper>
              </Card>
              <Card>
                <Wrapper>
                  <Image src={WalnutMeetup} alt="WalnutMeetup"></Image>
                  <Info position="right">
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
                          Software Engineer on the Acquisition and Retention
                          team which specialized in innovating upon our existing
                          products by improving the aesthetics, usability, and
                          functionality
                        </li>
                        <li>
                          Decreased the amount of time to fix bugs by 30% by
                          implementing a monitoring system that prints out a log
                          of the data being sent in and out by third-party
                          systems
                        </li>
                        <li>
                          Improved the payment infrastructure with Stripe’s
                          third-party system by storing new patient and
                          transactional data in a database which enabled the
                          product release of payment plans for medical bills
                        </li>
                        <li>
                          Collaborated with our design team to enhance the
                          layout of the product website by designing a sidebar
                          menu with page navigation and implementing a table
                          filter
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
                      <Tool>C++</Tool>
                      <Tool>Unreal Engine</Tool>
                      <Tool>GitHub</Tool>
                    </Tools>
                  </Info>
                  <Image src={SDSUAILab} alt="SdsuAILab"></Image>
                </Wrapper>
              </Card>
            </Section>
          </Container>
        </Content>
      </Page>

      <Page id="projects" num_pages={"auto"}>
        <Content>
          <Container>
            <Section size="1350">
              <Header>
                <Span>03</Span>Projects
              </Header>
              <Card>
                <Wrapper>
                  <Info position="left">
                    <Title>Banker</Title>
                    <Description>
                      Usually at the end of each month, I will scramble to go
                      through all my bank charges throughout the last month but
                      it can be hard checking each transaction, especially with
                      their confusing descriptions. I hope to solve this problem
                      by creating notifications everytime someone makes a
                      payment to give them their own description and verify each
                      of the payments.
                    </Description>
                    <Tools>
                      <Tool>React Native</Tool>
                      <Tool>SpringBoot</Tool>
                      <Tool>MySQL</Tool>
                      <Tool>Plaid API</Tool>
                    </Tools>
                  </Info>
                  <Image src={BankerApp} alt="BankerApp"></Image>
                </Wrapper>
              </Card>
              <Card>
                <Wrapper>
                  <Image src={ChessImg} alt="chess"></Image>
                  <Info position="right">
                    <Title>Chess</Title>
                    <Description>
                      Designed a chess game using Java and JFrame that allows
                      two players to play chess with implemented GUI.
                      Implementing a second iteration of the project that will
                      parse through large sets of data from high-level chess
                      players using the Chess.com API.
                    </Description>
                    <Tools>
                      <Tool>Java</Tool>
                      <Tool>JFrame</Tool>
                      <Tool>RESTful API</Tool>
                    </Tools>
                  </Info>
                </Wrapper>
              </Card>
            </Section>
          </Container>
        </Content>
      </Page>
    </Homepage>
  );
}

export default Home;
