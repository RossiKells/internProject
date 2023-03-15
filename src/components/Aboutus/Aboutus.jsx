import React from 'react'
import './Aboutus.css'
import {motion} from 'framer-motion'

const Aboutus = () => {
    const transition = {type:'spring'}
    return (
        <div className='aboutUs'>
            <div className="a-left">
                <motion.span
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1,x:0}}
                transition={{transition:transition,duration:.5}}
                >About us</motion.span>

                <motion.span className='aboutTitle'
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1,x:0}}
                transition={{transition:transition,duration:.7}}>Driving Innovation and Empowering Businesses.</motion.span>

                

                <motion.span className='aboutDesc'
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1,x:0}}
                transition={{transition:transition,duration:1}}
                >Welcome investors academy! We are a team of dedicated professionals committed to driving innovation and empowering businesses through cutting-edge technology solutions. Our company was founded with a mission to help businesses of all sizes leverage the power of technology to achieve their goals and stay ahead of the competition. </motion.span>
                
            </div>
            <div className="a-right">
            <motion.div className="circle"
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{transition,duration:.8}}></motion.div>
            <motion.div className="circle2"
            initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}}
            transition={{transition,duration:.9}}></motion.div>
            </div>
        </div>
    )
}

export default Aboutus