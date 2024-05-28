import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={About}/>
        <Route path="/skills" element={Skills}/>
        <Route path="/projects" element={Projects}/>
        <Route path="/contact" element={Contact}/>
      </Routes>
    </Router>
  )
}

export default App