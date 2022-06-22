import React, { useContext, useEffect, useState } from "react";
import img from "../../../assests/image/Login.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AuthContext } from "../../../componants/Context/AuthContext";
import { FORGET_PASSWORD, LOGIN_USER } from "../../../componants/Context/Types";
import { Alert, CircularProgress } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [isEmailVerified, setIsEmailVerified] = useState();
  const [resetPassword, setResetPassword] = useState({
    value: "",
    message: "",
  });
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    remember_me: false,
  };
  const validate = Yup.object().shape({
    email: Yup.string()
      .email("This is invalid email")
      .required("This is required")
      .matches(
        /^[a-zA-Z0-9.%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{2,61}$/,
        "Must Be a Official Company Email"
      ),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  //form submit
  const handleSubmit = (values, resetForm) => {
    dispatch({
      type: LOGIN_USER,
      payload: values,
      resetForm: resetForm,
      setIsLoading: setIsLoading,
    });
  };

  const forgetPassword = (email) => {
    if (email) {
      dispatch({
        type: FORGET_PASSWORD,
        payload: email,
        setResetPassword: setResetPassword,
      });
    }
  };

  const Redirect = () => {
    navigate("/signUp");
  };
  useEffect(() => {
    setIsEmailVerified(location.search.includes("status=success"));
  }, []);
  return (
    <>
      <Alert
        onClose={() => {
          setIsEmailVerified(false);
        }}
        className={`email-verified-alert ${!isEmailVerified ? "hidden" : ""}`}
      >
        Thank you for Confirming You Email. You can now Login with your
        registered email.
      </Alert>
      <Alert
        severity={resetPassword?.severity}
        onClose={() => {
          setResetPassword(false);
        }}
        className={`email-verified-alert ${
          !resetPassword?.value ? "hidden" : ""
        }`}
      >
        {resetPassword?.message}
      </Alert>
      <div className="login-page">
        <div className="img-content">
          <img src={img} className="login-img" />
        </div>
        <div className="sighnUp-content">
          <h2>Sign in</h2>
          <Formik
            initialValues={initialValues}
            //   validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              handleSubmit(values, resetForm);
              // alert("Form is validated! Submitting the form...");
            }}
            >
            {({
              values,
              errors,
              touched,
              handleChange,
              setFieldValue,
              handleBlur,
            }) => (
              <Form>
                <div className="login-input">
                  <TextField
                    id="outlined-basic"
                    label="email"
                    value={values.email}
                    variant="outlined"
                    type="email"
                    name="email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    className="w-75 mb-3 mt-3"
                  />
                  <div className="error-container">
                    <div className="error">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>
                  <TextField
                    id="outlined-basic"
                    label="password"
                    value={values.password}
                    variant="outlined"
                    type="password"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    name="password"
                    className="w-75 mb-3"
                  />
                  <div className="error-container">
                    <div className="error">
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>
                  {/* {
                        [{ label: "Email", state: email , type: "text", function: setEmail},
                            { label: "Password", state: password , type: "password", function: setPassword},
                        ].map((item, index) => (
                            <div>
                                <TextField
                                    id="outlined-basic"
                                    key={index}
                                    label={item.label}
                                    variant="outlined"
                                    type= {item.type}
                                    onChange= {e => item.function(e.target.value)}   
                                    margin="normal"     
                                />
                            </div>
                        ))
                    } */}
                  {/* </div> */}
                  <div
                    class="mb-3 d-flex justify-content-between w-75"
                    
                  >
                    <div>
                      <Checkbox
                        {...label}
                        name="remember_me"
                        value={values.remember_me}
                        onChange={handleChange}
                        className="pl-0"
                      />{" "}
                      Remember Me
                    </div>
                    <div style={{ marginRight: "12px" }}>
                      <Link
                      to = "/forgotpassword"
                        className="login-link"
                      // onClick={() => forgetPassword(values.email)}
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <button className="login-btn mb-2" type="submit">
                    {" "}
                    {isLoading ? (
                      <CircularProgress sx={{ fontSize: 10, color: "white" }} />
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </div>
                <div>
                  Don't have any account?{" "}
                  <span className="login-link" onClick={Redirect}>
                    Sign up here...
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default SignInPage;
