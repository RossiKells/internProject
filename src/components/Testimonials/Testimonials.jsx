import {React,useState} from 'react'
import "./Testimonials.css"
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {
    const transition = {type:'spring', duration:3}
    const [data,changeData]=useState(0);
    const tlength=testimonialsData.length;
    return (
        <div className='Testimonials'>
            <div className="left-t">
                <span>TESTIMONIALS</span>
                <span className='stroke-text'>WHAT THEY</span>

                <span>SAY ABOUT US</span>
                <motion.span className='review'
                key={data}
                initial={{opacity:0,x:-100}}
                transition={{...transition,duration:2}}
                // animate={{opacity:1,x:0}}
                whileInView={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                >
                    {testimonialsData[data].review}
                    
                </motion.span>

                <span className='name'>
                    <span style={{color:"skyblue"}}>
                        {testimonialsData[data].name} 
                
                    </span> - {" "}
                    
                    <span>
                    
                        {testimonialsData[data].status}

                    </span>
                </span>

            </div>

            <div className="right-t">
            <motion.div
            // key={data}
            initial={{opacity:0,x:-30}}
            // animate={{opacity:1,x:0}}
            transition={{...transition,duration:2}}
            // exit={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            ></motion.div>

            <motion.div
            // key={data}
            initial={{opacity:0,x:100}}
            transition={{...transition,duration:2}}
            // animate={{opacity:1,x:0}}
            whileInView={{opacity:1,x:0}}
            // exit={{opacity:0,x:-100}}
            ></motion.div>
            <motion.img src={testimonialsData[data].image} alt="" srcset="" 
            key={data}
            initial={{opacity:0,x:100}}
            // animate={{opacity:1,x:0}}
            whileInView={{opacity:1,x:0}}
            exit={{opacity:0,x:-100}}
            transition={transition}
            />

            <div className="arrows">
                <img src={leftArrow} alt="" srcset="" onClick={()=>{
                    data===0?changeData(tlength-1):changeData((prev)=>prev-1)
                }} />
                <img src={rightArrow}alt="" onClick={()=>{
                    data===tlength-1?changeData(0):changeData((prev)=>prev+1);

                }} />

            </div>

            </div>
        </div>
    )
}

export default Testimonials;