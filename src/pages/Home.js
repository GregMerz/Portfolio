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
    Homepage
} from './HomeElements';

import { Span } from '../components/NavbarElements.js';

import ChessImg from '../images/HoveringOverPieces2.png';
import Quarantine from '../images/Quarantine.png';
import Profile from '../images/profile.jpg';

function Home() {
    return (
        <Homepage>
            <Content>
                <Headline>
                    Hello, my name is
                    <Subtitle>Greg!</Subtitle>
                </Headline>
            </Content>

            <Content id="about">
                <Header><Span>01</Span>About</Header>
                <Bio>
                    <About>Hello! My name is Greg and I am a senior computer science
                        major at San Diego State University.
                        Hello! My name is Greg and I am a senior computer science
                        major at San Diego State University.
                        Hello! My name is Greg and I am a senior computer science
                        major at San Diego State University.
                    </About>
                    <Headshot src={Profile} alt="Greg"></Headshot>
                </Bio>
            </Content>

            <Content id="experience">
                <Header><Span>02</Span>Experience</Header>
                <ExperienceContainter>
                    <CompanyHeader>
                        SDSU Artificial Intelligence Lab
                    </CompanyHeader>
                    <CompanyHeader>
                        Research Intern
                    </CompanyHeader>
                    <BulletPoints>
                        Developing an augmented reality UI on Hololens to facilitate equipment maintenance on US Navy ships with Unreal Engine
                    </BulletPoints>
                    <BulletPoints>
                        Using 3D models of equipment to perform diagnostics for routine maintenance and display metrics for performance
                    </BulletPoints>

                    <CompanyHeader>
                        SDSU Math Learning Center
                    </CompanyHeader>
                    <CompanyHeader>
                        Course Tutor
                    </CompanyHeader>
                    <BulletPoints>
                        Coordinate and conduct weekly 1-on-1 tutoring sessions for students in both lower-level and higher-level computer science and mathematics courses
                    </BulletPoints>
                    <BulletPoints>
                        Help improve students’ understanding by reviewing course material and answering questions in addition to guiding problem sets and coding projects
                    </BulletPoints>
                </ExperienceContainter>
            </Content>

            <Content id="projects">
                <Header><Span>03</Span>Projects</Header>
                <Card>
                    <Image src={ChessImg} alt="chess"></Image>
                    <Info>
                        <Title>Chess</Title>
                        <Description>Designed a chess game using Java and JFrame that allows two players to play chess with
                            implemented GUI. Implementing a second iteration of the project that will parse through large sets of data from
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
                            Programmed a singleton instance of the player and created a UI to display the player instance’s metrics such as a health bar, ammo capacity, and money.
                            Designed and created the level design and game layout for the player and zombie models to navigate and interact to update metrics such as health points and ammo count
                        </Description>
                        <Tools>
                            <Tool>C#</Tool>
                            <Tool>Unity</Tool>
                            <Tool>Singleton</Tool>
                        </Tools>
                    </Info>
                </Card>
            </Content>

        </Homepage>
    );
}

export default Home;