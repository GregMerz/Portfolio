import styled from 'styled-components'

export const CurvedLetters = styled.h2`
  transform: rotate(${({ i, degree, arc }) => -(degree * i - arc / 2)}deg)
    translate(0, ${({ radius }) => radius}px);
  transform-origin: top center;
  position: absolute;
  font-family: courier;
  color: white;
  margin: 0;
`