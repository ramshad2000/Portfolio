import React from 'react'
import './Contact.css'
import git from "../../src/imgs/git.png" 
import email from "../../src/imgs/email.png" 
import Phone from "../../src/imgs/Phone.png" 


 const Contact = () => {
  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'><i>Find me here</i></h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <img src={Phone} alt='' className='c-icon'/>
              7894561233
            </div>
            <div className='c-info-item'>
            <img src={email} alt='' className='c-icon'/>
            contact @gmail.com
            </div>
            <div className='c-info-item'>
              <img src={git}  alt='' className='c-icon'/>
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p>
            For any enquiries contact me, in case for any works email me
            the details are given below.
          </p>
          <form>
            <input type='text' placeholder='Name' name='user_name'/>
            <input type='text' placeholder='Subject' name='user_subject'/>
            <input type='text' placeholder='Email' name='user_email'/>
            <textarea rows="5"  placeholder='Message' name="message"/>
          </form>
          <button className='bt'>Submitt</button>
        </div>
      </div>
      </div>
  )
}


export default Contact