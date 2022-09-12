import React from 'react'
import './grid.css';
import a from './user.png';


export default function About(){
  return (
      <>
      
    <div className='m1'>
      <div className='imgBx'>
          <img src={a}/>
      </div>
      <div className='content'>
        <h1><b>Noopur Zambare</b></h1>
        <p>Mechanical Engineering 2nd Year</p>
      <ul>
          <li>Full Stack Developer</li>
      
      </ul>
      </div>
    </div>
    
  </>
  )
}