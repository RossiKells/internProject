import React from 'react'
import './Services.css'

import { servicesdata } from '../../data/services'



const Services = () => {
    return (
       

        <div className="services">
            <span className="stitle"><span >Our </span>Services</span>
            <div className="card_sec">
                                {servicesdata.map((data,index)=>{
                    return(<div className="cards">

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
    
    
                </div>)
                })}
            

           
                
            </div>
            
        </div>
        
    )
}

export default Services