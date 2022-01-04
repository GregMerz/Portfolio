import styled from 'styled-components'

export const Homepage = styled.div`
    position: absolute;
    width: calc(100vw - (100vw - 100%) - 102px);
    right: 0;
`

export const Content = styled.div`
    margin: 0rem 6rem;
    padding-top: 1rem;
    position: relative;
    height: 100vh;
`

export const ExperienceContainter = styled.div`
    padding: 1em 1em;
    margin: 2rem 0rem;
    position: relative;
    font-size: 1.5rem;
    border-radius: 10px;
    background: #B8B8FF;
    width: 80%;
`

export const CompanyHeader = styled.p`
    padding: 0;
    margin: 0;
`

export const BulletPoints = styled.li`
    margin: 1rem 0;
`

export const Headline = styled.h1`
    position: absolute;
    top: 27%;
    /* transform: translate(0%, -30%); */
    font-size: 6rem;
    color: #F8F7FF;
    transition: 0.2s;
    margin: 0;
    font-family: Bubbly;
    
    :hover {
        cursor: default;
        color: #FFD8BE;
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
    color: #F8F7FF;
    transition: 0.2s;
    /* letter-spacing: 2px; */
    /* text-decoration: underline; */
    
    :hover {
        cursor: default;
        color: #FFD8BE;
        transition: 0.2s ease-in-out;
    }

    :after {
        content: "";
        position: absolute;
        left: 0;
        width: 0;
        bottom: -4px;
        background: white;
        height: 4px;
        transition-property: width;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
    }

    :hover:after,
    :focus:after,
    :active:after {
        background: #FFD8BE;
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
    right: ${({ position }) => (position === "left" ? 0 : "auto")};

    :hover {
        opacity: 100%;
        transition: 1s;
    }
`

export const Info = styled.div`
    position: absolute;
    left: ${({ position }) => (position === "left" ? 0 : "auto")};
    right: ${({ position }) => (position === "left" ? "auto" : 0)};
    top: 50%;
    transform: translate(0%, -50%);
    width: 35rem;
    text-align: right;
    text-align: ${({ position }) => (position === "left" ? "left" : "right")};
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
    border: 10px solid hsl(249, 100%, 75%);
`

export const About = styled.p`
    position: relative;
    width: 80%;
    height: calc(100% - 1em);
    padding: .5em 0 0 .5em;
    font-size: 1.5rem;
    background: #B8B8FF;
    border-radius: 10px;
`

export const Skills = styled.p`

`

export const Title = styled.h2`
    font-size: 3rem;
    margin: 0;
`

export const Description = styled.p`
    transition: 1s;
    border-radius: 10px;
    background: #B8B8FF;
    padding: .5em .5em;
    margin: 1rem 0;
`

export const Tools = styled.div`
    margin: 0;
    font-family: Courier;
    font-weight: 500;
`

export const Tool = styled.p`
    display: inline;
    padding: 0 .5em;
`