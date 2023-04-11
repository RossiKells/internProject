import React from 'react'
import logo from '../../assets/logo.png'
import "./Navbar.css"
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useDispatch ,useSelector} from 'react-redux'
import {actionCreators} from '../../state/index'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'


import {motion} from 'framer-motion'


const Navbar = () => {
    const val2=useSelector(action=>action.val2)
    const dispatch= useDispatch();
    const {open}=bindActionCreators(actionCreators,dispatch)
    const {navOpen,navClose}=bindActionCreators (actionCreators,dispatch)
     const transition={type:"spring",duration:1.5}
  return (
    <>
    
    
    <nav className='Navbar '>
         
        <div className="left-n">
            <motion.img src={logo} alt="" srcset=""
            initial={{x:-40,y:50}}
            whileInView={{x:0,y:0}}
            
            
            transition={transition}
             />
            <div className='logoName'>
                <motion.span
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                
                
                transition={transition}
                >Inventors</motion.span>
                <motion.span
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                
                
                transition={transition}
                >Academy</motion.span>

            </div>
        </div>
        <div className="mid-n">
            <ul className='lists'>
                
                
                <li><Link to={'/stem'}>Steam Education</Link></li>
                <li><Link to={'/placement'}>Training / Placement</Link></li>
                <li><Link to={'/softwaredevelopment'}>Software Development</Link></li>
                <li><Link to={'/ITconsultation'}>IT consultation</Link></li>
                <li><Link to={'/team'}>Our Team</Link></li>

                <li><Link to={'/lms'}>LMS</Link></li>
                    
            </ul>
        </div>

        <div className="right-n">
            <button className='button' onClick={()=>{open()}} >Contact Us</button>
        </div>

        <div className="smallSizedNavbar">
            <GiHamburgerMenu fontSize={27} color="#fff" onClick={()=>{navOpen()}}/>

            
       
            {
               val2&& (

            <div className="smallnavbarOverlay">
            <AiOutlineClose className='closeButton' onClick={()=>{navClose()}} />
            <ul className='list'>
                
                
                <li><Link to={'/stem'}>Steam Education</Link></li>
                <li><Link to={'/placement'}>Job Placement</Link></li>
                <li><Link to={'/softwaredevelopment'}>Software Development</Link></li>
                <li><Link to={'/ITconsultation'}>IT consultation</Link></li>
                <li><Link to={'/lms'}>LMS</Link></li>
                <li style={{color:"skyblue"}}
                onClick={()=>{open()}}
                >Contact us</li>
                    
            </ul>
            </div>)
            }

        </div>


    </nav>
    </>
  )
}

export default Navbar;