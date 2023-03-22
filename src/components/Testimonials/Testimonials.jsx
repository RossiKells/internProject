import {React,useState} from 'react'
import "./Testimonials.css"
// import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
import useFetch from '../../useFetch/useFetch'

const Testimonials = () => {
    const transition = {type:'spring', duration:3}
    const [data,changeData]=useState(0);
    const [imgurl,setImgurl]=useState('http://localhost:1337/uploads/1_65db2dc1b5.jpg')
    // const [tlength,changetlength]=useState(0);

    console.log(imgurl)

    
      
      const {  ddata } = useFetch('http://localhost:1337/api/testimonials');

      let tlength=2;
      const leftarrowClick=()=>{
        if (data===0){
            changeData(tlength-1)
            setImgurl('http://localhost:1337/uploads/2_18aadfcd32.jpg')
        }
        else{
            
            changeData((prev)=>prev-1)
            setImgurl('http://localhost:1337/uploads/1_65db2dc1b5.jpg')
        }
      }


      const rightarrowClick=()=>{
        if (data===tlength-1){
            changeData(0);
            
            setImgurl('http://localhost:1337/uploads/1_65db2dc1b5.jpg')
        }
        
        else{
            changeData((prev)=>prev+1)
            setImgurl('http://localhost:1337/uploads/2_18aadfcd32.jpg')
            
        }

        
      }
    
   

    // const tlengthh=ddata.length;
    
    return (
        
        <div className='Testimonials'>
            <div className="left-t">
                <span>TESTIMONIALS</span>
                <span className='stroke-text'>WHAT THEY</span>

                <span>SAY ABOUT US</span>
                <motion.span className='review'
                key={data}
                initial={{opacity:0,x:-50}}
                transition={{...transition,duration:2}}
                // animate={{opacity:1,x:0}}
                whileInView={{opacity:1,x:0}}
                exit={{opacity:0,x:-50}}
                >
                    {ddata&&ddata.data[data].attributes.Desc}
                    
                </motion.span>

                <span className='name'>
                    <span style={{color:"skyblue"}}>
                        {ddata&&ddata.data[data].attributes.Name} 
                
                    </span> - {" "}
                    
                    <span>
                    
                        {ddata&&ddata.data[data].attributes.Role}

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
            initial={{opacity:0,x:-100}}
            transition={{...transition,duration:2}}
            // animate={{opacity:1,x:0}}
            whileInView={{opacity:1,x:0}}
            // exit={{opacity:0,x:-100}}
            ></motion.div>
            
            <motion.img src={imgurl} alt="" srcset="" 
            key={data}
            initial={{opacity:0,x:50}}
            // animate={{opacity:1,x:0}}
            whileInView={{opacity:1,x:0}}
            exit={{opacity:0,x:-100}}
            transition={transition}
            />

            <div className="arrows">
                <img src={leftArrow} alt="" srcset="" onClick={leftarrowClick} />
                <img src={rightArrow}alt="" onClick={rightarrowClick
                   

                } />

            </div>

            </div>
        </div>
            )
}

export default Testimonials;