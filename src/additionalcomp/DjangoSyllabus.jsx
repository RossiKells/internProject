import { React } from 'react'
import './Syllabus.css'

import useFetch from '../useFetch/useFetch'
import BulletSplit from '../bulletsplit/BulletSplit'



const DjangoSyllabus = () => {
    const { ddata } = useFetch('http://localhost:1337/api/django-web-dev-syllabi?populate=deep');
    // console.log('digital market',ddata)
    

   


    





   

    return (
        <>


            <div className='Syllabus'>
                <span>Our Courses</span>
                <div className="syllabusIntro">
                    <p>Our course offerings include a diverse range of topics that are relevant to the rapidly evolving digital landscape. Whether you're interested in software development or digital marketing, we have courses that will help you build the skills you need to succeed.</p>
                </div>



                <div className="syllabusList">

                    <span>Syllabus</span>


                    <div className="syllabusContent">
                        {
                            ddata && ddata.data.map((val) => {
                                return (
                                    <>
                                        <div className="syllabusTopic">
                                            <span>{val.attributes.Title}</span>

                                        </div>



                                        <div className="syllabusDesc">

                                            {
                                                (val.attributes.django_web_dev_section_lists.data.map((val, key) => {
                                                    const description = val.attributes.django_web_dev_section_content.data.attributes.Description



                                                    return (
                                                        <>
                                                            <div className="syllabusContent" key={key}>

                                                                <span>{val.attributes.django_web_dev_section_content.data.attributes.Title}</span>

                                                               


                                                                <div className="desc">
                                                                    
                                                               { <BulletSplit text={description}/>}
                                                                    
                                                                </div>



                                                            </div>








                                                        </>

                                                    )


                                                }))
                                            }





                                        </div>




                                    </>
                                )

                            })
                        }






                    </div>

                </div>
            </div>
        </>
    )
}

export default DjangoSyllabus;