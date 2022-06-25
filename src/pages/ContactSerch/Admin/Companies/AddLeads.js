import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Button } from '@mui/material';
import Select from 'react-select';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import UploadFileIcon from '@mui/icons-material/UploadFile';



const options = [
    { value: 'Use Filter', label: 'Use Filter' },
    { value: 'Excluding Filter', label: 'Excluding Filter' },
    { value: 'Create Team', label: 'Create Team' }
  ]

const AddLeads = (props) => {

    const Input = styled('input')({
        display: 'none',
      });
  return (
    <div>
    <div className=" mb-3">
        <div>
            <Select options={options} className="basic-multi-select w-100 m-2" classNamePrefix="select"/>
            <div className='m-2 d-flex justify-content-center border rounded w-100 p-5'>
            <h5 className='Upload-img mx-2'>Upload CSVs</h5>
                <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span" className='Image-upload'>
                    <UploadFileIcon />
                </IconButton>
                </label>
            </div>
        </div>
    </div>
    <div class="m-0 d-flex justify-content-end">
        <Button  variant="contained" className=" p-2 mr-0" onClick={props.close}>Submit</Button>
    </div>
    </div>
  )
}

export default AddLeads