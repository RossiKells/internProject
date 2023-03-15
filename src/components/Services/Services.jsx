import React from 'react'
import './Services.css'

import { servicesdata } from '../../data/services'
import {motion } from 'framer-motion'



const Services = () => {
    const transition={type:'spring'}
    const durations = [3, 4, 5, 6, 7];
    return (
       

        <div className="services">
            <span className="stitle"><span >Our </span>Services</span>
            <div className="card_sec">
                                {servicesdata.map((data,index)=>{
                                    console.log(index)
                    return(<motion.div className="cards"
                    key={index}
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{...transition, duration: durations[index % durations.length] }}
                    >

                    <div className="imgsec">
                        <img src={data.img} alt="" srcset="" />
                        
    
                    </div>
                    <div className="text-sec">
                        <span>
    
                        {data.title}
                        </span>
                        <span>
                            {data.desc}
                        </span>
    
                    <button>Learn More</button>
    
                    </div>
    
    
                </motion.div>)
                })}
            

           
                
            </div>
            
        </div>
        
    )
}

export default Services