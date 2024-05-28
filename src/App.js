import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'

const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<div>About</div>}/>
      </Routes>
    </Router>
  )
}

export default App