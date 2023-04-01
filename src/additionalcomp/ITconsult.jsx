import React from 'react'
import { useNavigate } from 'react-router';

import { Tree, TreeNode } from
  'react-organizational-chart'
import './ITconsult.css'
import javaLogo from '../assets/programming/java.png'
import ETLLogo from '../assets/programming/etl.png'
import informaticaLogo from '../assets/programming/informatica.png'
import dotNetLogo from '../assets/programming/.net.png'
import powerBlLogo from '../assets/programming/powerbl.png'
import pythonLogo from '../assets/programming/python.png'
import reactLogo from '../assets/programming/react.png'
import calendarLogo from '../assets/plans/calendar.png'
import checkList from '../assets/plans/checklist.png'
import whatsApp from '../assets/plans/whatsapp.png'



const ITconsult = () => {
  

  const history = useNavigate();
  const whatsAppCall=()=>{
    const whatsappCallUrl = 'https://wa.me/+9779841955416';
    window.open(whatsappCallUrl, '_blank');
    history.push('/');

  }
  return (
    <div className='ITconsult'>
      <div className="ITconsultHead">
        <span>
          Our Service
        </span>
      </div>

      <div className="hierarchy">

      

      <Tree
        label={<div className='mainParent'>
          <span>Online Consulting</span>
        </div>}
        lineWidth={'2px'}
        lineColor={'skyblue'}
        lineBorderRadius={'10px'}
      >
        <TreeNode label={<div className='child'>
          <div className="childImgSec">
            <img src="https://newitnest.com/skin/newitnest/assets/images/training-n.png" alt="" srcset="" />

          </div>
          <span>Online Training</span>
          <span>Industry standrad training</span>

        </div>}>


        </TreeNode>
        <TreeNode label={<div className='child'>
          <div className="childImgSec">
            <img src="https://newitnest.com/skin/newitnest/assets/images/training-n.png" alt="" srcset="" />

          </div>
          <span>Job support</span>
          <span>24/7 support by experts</span>

        </div>}>

        </TreeNode>

        <TreeNode label={<div className='child'>
          <div className="childImgSec">
            <img src="https://newitnest.com/skin/newitnest/assets/images/training-n.png" alt="" srcset="" />

          </div>
          <span>Interview support</span>
          <span>🔴 Live support</span>

        </div>} />

        <TreeNode label={<div className='child'>
          <div className="childImgSec">
            <img src="https://newitnest.com/skin/newitnest/assets/images/training-n.png" alt="" srcset="" />

          </div>
          <span>Coding challege support</span>
          <span>Cracking your coding with your coding challenge support</span>

        </div>} />

      </Tree>
      </div>
      <div className="jobSupportSec">
        <span>Top job support</span>
        <div className="jobSupportImages">
          <img src={javaLogo} alt="" srcset="" />
          <img src={ETLLogo} alt="" srcset="" />
          <img src={informaticaLogo} alt="" srcset="" />
          <img src={dotNetLogo} alt="" srcset="" />
          <img src={pythonLogo} alt="" srcset="" />
          <img src={powerBlLogo} alt="" srcset="" className='powerbl' />
          <img src={reactLogo} alt="" srcset="" />



        </div>
      </div>
      <div className="achivementParent">


        <span>Our achivements</span>
        <div className="achivements">
          <div>
            <span>24 / 7</span>
            <span> 🔴Live support </span>
          </div>
          <div>
            <span>100%</span>
            <span>😊Client Satisfaction  </span>
          </div>
          <div>
            <span>+500</span>
            <span>📈Clients </span>
          </div>
        </div>
      </div>

      <div className="planCards">
        <span>We provide</span>

        <div className="planCardsContent">


          <div>
            <img src={calendarLogo} alt="" srcset="" />
            <span>Monthly plan</span>
            <p>
            Support for 5 days a week (Monday to Friday) daily until task / story completes. Support would be provided based on requirement. You can connect using different online plaftorms. Payment would be on monthly basis.
            </p>

          </div>
          <div>
          <img src={checkList} alt="" srcset="" />
            <span>Task based plan</span>
            <p>Support for your specific task (one or two days assignment). You can connect using TeamViewer, Skype, go-to meeting etc. Charges will be based on complexity of work and number of hours.</p>
          </div>
        </div>

      </div>
      <div className="whatsAppContact" onClick={whatsAppCall}>
        <img src={whatsApp} alt="" srcset="" />

        <span>+977-9841955416</span>
        </div>
      
    </div>
    

  )
}

export default ITconsult