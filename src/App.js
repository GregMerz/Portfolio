import Home from './pages/Home.js'
import Sidebar from './components/Sidebar/index.js'
import Navbar from './components/Navbar/index.js'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import CustomCursor from './images/MusicNote.png'

const Cursor = () => {
  const cursorRef = React.useRef(null)

  React.useEffect(() => {
    // document.getElementsByClassName()
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      if (mouseY <= -10) {
        cursorRef.current.style.visibility = `hidden`
      } else {
        cursorRef.current.style.visibility = `visible`
      }
      cursorRef.current.style.transform = `translate3d(${mouseX + 5}px, ${
        mouseY + 7
      }px, 0) rotate(-60deg)`
    })
  }, [])

  return (
    <img className="app-cursor" src={CustomCursor} alt="" ref={cursorRef} />
  )
}

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  })
  const onScroll = () => {
    setState({
      y: window.scrollY,
      x: window.scrollX,
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  console.log(state.y)
  return state
}

function App() {
  const scroll = useScroll()
  const [isCursorOn, useCursor] = useState(false)
  const [visible, setVisibility] = useState(false)

  const toggle = () => {
    setVisibility(!visible)
  }

  return (
    <>
      <Router>
        {isCursorOn ? <Cursor /> : <></>}
        <Sidebar scroll={scroll} visible={visible} width={window.innerWidth}/>
        <Navbar scroll={scroll} visible={visible} toggle={toggle}/>
        <Home scroll={scroll} />
      </Router>
    </>
  )
}

export default App
