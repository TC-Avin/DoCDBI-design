import React, { useState,useEffect } from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const FlageButton = (props) => {

    const [color, setcolor] = useState({});
    useEffect(() => {
        let buttonColour = {
            green:{
                dot:"green",
                back:"#c8f2d1",
                font:"#37d159"
            },
            red:{
                dot:"red",
                back:"#ffd4cb",
                font:"#ff6746"
            }
        }

        setcolor({...buttonColour[props.color]})
    
    }, [props.color])
    
  return (
    <div className='d-flex justify-content-center fleg-btn'  style={{background:color.back}}>
        <div><FiberManualRecordIcon className='dot-icon' style={{color:color.dot}}/></div>
        <div className='Flage-size' style={{color:color.font}}>{props.title}</div>
    </div>
    
  )
}

export default FlageButton