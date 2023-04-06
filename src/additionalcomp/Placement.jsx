import React from 'react'
import './Placement.css'
import ReactCountriesFlags from "react-countries-flags";
import useFetch from '../useFetch/useFetch'
import { useState,useEffect } from 'react';

const Placement = () => {
  const [sortedData, changesortedData] =useState(null);
  const { ddata } = useFetch('http://localhost:1337/api/syllabuscards')

  useEffect(() => {
    if (ddata !== null) {
      const sorted = ddata.data.slice().sort((a, b) => a.attributes.sn - b.attributes.sn);
      changesortedData(sorted);
    }
  }, [ddata]);

  

  // console.log(ddata)


  return (
    <div className='Placement'>

      <span>
        Career Accelerating Program
      </span>
      <div className="placement_top_contents">
        <ul>
          <li>Industry standrad training for own In-house projects and team</li>
          <li>Certification after completition of training</li>
          <li>Intern / Jobplacement after training</li>
          <li>Realtime projects and hands-on practise and projects</li>
        </ul>
        <span className='emoji'>Contract / Full time job after from USA
          <span><ReactCountriesFlags isoCode='us' /></span>
          / Nepal <span><ReactCountriesFlags isoCode='np' /></span> for deserving.</span>
      </div>

      <span className='ourCourses'>Our courses</span>
      <div className="programcourses">
      <div>

        {sortedData && sortedData.map((data) => {
          // console.log(data.attributes);
          return (
            
              <div className="coursesCard">


                <div className="coursesImg">
                  <img src={data.attributes.imageUrl} alt="" srcset="" />


                </div>
                <span>{data.attributes.Title} </span>
                <span>Duration: <span>{data.attributes.Duration}</span></span>
                <button>Learn more</button>
              </div>
           
          )

        })}
       </div>









      </div>

    </div>
  )
}

export default Placement