import React from 'react'
import pizza from '../assets/pizza7.jpeg'
import '../styles/About.css'



function  About() {
  return (
    <div className='about'>
        <div className='aboutTop'
        style={{ backgroundImage: `url(${pizza})` }}> 

        </div>

        <div className='aboutBottom'> 
        <h1> ABOUT US </h1>
        <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Est nemo adipisci ducimus tenetur eligendi reiciendis nulla 
    doloremque unde vero velit voluptatum nostrum, iusto quidem! 
    Perferendis, vel eveniet. Excepturi, odio assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Est nemo adipisci ducimus tenetur eligendi reiciendis nulla 
    doloremque unde vero velit voluptatum nostrum, iusto quidem! 
    Perferendis, vel eveniet. Excepturi, odio assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Est nemo adipisci ducimus tenetur eligendi reiciendis nulla 
    doloremque unde vero velit voluptatum nostrum, iusto quidem! 
    Perferendis, vel eveniet. Excepturi, odio assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Est nemo adipisci ducimus tenetur eligendi reiciendis nulla 
    doloremque unde vero velit voluptatum nostrum, iusto quidem! 
    Perferendis, vel eveniet. Excepturi, odio assumenda.
             
        </p>
        </div>
    </div>
  )
}

export default  About