import React from 'react'
import { Tree, TreeNode } from
  'react-organizational-chart'
import './ITconsult.css'


const ITconsult = () => {
  return (
    <div className='ITconsult'>
      <div className="ITconsultHead">
        <span>
          Our Service
        </span>
      </div>
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

  )
}

export default ITconsult