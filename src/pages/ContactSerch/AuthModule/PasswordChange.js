import { Formik, Form } from "formik";
import TextField from "@mui/material/TextField";
import img from "../../../assests/image/Forgotpassword.jpg";
import { useState } from "react";


 const PasswordChange = () => {
 
    const [userpassword, setuserpassword] = useState({
        Password: "",
        Confirm_password: "",
    });

    const [checkeditprofile, setcheckeditprofile] = useState(true);
    const Editprofile = (e) => {
    var Obj = {...userpassword};
    Obj[e.target.name] = e.target.value;
    checkeditprofile &&  setuserpassword({...Obj});
    }
  return (
    <>
    <div className="login-page">
        <div className="img-content">
          <img src={img} className="login-img" />
        </div>
        <div className="sighnUp-content">
        <h2>Reset Password</h2>
        <Formik >
              <Form>
                <div className="login-input">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    value={userpassword.Password}
                    variant="outlined"
                    type="Password"
                    name="Password"
                    className="w-75 mb-3 mt-3"
                    onChange={Editprofile}
                  />
                  
                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    value={userpassword.Confirm_password}
                    variant="outlined"
                    type="password"
                    name="Confirm_password"
                    className="w-75 mb-3"
                    onChange={Editprofile}
                  />
                  
                </div>

                <div>
                  <button className="login-btn mb-2" type="submit">
                      Save
                  </button>
                </div>
              </Form>
            
          </Formik>
          </div>
        </div>
    </>
    
  )
  }
export default PasswordChange