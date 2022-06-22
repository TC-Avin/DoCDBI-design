import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { NotificationManager } from 'react-notifications';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from 'react-select';


const AddCompany = (props) => {

    const [userType, setuserType] = useState('');
    
    const stateupdate = (event) => {
        console.log('event', event);
        setuserType(event.value);
      };

  return (
    <>
        <div className="  d-flex flex-column justify-content-between ">
            <div className='d-flex flex-wrap justify-content-between '>
                <Select  options={[{ value: 'free user', label: 'free user' },
                                { value: 'premium user', label: 'premium user' },
                                { value: 'personlized user', label: 'personlized user' }]} className="user-input-fild w-35 m-2 user-select-dropdown" onChange={stateupdate}
                />
               <TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="Email" name='Email' variant="outlined" />
                <TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="Company Name" name='Company Name' variant="outlined" />
                {userType === "personlized user" &&<TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="Cradits" name='Cradits' variant="outlined" />}
                {userType === "personlized user" &&<TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="Credits Cost" name='Credits Cost' variant="outlined" />}
                {userType === "personlized user" &&<TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="Cost" name='Cost' variant="outlined" />}
                {userType === "personlized user" &&<TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="No. Of Team Members" name='No. Of Team Members' variant="outlined" />}
                {userType === "personlized user" &&<TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="Cost of each Team Member" name='Cost of each Team Member' variant="outlined" />}
                {['premium user','personlized user'].includes(userType)&&<TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="Billing Cycle" name='Billing Cycle' variant="outlined" />}
                {['premium user','personlized user'].includes(userType)&&<TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="Subscription Package Cost" name='Subscription Package Cost' variant="outlined" />}
                {userType === "personlized user" &&<TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="Total Payble Amount" name='Total Payble Amount' variant="outlined" />}
                {userType === "personlized user" &&<TextField id="outlined-basic" size="small"  className="user-input-fild w-35 m-2" label="Discount" name='Discount' variant="outlined" />}
                
            </div>     
            <div className="form-group mb-0  d-flex justify-content-around">
              <label className="radio-inline me-3 d-flex align-items-center">
                <input type="radio" name="optradio" style={{ width: "20px", height: "20px",}}/>
                    <span style={{ fontSize: "15px" }}>&nbsp; &nbsp; Download Invoice</span>
              </label>
              <label className="radio-inline me-3 d-flex align-items-center">
                <input type="radio" name="optradio" style={{ width: "20px", height: "20px",}}/>
                    <span style={{ fontSize: "15px" }}> &nbsp; &nbsp; Send Invoice</span>
              </label>
            </div>           
            <div class="m-0 d-flex justify-content-between">
                <Button  variant="contained" className="m-2 p-2 mr-0" onClick={props.close}>{props.buttonname}</Button>
                <Button  variant="outlined" className="m-2 p-2 mr-0" onClick={props.close}>cancel</Button>
            </div>
        </div>
    </>
    
  )
}

export default AddCompany