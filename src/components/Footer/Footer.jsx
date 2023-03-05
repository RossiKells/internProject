import React from 'react'
import {AiOutlineSend,AiOutlineInstagram,AiFillFacebook} from 'react-icons/ai'

import joinImg from '../../assets/joinnow.png'
import logo from '../../assets/logo.png'
import "./Footer.css"
import {motion} from 'framer-motion'
const Footer = () => {
    const transition={type:"spring",duration:3}
  return (
    <div className='footer'>
        <div className="fleft">
            <div className="emailSec">
                <span>Grab the opportunity</span>
                <span>Contact us</span>
                <div className="inpEmail">

                <input type="text" placeholder='Your Email' />
                <AiOutlineSend className='sendIcon'/>
                </div>

                
            </div>

            <div className="logoSec">
                <div className="logoimg">

                <img src={logo} alt="" srcset="" />
                <div className='logooname'>
                <span>Inventors</span>
                <span>Academy</span>

            </div>
                </div>

                <motion.span>Make the right data-driven decisions that move your business.</motion.span>
            </div>
            
        </div>
        <div className="fright">
            <div className="joinImg">
                <motion.img src={joinImg} alt="" srcset="" 
                />
                
            </div>
            <div className="contactPart">
                <div className="contactComp">

                <span>Contact us</span>
                <span>9823434334</span>
                </div>

                <div className="contactComp">
                <span>Email us</span>
                <span><a className="eemail" href = "mailto: abc@example.com">investors@gmail.com</a></span>

                </div>

                <div className="contactComp">
                <span>Working days</span>
                <span>Monday-Friday</span>


                </div>
                <div className="contactComp">
                    <span>Social Media</span>
                    <div className="socialmediaIcons">
                        <AiFillFacebook/>
                        <AiOutlineInstagram/>


                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;