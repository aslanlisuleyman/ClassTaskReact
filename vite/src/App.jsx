import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import './components/style.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Project from './components/Project'
import About from './components/About'
import Abouts from './components/Abouts'
import Heros from './components/Heros'



function App() {
  const about=[
    
    {
      id:1,
      label:"",
      title:"John Doe",
      content:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      imageLink:'https://www.w3schools.com/w3images/team2.jpg'

    },
    {
      id:2,
      label:"",
      title:"Jane Doe",
      content:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum",
      imageLink:'https://www.w3schools.com/w3images/team1.jpg'
      
    },
    {
      id:3,
      label:"",
      title:"Mike Ross",
      content:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      imageLink:'https://www.w3schools.com/w3images/team3.jpg'
      
    },
    {
      id:4,
      label:"",
      title:"Dan Star",
      content:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
      imageLink:'https://www.w3schools.com/w3images/team4.jpg'

      
    },
  ]
  const [cards, setCards] = useState(about)
  

  return (
    <>
    
      <Header/>
      <Hero/>
      
      <Projects />
      <Abouts cards={cards}/>

<Heros/>
  
      
    </>
  )
}

export default App
