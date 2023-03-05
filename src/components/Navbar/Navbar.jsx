import React from 'react'
import logo from '../../assets/logo.png'
import "./Navbar.css"

import {motion} from 'framer-motion'


const Navbar = () => {
    const transition={type:"spring",duration:1.5}
  return (
    <nav className='Navbar'>
        <div className="left-n">
            <motion.img src={logo} alt="" srcset=""
            initial={{x:-40,y:50}}
            whileInView={{x:0,y:0}}
            // animate={{x:[0,30,0],y:[0,-30,0]}}
            
            transition={transition}
             />
            <div className='logoName'>
                <motion.span
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                // animate={{x:[0,30,0],y:[0,-30,0]}}
                
                transition={transition}
                >Inventors</motion.span>
                <motion.span
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                // animate={{x:[0,30,0],y:[0,-30,0]}}
                
                transition={transition}
                >Academy</motion.span>

            </div>
        </div>
        <div className="mid-n">
            <ul className='lists'>
                <li>Home</li>
                <li>About</li>
                <li>Steam Education</li>
                <li>Job Placement</li>
                <li>Software Development</li>
                <li>IT consultation</li>
                <li>LMS</li>
                    
            </ul>
        </div>

        <div className="right-n">
            <button className='button'>Join Now</button>
        </div>


    </nav>
  )
}

export default Navbar