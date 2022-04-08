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
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
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
      y: window.scrollY / window.innerHeight,
      x: window.scrollX / window.innerWidth,
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return state
}

function App() {
  const scroll = useScroll()

  return (
    <Router>
      <Cursor />
      <Sidebar scroll={scroll} />
      <Navbar scroll={scroll} />
      <Home scroll={scroll} />
    </Router>
  )
}

export default App
