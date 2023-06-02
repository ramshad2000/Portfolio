import React from 'react'
import './projectlist.css'
import Projucts from './Projects' 
import Datas from './data'

 const Projectlist = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'><i>My Projects</i></h1>
            <p className='pl-desc'>Here are some of my works that i done on the basis of projects
            and assignments, theses are mostly front ends, asap it will done completely.
            </p>
        </div>
        <div className='pl-list'>
            {Datas.map((item)=>(
                <Projucts key={item.id}  img={item.img} />
                
            ))}
        
        </div>
    </div>
  )
}



export default Projectlist
