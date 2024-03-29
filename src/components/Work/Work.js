import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './Work.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import PizzaApp from '../../assets/images/pizza-app.png'
import Gericht from '../../assets/images/gericht.png'
import GPT3 from '../../assets/images/gpt3.png'
import Metaversus from '../../assets/images/metaversus.png'

const Work = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container portfolio-page">
        <div className="work-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'p', 'r', 'o', 'j', 'e','c','t','s']}
              idx={15}
            />
          </h1>
      
      <div className="flex-container"> 


        {/* GPT3 */}
       <div className='work-component '>
         
         <img src={GPT3} alt="bg"/>
         
         <div className='work-text-component'>
         <div className='img-overlay'>
           <p className='featured'>Featured Project</p>
           <h2>GPT3</h2>
           <div className='work-description'>
             <p>GPT3 Website created using React. Modern UI</p>
            
           </div>
           <div className='footer'>
            <p className='tools'>React</p>
            <a href="https://github.com/dobiebianca16/gpt3"target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icons" size="3x"/>
            </a>
            <a href="https://dobiebianca16.github.io/gpt3/"target="_blank">
            <FontAwesomeIcon icon={faLink} className="icons" size="3x"/>
            </a>
        </div></div> 
        </div>
       </div>

      {/* Gericht Restaurant */}
      <div className='work-component work-container-laptop'>
         <img src={Gericht} alt="bg"/>
        
         <div className='work-text-component'>
         <div className='img-overlay'>
           <p className='featured'>Featured Project</p>
           <h2>Gericht Restaurant</h2>
           <div className='work-description'>
             <p>Modern Website for a restaurant </p>
            
           </div>
           <div className='footer'>
            <p className='tools'>React</p>
            <a href="https://github.com/dobiebianca16/gericht"target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icons" size="3x"/>
            </a>
            
            <a href="https://dobiebianca16.github.io/gericht/"target="_blank">
            <FontAwesomeIcon icon={faLink} className="icons" size="3x"/>
            </a>
        </div></div> 
        </div>
       </div>
      
       {/* Metaversus */}
       <div className='work-component work-container-laptop'>
         <img src={Metaversus} alt="bg"/>
         
         <div className='work-text-component'>
         <div className='img-overlay'>
           <p className='featured'>Featured Project</p>
           <h2>Metaversus</h2>
           <div className='work-description'>
             <p>React application with amazing animation</p>
            
           </div>
           <div className='footer'>
            <p className='tools'>React | Framer Motion | Tailwind CSS</p>
            <a href="https://github.com/dobiebianca16/metaversus"target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icons" size="3x"/>
            </a>
            <a href="https://dobiebianca16.github.io/pizza-app/"target="_blank">
            <FontAwesomeIcon icon={faLink} className="icons" size="3x"/>
            </a>
       </div> </div> 
        </div>
       </div>



      {/* Food Ordering App */}
      <div className='work-component work-container-laptop'>
         <img src={PizzaApp} alt="bg"/>
         
         <div className='work-text-component'>
         <div className='img-overlay'>
           <p className='featured'>Featured Project</p>
           <h2>Food Ordering App</h2>
           <div className='work-description'>
             <p>Simple presentation website for a Food Ordering mobile application</p>
            
           </div>
           <div className='footer'>
            <p className='tools'>HTML CSS BootStrap</p>
            <a href="https://github.com/dobiebianca16/pizza-app"target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icons" size="3x"/>
            </a>
            <a href="https://dobiebianca16.github.io/pizza-app/"target="_blank">
            <FontAwesomeIcon icon={faLink} className="icons" size="3x"/>
            </a>
       </div> </div> 
        </div>
       </div>

       


      </div>
      
       </div>
       </div>
  )
}

export default Work