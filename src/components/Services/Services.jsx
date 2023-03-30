import React from 'react'
import './Services.css'

import { servicesdata } from '../../data/services'
import {motion } from 'framer-motion'
import useFetch from '../../useFetch/useFetch'
import {Link} from 'react-router-dom'



const Services = () => {
    const {ddata}=useFetch('http://localhost:1337/api/services')
    // console.log(ddata.data)
    const transition={type:'spring'}
    const durations = [3, 4, 5, 6, 7];
    return (
       

        <div className="services">
            <span className="stitle"><span >Our </span>Services</span>
            <div className="card_sec">
                                {ddata&&ddata.data.map((data,index)=>{
                                    console.log(data)
                    return(<motion.div className="cards"
                    key={index}
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{...transition, duration: durations[index % durations.length] }}
                    >

                    <div className="imgsec">
                        <img src={data.attributes.imgurl} alt="" srcset="" />
                        
    
                    </div>
                    <div className="text-sec">
                        <span>
    
                        {data.attributes.Title}
                        </span>
                        <span>
                            {data.attributes.Description}
                        </span>
                    
                    <button><Link to={'/stem'}>Learn More</Link>
                    </button>
                    
                    </div>
    
    
                </motion.div>)
                })}
            

           
                
            </div>
            
        </div>
        
    )
}

export default Services