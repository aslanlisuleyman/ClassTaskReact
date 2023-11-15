import React, { useState } from 'react'
import Project from './Project'

function Projects() {
  const array=[
    {
      id:1,
      title:"page1",
      imageLink:'https://www.w3schools.com/w3images/house5.jpg'
    },
    {
      id:2,
      title:"page2",
      imageLink:'https://www.w3schools.com/w3images/house2.jpg'
    },
    {
      id:3,
      title:"page3",
      imageLink:'https://www.w3schools.com/w3images/house3.jpg'
    },
    {
      id:4,
      title:"page4",
      imageLink:'https://www.w3schools.com/w3images/house4.jpg'
    },
    {
      id:5,
      title:"page5",
      imageLink:'https://www.w3schools.com/w3images/house2.jpg'
    },
    {
      id:6,
      title:"page6",
      imageLink:'https://www.w3schools.com/w3images/house5.jpg'
    },
    {
      id:7,
      title:"page7",
      imageLink:'https://www.w3schools.com/w3images/house4.jpg'
    },
    {
      id:8,
      title:"page8",
      imageLink:'https://www.w3schools.com/w3images/house3.jpg'
    },
  ]
  const [project, setProject] = useState(array)
  
  return (
    <div className='Projects'>
       {
        project.map((arr)=>{
          return < Project arr={arr} setProject={setProject} array={array}/>

        })
      }
    </div>
  )
}

export default Projects