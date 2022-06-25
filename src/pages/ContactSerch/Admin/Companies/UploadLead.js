import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Button } from '@mui/material';



const UploadLead = (props) => {
  return (
    <div>
    <div className=" mb-3">
        <div>
            <TextField id="outlined-basic" size="small" className="user-input-fild w-100 mt-4" label="Name"  variant="outlined"/>
            <TextField id="outlined-basic" size="small" className="user-input-fild w-100 mt-4" name="Email" label="Email" variant="outlined" />
            <TextField id="outlined-basic" size="small" className="user-input-fild w-100 mt-4" name="WebSite" label="WebSite" variant="outlined" />
            <FormControl className='mt-3'>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                         >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />                            
                        </RadioGroup>
            </FormControl>
        </div>
    </div>
    <div class="m-0 d-flex justify-content-end">
        <Button  variant="contained" className=" p-2 mr-0" onClick={props.close}>Submit</Button>
    </div>
    </div>
        )
}

export default UploadLead