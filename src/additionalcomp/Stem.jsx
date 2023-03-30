import React from 'react'
import "./Stem.css"
import useFetch from '../useFetch/useFetch.js'
import { useState,useEffect,useRef } from 'react'
// import { MdArrowDropDown } from 'react-icons/md'
import Select from 'react-select'
import { useLocation } from 'react-router-dom'

const Stem = () => {
  const [url, changeUrl] = useState("http://localhost:1337/api/grade3s")

  const option=[
    {value:'Grade3',label:"Grade 3",},
    {value:'Grade4',label:"Grade 4",},
    {value:'Grade5',label:"Grade 5",},
    {value:'Grade6',label:"Grade 6",},
    {value:'Grade7',label:"Grade 7",},
    {value:'Grade8',label:"Grade 8",},
    {value:'Grade9',label:"Grade 9",},
    {value:'Grade10',label:"Grade 10",}
  ]
  const btn1=useRef()
  const containerRef=useRef()
  const {pathname}=useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)

  },[pathname])

  useEffect(()=>{
    const button1=btn1.current
    const container=containerRef.current
    button1.focus()

    document.addEventListener('click',(event)=>{
      if (!container.contains(event.target)){
        button1.focus();
      }
    })

    document.removeEventListener('click',(event)=>{
      if (!container.contains(event.target)){
        button1.focus();
      }
    })



  },[])

  
  

  
  const handleChange = (event) => {
   
    if (event.value==="Grade3"){
      changeUrl("http://localhost:1337/api/grade3s")
      
    }

    if (event.value==="Grade4"){
      changeUrl("http://localhost:1337/api/grade4s")
      
    }
    if (event.value==="Grade5"){
      changeUrl("http://localhost:1337/api/grade5s")
      
    }
    if (event.value==="Grade6"){
      changeUrl("http://localhost:1337/api/grade6s")

      
    }
    if (event.value==="Grade7"){
      changeUrl("http://localhost:1337/api/grade7s")
      
    }
    if (event.value==="Grade8"){
      changeUrl("http://localhost:1337/api/grade8s")
      
    }
    if (event.value==="Grade9"){
      changeUrl("http://localhost:1337/api/grade9s")
      
    }
    if (event.value==="Grade10"){
      changeUrl("http://localhost:1337/api/grade10s")
      
    }
    
    
    




  }



  const { ddata } = useFetch(url);
  
  
  


  return (
    <div className='stem'>
      <div className="steamhead">
        <span>Stem Education</span>
        <div className="video">
          <iframe width="700" height="330" src="https://www.youtube.com/embed/mD4M2BFmOAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>
      <div className="stembody">
        <p className='stemIntro'>
          In this Generation of Technology, Computer Science has directly impacted our work and lives. STEAM Computer Science empowers students in grades 3-10 to become creators, instead of merely consumers, of the technology all around them.

          The program's interdisciplinary courses engage students in compelling, real-world challenges. As students work together to design solutions, they learn computational thinking – not just how to code – and become better thinkers and communicators. Students take from the courses in-demand knowledge and skills they will use in high school, college, and for the rest of their lives on any career path they take.


        </p>
        <div className="aims">
          <div className="leftStem">
            <span>Our aim</span>
            <span>Maximizing your potential</span>
            <p>From building Home Appliances using electronic devices controlled through the internet or building apps from client requirements. Whether exploring cybersecurity and computer systems to current emerging Technology like Blockchain, STEAM Computer Science engages students in interdisciplinary activities that build knowledge and skills in computer science and empower students to develop essential skills such as problem-solving, critical and creative thinking, communication, collaboration, and perseverance. The program’s courses empower students with in-demand knowledge and skills they will use in high school and for the rest of their life on any career path they choose.</p>
          </div>

          <div className="rightStem">
            <img src="http://localhost:1337/uploads/stem_fc589e88ff.jpg" alt="" srcset="" />

          </div>


        </div>
      </div>
      <div className="tables">
        <span>STEAM computer science outcome and projects</span>
        <div className="upperSec" ref={containerRef}>
          <button id='btn-1' onClick={() => { changeUrl('http://localhost:1337/api/grade3s') } } ref={btn1}>Grade 3</button>
          <button onClick={() => { changeUrl('http://localhost:1337/api/grade4s') }}>Grade 4</button>
          <button onClick={() => { changeUrl('http://localhost:1337/api/grade5s') }}>Grade 5</button>
          <button onClick={() => { changeUrl('http://localhost:1337/api/grade6s') }}>Grade 6</button>
          <button onClick={() => { changeUrl('http://localhost:1337/api/grade7s') }}>Grade 7</button>
          <button onClick={() => { changeUrl('http://localhost:1337/api/grade8s') }}>Grade 8</button>
          <button onClick={() => { changeUrl('http://localhost:1337/api/grade9s') }}>Grade 9</button>
          <button onClick={() => { changeUrl('http://localhost:1337/api/grade10s') }}>Grade 10</button>
        </div>
        <div className="lowerSec">
          {
            ddata && ddata.data.map((val, index) => {
              console.log(val)


              return (
                <>
                  <div className="contents">

                    <span className="elementTitle">{val.attributes.Title} : </span>

                    <div className="Elements">

                      {
                        Object.entries(val.attributes).filter(([key, value]) => key.startsWith('Desc') && value).map(([key, value]) => {

                          return (<>
                           <span key={key}>
                              {value}

                            </span>
                            
                          
                          </>
                           


                          )
                        })









                      }
                      
                      

               
                      <div className='hr_line'></div>
                      
                        
                      







                    </div>

                   
                    
                    


                    


                  </div>


                 

               


                </>

                
              )

            })
          }
          {/* {console.log(ddata.data)} */}

          

        </div>
        <div className="clientsLogo">
          <span>Implemented by :</span>
          <div className="clientImges">
          <div className="clientData1">
            <img src="http://localhost:1337/uploads/logo1_b420830919.png?updated_at=2023-03-29T09:03:43.618Z" alt="" srcset="" />
              
              <span>Gokarneshwor Municipality
              </span>

            </div>
            <div className="clientData2">
              <img src="http://localhost:1337/uploads/logo2_27094683d0.png?updated_at=2023-03-29T09:03:55.219Z" alt="" srcset="" />
              
              <span>Kageshwori Manohara Municipality </span>

            </div>

          </div>
            
          </div>

      </div>

      <div className="dropdowns">
        <span>STEAM computer science outcome and projects</span>


        
          <Select options={option} defaultValue={option[0]} onChange={handleChange} className='select' />

        <div>
          
          
        </div>
        <div className="dropContent">
        {
            ddata && ddata.data.map((val, index) => {


              return (
                <>
                  <div className="contents" key={index}>

                    <span className="elementTitle">{val.attributes.Title} : </span>

                    <div className="Elements">

                      {
                        Object.entries(val.attributes).filter(([key, value]) => key.startsWith('Desc') && value).map(([key, value]) => {

                          return (
                            <span key={key}>
                              {value}

                            </span>

                          )
                        })









                      }
                      <div className='hr_line'></div>






                    </div>
                  </div>



                </>
              )

            })
          }
        </div>



      </div>


    </div>
  )
}

export default Stem;