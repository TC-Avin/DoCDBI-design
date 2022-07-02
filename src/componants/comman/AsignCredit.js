import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const AsignCredit = (props) => {
  return (
    <div>
        <div className=" w-100 d-flex flex-column mylist-Update">
                <div>
                    <TextField id="outlined-basic" size="small" className="user-input-fild w-100" label="Assign Credit" name='Assign Credit' variant="outlined" />
                </div>
                
              </div>
              <div class="m-0 d-flex justify-content-end">
                <Button  variant="contained" className="m-2 p-2 mr-0" onClick={props.close}>Submit</Button>
              </div>
    </div>
  )
}

export default AsignCredit