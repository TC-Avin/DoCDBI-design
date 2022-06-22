import React from 'react'
import RangeSlider from '../../../componants/comman/RangeSlider'
import CommanPopUp from './CommanPopUp'

const Funding = () => {
  return (
    <CommanPopUp><p>Total Amount of Funding Raised:
    From Under $500,000 TO Over $1 Billion</p>
    <RangeSlider></RangeSlider></CommanPopUp>
  )
}

export default Funding