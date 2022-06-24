import React, { useState } from 'react'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';


const ChangePassword = () => {
  const [userdetail, setuserdetails] = useState({
    ConfirmPassword: "123456",
    NewPassword: "123456",
});
const[checkeditprofile, setcheckeditprofile] = useState(true);
const Editprofile = (e) => {
  var Obj = {...userdetail};
  Obj[e.target.name] = e.target.value;
  checkeditprofile &&  setuserdetails({...Obj});
}
  return (
    < >
      <div>
        <h4 className='p-2 profile-header '>Change Password</h4>
      </div>
      <div className='d-flex flex-column justify-content-between user-password'>
        <div>      
          <TextField id="outlined-basic"  size="small" className="user-input-fild" name="current Password" label="current Password" variant="outlined" />  
        </div>
        
        <div className="user-input my-5">
          <TextField id="outlined-basic" value={userdetail.NewPassword} size="small" className="user-input-fild" name="NewPassword" label="New Password" variant="outlined" onChange={Editprofile}/>
        </div>
    
        <div>      
          <TextField id="outlined-basic" value={userdetail.ConfirmPassword} size="small" className="user-input-fild" name="ConfirmPassword" label="Confirm Password" variant="outlined" onChange={Editprofile}/>  
        </div>
        <div>
          <Button variant="contained" className='my-5 user-input-fild'>Save</Button>
        </div>
      </div>
    </>
  )
}

export default ChangePassword