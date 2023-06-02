import React from 'react'
import './Projects.css'


 const Projects = ({img,link}) => {
  return (
    <div className='p'>
    <div className='p-browser'>
      <div className='p-circles'></div>
      <div className='p-circles'></div>
      <div className='p-circles'></div>
    </div>
    <a href={link} target='_blank' rel='noreferrer'/>
    <img src={img} alt='' className='p-img'/>
    </div>
  )
}


export default Projects
