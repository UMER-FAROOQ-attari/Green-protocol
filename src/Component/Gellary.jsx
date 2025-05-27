import '../App.css'
import { useState } from 'react'

export default function Img( {pera1 , pera2 , img1 , img2} ){
   return(
   <>
   <center>
   <div className="Img">
   <div className='img_pera  per1' > <p>{pera1}</p></div>
    <div className='img_pera per2' > <p>{pera2}</p></div>
    <div className="imges">
    <img src={img1} alt="" />
    <img src= {img2} alt="" />
    </div>
    </div>
    </center>
    </>
   )
}