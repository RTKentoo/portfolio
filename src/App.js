import React from 'react'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Nav from './components/Nav/Nav'


function App() {
  return (
  	<div>
  		<Nav />
	    <About />
	    <Projects />
	    <Contact />
    </div>  
  )
}

export default App
