import { Button } from '@mui/material'
import React from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Divider from '@mui/material/Divider';
import CommanPopUp from './CommanPopUp';

const DoneWithUpload = (props) => {
  return (
    <>
        <div className='d-flex justify-content-between' ><h4>{props.title||"Dummy "} </h4><Button variant='outlined'>Done</Button></div>
     <Divider className='mt-2'/>
        {props.children}
        <div className='d-flex justify-content-between'><div className='m-2'><FileUploadOutlinedIcon/>upload a list</div><div className='m-2'><AddBoxOutlinedIcon/>select from list</div></div>
    </>
  )
}

export default DoneWithUpload