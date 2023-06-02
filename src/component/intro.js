import React from 'react'
import './intro.css'
import mi from "../../src/imgs/mi.png" 

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'><b>Hello my name is</b></h2>
                <h1 className='i-name'><i>Ramshad</i></h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Web Developer</div>
                    </div>
                </div>
                <p className='i-desc'>
                </p>
            </div>
        </div>
        <div className='i-right'>
            <div className='i-bg'></div>
            <img src={mi} alt='' className='i-img'/>
        </div>
    </div>
  )
}


export default Intro

