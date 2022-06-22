import React from 'react'
import img from "../../../assests/image/Login.png";
import { Button } from '@mui/material';
const Congratulations = () => {
  return (
    <div className='card border congrate-box'>
        <p className='Congrate-font m-0'>Congratulations!</p>
        <p className='Congrate-title m-0'>You're Invited to Become a Team Member of <span className='text-primary'>Company Name</span> </p>
        <div >
            < img src={img} className='Congrate-img'/>
        </div>
        <p className='m-0'>Please click on the link below to complate your signup process and become a team member of <span className='congrate-text'>"Company Name"</span></p>
       <p className='d-flex justify-content-center p-3 m-0'> <Button variant="contained" className='px-5 py-2 m-0'>Join Now</Button></p>
    </div>
  )
}

export default Congratulations