import React, { useState } from 'react'
import './Hero.css'
import coderImg from '../../assets/code.png'
import NumberCounter from 'number-counter'

import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state/index.js'





const Hero = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    // console.log(actionCreators)
    const val = useSelector(action => action.val)
    const dispatch = useDispatch();
    const { close } = bindActionCreators(actionCreators, dispatch)
    const sendBtn = (event) => {
        

        
        event.preventDefault();
        
        close();
       
        
        

        
        

        

        fetch("http://localhost:1337/api/contact-details", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    name,
                    email,
                    phone,
                    message
                    
                },
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));



    }


    const transition = { type: "spring", duration: 3 }
    return (
        <div className='Hero'>
            {
                val && (
                    <div className="contactForm">
                        <AiOutlineClose onClick={() => { close() }} />
                        <form action="submit" className='forum'>
                            <div>

                                <input type="text"   value={name} onChange={(event) => setName(event.target.value)} />
                                <label htmlFor="Name">Name</label>
                            </div>



                            <div>

                                <input type="email"  id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>


                            <div>

                                <input type="phone"  id='phone' value={phone} onChange={(event) => setPhone(event.target.value)} />
                                <label htmlFor="phone">Phone</label>
                            </div>

                            <div className='textArea'>

                                <textarea  id="message" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <div className='buttonArea'>

                                <button className='messagebutton' onClick={sendBtn}>Send</button>
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
                        <span><NumberCounter end={100} start={50} delay='2' prefix="+"/>+</span>
                        <span>Team Members</span>
                    </div>
                    <div>
                        <span><NumberCounter end={100} start={50} delay='2' prefix="+"/>%</span>
                        <span>Client Satisfaction</span>
                    </div>
                    <div>
                        <span><NumberCounter end={500} start={450} delay='4' prefix="+"/>+</span>
                        <span>Clients</span>
                    </div>

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