import React ,{useState}from 'react'
import DoneWithUpload from './DoneWithUpload'
import RangeSlider from '../../../componants/comman/RangeSlider'
import { useContext } from "react";
import { MainContext } from '../../../componants/filterContext/FIlterContext';

const SalesAndEmployee = () => {

  const [open, setopen] = useState(false)
  const [value, setvalue] = useState(0);
  const context=useContext(MainContext)

  const setSerachField = (e)=>{
    setvalue(e.target.value);
    context.setContextData("Revenue","Search by Industry Name",e.target.value)
 }      

  return (
    <div open={true} >
       <p> Revenue: Under $1 Million TO Over $1 Billion</p>
       <div className='m-auto d-flex justify-content-center'>
        <RangeSlider className='m-auto'  onChange={setSerachField}></RangeSlider></div>
    </div>
  )
}

export default SalesAndEmployee