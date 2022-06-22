import React, { useState } from 'react'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';


const ChangePassword = () => {
  const [userdetail, setuserdetails] = useState({
    ConfirmPassword: "123456",
    Password: "123456",
});
const[checkeditprofile, setcheckeditprofile] = useState(true);
const Editprofile = (e) => {
  var Obj = {...userdetail};
  Obj[e.target.name] = e.target.value;
  checkeditprofile &&  setuserdetails({...Obj});
}
  return (
    <div className='d-flex flex-column justify-content-between user-password'>
      <div>
        <h4 className='p-2 profile-header '>Change Password</h4>
      </div>
      <div className="user-input my-5">
        
        <TextField id="outlined-basic" value={userdetail.Password} size="small" className="user-input-fild" name="Password" label="Password" variant="outlined" onChange={Editprofile}/>

      
        <TextField id="outlined-basic" value={userdetail.ConfirmPassword} size="small" className="user-input-fild" name="ConfirmPassword" label="Confirm Password" variant="outlined" onChange={Editprofile}/>
        
      </div>
      <div>
        <Button variant="contained" className='px-5'>Save</Button>
      </div>
    </div>
  )
}

export default ChangePassword