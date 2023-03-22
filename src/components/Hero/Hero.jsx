import React from 'react'
import './Hero.css'
import coderImg from '../../assets/code.png'

import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector ,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../../state/index.js'




const Hero = () => {
    // console.log(actionCreators)
    const val=useSelector(action=>action.val)
    const dispatch=useDispatch();
    const {close}=bindActionCreators(actionCreators,dispatch)
    
    
    const transition = { type: "spring", duration: 3 }
    return (
        <div className='Hero'>
            {
             val&&(
                    <div className="contactForm">
                        <AiOutlineClose onClick={()=>{close()}} />
                        <form action="submit" className='forum'>
                            <div>

                                <input type="text" name="Firstname" id="firstname" />
                                <label for="firstname">Name</label>
                            </div>



                            <div>

                                <input type="email" name='Email' id="email" />
                                <label for="firstname">Email</label>
                            </div>


                            <div>

                                <input type="phone" name='phone' />
                                <label for="phone">Phone</label>
                            </div>

                            <div className='textArea'>

                                <textarea name="message" id="message"></textarea>
                                <label for="message">Message</label>
                            </div>
                            <div className='buttonArea'>

                                <button className='messagebutton'>Send</button>
                            </div>




                        </form>
                    </div>
                )
            }


            <div className="left-h">
                <div className="quote">
                    <motion.div
                        initial={{ left: '180px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>Best IT hub in town.</span>
                </div>
                <div className="solgan">
                    <span><motion.span className='stroke-text'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ...transition, duration: 1 }}
                    >BUILD</motion.span>

                        <motion.span
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ ...transition, duration: 3 }}
                        >{' '}YOUR Software.</motion.span></span>




                </div>
                <div className='desc'>
                    <span>Here we empower education through technology.</span>
                </div>


                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+977</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Projects</span>
                    </div>

                </div>

                <div className="btn">
                    <button className="btn">Get started</button>
                    <button className="btn">Learn more</button>
                </div>


            </div>
            <div className="right-h">


                <motion.img src={coderImg} alt="" srcset="" className='hero-img'
                    initial={{ x: '2rem' }}
                    whileInView={{ x: "-1rem" }}
                    transition={{ ...transition }} />



            </div>
        </div>
    )
}

export default Hero