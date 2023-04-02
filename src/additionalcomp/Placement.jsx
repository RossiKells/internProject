import React from 'react'
import './Placement.css'
import ReactCountriesFlags from "react-countries-flags";

const Placement = () => {
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
        <div className="coursesCard">
          <div className="coursesImg">

          </div>
          <span>Web Design Training </span>
          <span>Duration: <span>2 months</span></span>
          <button>Learn more</button>
        </div>

        <div className="coursesCard">
          <div className="coursesImg">

          </div>
          <span>Web Design Training </span>
          <span>Duration: <span>2 months</span></span>
          <button>Learn more</button>
        </div>

        <div className="coursesCard">
          <div className="coursesImg">

          </div>
          <span>Web Design Training </span>
          <span>Duration: <span>2 months</span></span>
          <button>Learn more</button>
        </div>

        <div className="coursesCard">
          <div className="coursesImg">

          </div>
          <span>Web Design Training </span>
          <span>Duration: <span>2 months</span></span>
          <button>Learn more</button>
        </div>

        <div className="coursesCard">
          <div className="coursesImg">

          </div>
          <span>Web Design Training </span>
          <span>Duration: <span>2 months</span></span>
          <button>Learn more</button>
        </div>
        
      </div>

    </div>
  )
}

export default Placement