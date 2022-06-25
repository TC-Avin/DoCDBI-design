import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

const EditUser = (props) => {
    const [userdetail, setuserdetails] = useState({
        UserName: "Avin",
        Email:"avin@gmail.com",
        Password: "123456",
        // ConfirmPassword: "123456",
        CompanyName: "tecjcarrel",
        Mobile: "586947955"
    });
    const[checkeditprofile, setcheckeditprofile] = useState(false);

    const Editprofile = (e) => {
        var Obj = {...userdetail};
        Obj[e.target.name] = e.target.value;
        checkeditprofile &&  setuserdetails({...Obj});
    }
  return (
    <div className=" d-flex flex-column justify-content-between user-details">
             <div className="d-flex justify-content-between flex-row"> 
                <h4 class="p-2 profile-header">Edit User</h4>
            </div>
            <div className="user-dash-header p-4 ">
                <div>
                    <div className="user-name">John Doe</div>
                    <span className="user-mail-color">john@gmail.com</span>
                    <div><a className="user-edit-profile pointer text-primary" onClick={()=>{setcheckeditprofile(true)}}>Edit profile</a></div>
                </div>
                <div>
                    <button  className="user-header-btn">FREE USER</button>
                </div>
            </div>

            <div className="user-input px-4">
                <TextField id="outlined-basic" value={userdetail.UserName} size="small" className="user-input-fild" name="UserName" label="UserName" variant="outlined" onChange={Editprofile}/>
                <TextField id="outlined-basic" value={userdetail.Email} size="small" className="user-input-fild" name="Email" label="Email" variant="outlined" onChange={Editprofile}/>
                {/* <TextField id="outlined-basic" value={userdetail.Password} size="small" className="user-input-fild" name="Password" label="Password" variant="outlined" onChange={Editprofile}/>
                <TextField id="outlined-basic" value={userdetail.ConfirmPassword} size="small" className="user-input-fild" name="ConfirmPassword" label="Confirm Password" variant="outlined" onChange={Editprofile}/> */}
                <TextField id="outlined-basic" value={userdetail.CompanyName} size="small" className="user-input-fild" name="CompanyName" label="Company Name" variant="outlined" onChange={Editprofile}/>
                <TextField id="outlined-basic" value={userdetail.Mobile} size="small" className="user-input-fild" name="Mobile" label="Mobile" variant="outlined" onChange={Editprofile}/>
            </div>

            <div className="user-dash-footer my-5 px-4">
                <button className="user-footer-btn">Save</button>
                
              {props.flag!=="Companies" && <button className=" user-footer-btn  border  bg-danger">Log Out</button>}
                <div></div>
                <div></div>

                <a className="user-edit-profile text-primary pointer" onClick={()=>{props.setTitle("subscription")}}>Want to upgrade your Membership?</a>
            </div>
        </div>
  )
}

export default EditUser