import React from 'react'


const BulletSplit = (text) => {
    




    const newText = JSON.stringify(text.text)
    const filtredNewText=newText.replace(/\\n/g," ")
    // console.log(filtredNewText)

    const bulletPoints = filtredNewText.split("•").map((point) => point.trim())
    

    

    const intro=bulletPoints[0]
    const modifiedIntro=intro.substring(1)

    
    
    

    


    
    
  
    





    
    


   

    



    return (
        <>


            <div>

                {


                    modifiedIntro && (<span>{modifiedIntro}</span>)

                }
                <ul>
                {bulletPoints.slice(1).map((point, index) => {

                   return(<li key={index}>{point.trim()}</li>) 

                }
                    

                
        )}
                </ul>

            </div>




        </>
    )
}

export default BulletSplit;