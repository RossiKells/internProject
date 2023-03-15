import React from 'react'
import './Clients.css'
import { clientsimg } from '../../data/clientfile'
import {motion } from 'framer-motion'
const durations = [1,2.3,4,5,6,7,8];


const Clients = () => {
    const transition={type:'spring'}
  return (
    <div className='clients'>
        <span>We work with</span>
        <div className="img_sec">

       
        {
            clientsimg.map((data,index)=>{

                return(
                    <motion.div className="clientsCard"
                    key={index}
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{...transition, duration: durations[index % durations.length]} }>

                        <img src={data.img} alt="" srcset="" key={index} />
                    </motion.div>

                )
                
            })
            
        }
         </div>
    </div>
  )
}

export default Clients;