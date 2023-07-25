import React from 'react';
import Insta from "@mui/icons-material/Instagram"
import Twitter from "@mui/icons-material/Twitter"
import FB from "@mui/icons-material/Facebook"
import Linked from "@mui/icons-material/LinkedIn"
import '../styles/Footer.css'



const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
         <Insta/>
         <Twitter/>
         <FB/>
         <Linked/>

      </div>
      <p> &copy; 2023 HalasPizza </p>
    </div>
  )
}

export default Footer