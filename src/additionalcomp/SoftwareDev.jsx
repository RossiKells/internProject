import React from 'react'
import './SoftwareDev.css'
import softwareImg from '../assets/software.jpg'
import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import {IoMdArrowDropup} from 'react-icons/io'
import Footer from '../components/Footer/Footer'

const SoftwareDev = () => {
    const [openDropDownId, setOpenDropDownId] = useState(null)
    // console.log('state',openDropDownId)
    const toggleDropdown = (dropdownId) => {
        // console.log('toggle',dropdownId);
        setOpenDropDownId(dropdownId === openDropDownId ? null : dropdownId);
    }

    const dropdowns = [
        {
            id: 1,
            title: "Custom Built",
            desc: "The software you demand and suit your desired needs will be created at Inventors. We will deploy custom software that is suitable to tailor all your business needs smoothly."

        },
        {
            id: 2,
            title: "Complete Software Cycle Service",
            desc: 'We will be analyzing everything for your initial to the final stage. The functional specifications provided by you will be carefully monitored by us to design the best structure that meets all technical requirements. After creating, Investors will generate a code for your software and test it thoroughly. Every flaw is taken out carefully so that the software application must be error free.'
        },
        {
            id: 3,
            title: "Full Transparency",
            desc: "Transparency is the fundamental demand of every single user. We are open to give you 24/7 clarity. Every client is allowed to monitor the status of the project anytime he wants."


        },
        {
            id: 4,
            title: "Scale Quickly",
            desc: "Your applications and software are necessary for us. We assure you that your project and applications will scale high without any extra effort."
        },
        {

            id: 5,
            title: "Expert Developers",
            desc: "At Inventors, experienced and skilled staff is working for delivering complete software services. Different software solutions are offered based on unique applications for businesses. Our experts only use the trends of technology so, that the software applications deliver high standard quality."
        }



    ]
    return (
        <div className='softwareDev'>
            <span><span className='stroke-textSoftware'>Software</span> Development</span>
            <div className="importance">
                <div className="leftStem">
                    <span>Introduction</span>
                    <span>Building Scalable and Robust Software Systems</span>
                    <p>Software development is a critical field that has transformed the world we live in. From desktop applications to mobile apps and cloud-based services, software development plays a significant role in virtually every industry, including healthcare, finance, education, and entertainment.

                        At its core, software development is a process of creating high-quality software products that meet the needs of end-users or stakeholders. This process typically involves several stages, including requirements gathering, design, implementation, testing, deployment, and maintenance.</p>
                </div>

                <div className="rightSecSoftwareDev">
                    <img src={softwareImg} alt="softwareimg" srcset="" />

                </div>
            </div>

            <div className="whyus">
                <span>Why Inventors?</span>
                <p>We are an IT company that offers high-quality, reliable, and innovative IT solutions to help businesses succeed. Our team of experienced professionals has the expertise to provide the best possible solutions, keeping up-to-date with the latest technologies and industry trends. Choose us as your IT partner for the best results.</p>
            </div>

            <div className="weProvide">
                <span>We provide</span>
                {
                    dropdowns.map((dropdown) => {
                        // console.log(dropdown)
                        return (
                            <div key={dropdown.id}>
                                <button onClick={() => { toggleDropdown(dropdown.id) }}><span>{dropdown.title}</span>{dropdown.id===openDropDownId?<IoMdArrowDropup
                                className='dropBtn'
                                />:<IoMdArrowDropdown
                                className='dropBtn'
                                />}</button>
                                {openDropDownId===dropdown.id&&(
                                    <div className='dropdownContainer'>
                                    <p>{dropdown.desc}</p>

                                </div>

                                )

                                }
                                

                            </div>
                        )

                    })
                }




            </div>

            {/* <Footer/> */}
        </div>
    )
}

export default SoftwareDev