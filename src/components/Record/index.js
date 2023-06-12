import {
    CurvedLetters
} from './RecordElements.js'

const characters = 'Hello, my name is'
const characters1 = 'Hello, my name is'
const arc = 100
const radius = 175
const degree = arc / (characters.length - 1)

function Record({scroll}){
    <>
        <h2>
        {characters.split('').map((char, i) => (
            <span
            key={`heading-span-${i}`}
            style={{
                height: `${radius}px`,
                width: '15px',
                transform: `rotate(${degree * i - arc / 2}deg)`,
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
        <div
        style={{
            top: '50%',
            left: '45%',
            transform: 'translate(-45%, -50%)',
            position: 'absolute',
        }}
        >
        {characters1.split('').map((char, i) => (
            <CurvedLetters
            key={`heading-span-${i}`}
            i={i}
            degree={degree}
            arc={arc}
            radius={radius}
            >
            {char}
            </CurvedLetters>
        ))}
        </div>
    </>
}