import React from 'react'
import moneybag from "../../assests/image/moneybag.png"
import { Button } from '@mui/material'

const UpgradeNow = () => {
  return (
    <div>
        <div className='text-center'>
            <img src={moneybag} className="Upgrade-img"/>
        </div>
        <div className='text-center mt-4'>
            <div className='text-design'>Whoops! You'ar Running Out Of Credits!</div>
            <div className='text-Upgrade'>Subscribe for $74/mth and Billed Anually</div>
        </div>
        <div className='text-center mt-4'>
            <Button variant="contained" className='text-Upgrade-button'>Upgrade Now!</Button>
        </div>
        
    </div>
  )
}

export default UpgradeNow