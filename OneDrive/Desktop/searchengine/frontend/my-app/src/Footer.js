import "./Footer.css"
import React from 'react'
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa"


const Footer = () => {
  return (
    <div className='footer'>
    
            <div className='social'>
            <FaFacebook size={20} style={{colour :"white" ,marginRight :"2rem"}} />  
            <FaTwitter size={20} style={{colour :"#fff" ,marginRight :"2rem"}} />
            <FaLinkedin size={20} style={{colour :"#fff" ,marginRight :"2rem"}} />
             
            </div>
            
        </div>
        
    
      
   
  )
}

export default Footer
