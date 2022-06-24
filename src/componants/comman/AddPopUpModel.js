import React from 'react'
import PopUpModel from './PopUpModel';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { NotificationManager } from 'react-notifications';
import FormControl from '@mui/material/FormControl';
import { Label } from '@mui/icons-material';
import Select from 'react-select'

const AddPopUpModel = (props) => {
  // const [age, setAge] = React.useState('');
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };


  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <PopUpModel
         open={props.open}
         title={props.title}
         close={props.close}
     >
        <div className=" mb-3">
             {/* <p>{props.title}</p> */}
                <div>
                {/* <Select options={options} className="basic-multi-select"/> */}
                <TextField id="outlined-basic" size="small" className="user-input-fild w-100 mt-4" label="Name"  variant="outlined"/>
                </div>
        </div>
                <div class="m-0 d-flex justify-content-end">
                    <Button  variant="contained" className="m-2 p-2 mr-0" onClick={()=>{props.close();NotificationManager.success('List Created');}} >{props.buttonname}</Button>
                 </div>
    </PopUpModel>
  )
}

export default AddPopUpModel