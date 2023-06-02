import React from 'react'
import './about.css'
import fi from "../../src/imgs/image.jpg"

 const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card.bg'></div>
            <div className='a-card'>
                <img src={fi}  alt='' className='a-img'/>
            </div>
        </div>
        <div className='a-right'>
          <h1>About Me</h1>
          <p>                   Hello, Iam Ramshad ,From kerala currently studying Mearn stack course, Ia finished my degree in BCA,
                   and iam completed my Front end side, lets see some of my works..!
          </p>
        </div>
    </div>
  )
}


export default About
