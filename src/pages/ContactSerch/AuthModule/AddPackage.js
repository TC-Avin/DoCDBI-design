import React from 'react'
import TextField from '@mui/material/TextField';
import Select from 'react-select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';



const options = [
    { value: 'Use Filter', label: 'Use Filter' },
    { value: 'Excluding Filter', label: 'Excluding Filter' },
    { value: 'Create Team', label: 'Create Team' }
  ]


const AddPackage = (props) => {

    const Input = styled('input')({
        display: 'none',
      });
  return (
        <div>
            <div className='m-2 d-flex justify-content-center'>
            <h5 className='Upload-img mx-2'>Upload Image</h5>
                <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span" className='Image-upload'>
                    <PhotoCamera />
                </IconButton>
                </label>
            </div>
             <div className='d-grid justify-content-center m-2'>
                <TextField id="outlined-basic" value="" size="small" className="Add-package m-2" name="Title" label="Title" variant="outlined" />
                <div className='d-flex justify-content-between'>
                    <Select options={options} className="basic-multi-select w-50 m-2" classNamePrefix="select"/>
                    <TextField id="outlined-basic" value="" size="small" className="w-50 m-2" name="Validity Day's" label="Validity Day's" variant="outlined" />
                </div>
                
                <div className='d-flex justify-content-between'>
                    <TextField id="outlined-basic" value="" size="small" className="w-50 m-2" name="Number Of Credit" label="Number Of Credit" variant="outlined" /> 
                    <TextField id="outlined-basic" value="" size="small" className="w-50 m-2" name="Price" label="Price Name" variant="outlined" />  
                </div>
                <TextareaAutosize className="Add-package m-2" aria-label="minimum height" minRows={3} placeholder="Discription" />
                <div className="d-flex justify-content-end " >
                    <Button variant='contained' className=" m-2">Add</Button>
                    <Button variant='contained' className='bg-danger m-2'>Discard</Button>

                </div>
            </div>
        </div>
)
}

export default AddPackage