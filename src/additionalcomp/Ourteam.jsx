import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart';
import './ourteam.css'

import img1 from '../assets/teamimg/1.png'
import img2 from '../assets/teamimg/2.png'
import img3 from '../assets/teamimg/3.png'

const Ourteam = () => {
    return (
        <div className='ourTeam'>
            <span>Our Team</span>

            <Tree
                label={<div className='teamParent'>
                    <div>
                        <div className="teamImg">
                            <img src={img1} alt="" srcset="" />

                        </div>

                        <div className="staffname">

                         <span>Suresh Lama</span>{" - "}
                        <span>Founder</span>
                    </div>

                    </div>
                </div>}
                lineWidth={'2px'}
                lineColor={'skyblue'}
                lineBorderRadius={'10px'}
            >


                <TreeNode label={<div className='teamChild'>
                    <div>
                    <div className="teamImg">
                        <img src={img3} alt="" srcset="" />

                    </div>
                    <div className="staffname">

                    <span>Parash Gurung</span>{" - "}
                    <span>CTO</span>
                    </div>
                    
                        
                    </div>
                    

                </div>}></TreeNode>

                <TreeNode label={<div className='teamChild'>
                    <div>
                    <div className="teamImg">
                        <img src={img2} alt="" srcset="" />

                    </div>
                    <div className="staffname">

                    <span>Subodh Wagle</span>{" - "}
                    <span>Project Manager</span>
                    </div>

                    </div>
                    

                </div>}></TreeNode>








            </Tree>
        </div>
    )
}

export default Ourteam;