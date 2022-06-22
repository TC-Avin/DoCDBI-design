import React, { useContext, useState } from "react";
import SignIn_img from "../../../assests/image/SignIn.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import { SIGNUP_USER } from "../../../componants/Context/Types";
import { AuthContext } from "../../../componants/Context/AuthContext";

const label = {
  inputProps: { "aria-label": "Checkbox demo" },
  name: "acceptTerms",
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { dispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const input = [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "email",
      name: "email",
      type: "email",
    },
    {
      label: "password",
      name: "password",
      type: "password",
    },
    {
      label: "Company Name",
      name: "companyName",
      type: "text",
    },
    {
      label: "Mobile",
      name: "mobile",
      type: "text",
    },
    {
      label: "Refferal Code",
      name: "refferalCode",
      type: "text",
    },
  ];

  const initialValues = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    companyName: "",
    refferalCode: "",
    acceptTerms: false,
  };

  const validate = Yup.object().shape({
    name: Yup.string().required("This is required"),
    // email: Yup.string()
    //   .email("This is invalid email")
    //   .required("This is required")
    //   .matches(/^[a-zA-Z0-9.%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{2,61}$/,"Must Be a Official Company Email"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    mobile: Yup.number()
      .typeError("Please enter valid mobile number")
      .required("This is required"),
    companyName: Yup.string().required("This is required"),
    acceptTerms: Yup.bool().oneOf([true], "This is required"),
  });

  const handleSubmit = (values, resetForm) => {
    dispatch({
      type: SIGNUP_USER,
      payload: values,
      resetForm: resetForm,
      setIsLoading: setIsLoading,
    });
  };

  const Redirect = () => {
    navigate("/");
  };
  return (
    <div className="login-page">
      <div className="img-content">
        <img src={SignIn_img} className="login-img" />
      </div>
      <div className="sighnUp-content">
        <h2 className="mb-0 mt-2">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
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
                {input.map((item, index) => {
                  return (
                    <>
                      <TextField
                        id="outlined-basic"
                        key={index}
                        name={item.name}
                        label={item.label}
                        variant="outlined"
                        type={item.type}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        value={values[`${item.name}`]}
                        // margin="normal"
                        className="w-75 mb-3 mt-3"
                      />
                      {/* error validated by Yup */}
                      <div className="error-container">
                        <div className="error">
                          {errors[`${item.name}`] &&
                            touched[`${item.name}`] &&
                            errors[`${item.name}`]}
                        </div>
                      </div>
                    </>
                  );
                })}
                <div className="mb-1 d-flex align-items-center justify-content-start w-75">
                <div >
                  <Checkbox {...label} onChange={handleChange} className="pl-0"/> I agree to the{" "}
                  <a href="" className="login-link">
                    term and conditions
                  </a>{" "}
                  <div className="error-container">
                    <div className="error">
                      {errors["acceptTerms"] &&
                        touched["acceptTerms"] &&
                        errors["acceptTerms"]}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              
                
              
              <div>
                <button className="login-btn mb-1" type="submit">
                  {isLoading ? (
                    <CircularProgress sx={{ fontSize: 10, color: "white" }} />
                  ) : (
                    "Signup"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div>
          Already Have an Account?{" "}
          <span className="login-link" onClick={Redirect}>
            Sign in here...
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
