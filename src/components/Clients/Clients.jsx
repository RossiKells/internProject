import React from 'react'
import './Clients.css'
import { clientsimg } from '../../data/clientfile'


const Clients = () => {
  return (
    <div className='clients'>
        <span><span>Our</span> clients</span>
        <div className="img_sec">

       
        {
            clientsimg.map((data,index)=>{
                return(
                    <div className="clientsCard">

                        <img src={data.img} alt="" srcset="" key={index} />
                    </div>

                )
                
            })
            
        }
         </div>
    </div>
  )
}

export default Clients;