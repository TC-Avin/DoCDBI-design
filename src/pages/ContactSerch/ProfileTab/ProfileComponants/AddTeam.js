import React, { useContext, useState } from "react";
import PopUpModel from "../../../../componants/comman/PopUpModel";
import TextField from "@mui/material/TextField";
import { Alert, Button, Checkbox, CircularProgress } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../../../componants/Context/AuthContext";
import { INVITE_TEAM_MEMBER } from "../../../../componants/Context/Types";
import { NotificationManager } from "react-notifications";
const Addteam = (props) => {
  // const { dispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState({
    value: false,
    message: "",
  });
  const initialValues = {
    name: "",
    email: "",
    credits: "",
  };
  const validate = Yup.object().shape({
    name: Yup.string().required("This is required"),
    email: Yup.string()
      .email("This is invalid email")
      .required("This is required")
      .matches(
        /^[a-zA-Z0-9.%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9-]+.[a-zA-Z0-9-.]{2,61}$/,
        "Must Be a Official Company Email"
      ),
    credits: Yup.number()
      .typeError("Must be a number")
      .required("This is required"),
  });

  const handleSubmit = (values, resetForm) => {
    console.log("submit");
    // dispatch({
    //   type: INVITE_TEAM_MEMBER,
    //   payload: values,
    //   resetForm: resetForm,
    //   setIsLoading: setIsLoading,
    // });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        //   console.log(values);
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
        <PopUpModel
          open={props.open}
          close={()=>{props.close();NotificationManager.success("invited sucess")}}
          title={"Add Team Member"}
        >
          <Alert
            severity={isLoading?.severity}
            onClose={() => {
              setIsLoading(false);
            }}
            className={`invite-member-alert ${
              !isLoading?.severity ? "hidden" : ""
            }`}
          >
            {isLoading?.message}
          </Alert>
          <Form>
            <div class="w-100 d-flex flex-column addteam-wrapper">
              <div>
                <TextField
                  id="outlined-basic"
                  size="small"
                  className="user-input-fild w-100"
                  label="Enter Name"
                  variant="outlined"
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div className="error-container">
                  <div className="error">
                    {errors.name && touched.name && errors.name}
                  </div>
                </div>
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  size="small"
                  className="user-input-fild w-100"
                  label="Enter Email"
                  variant="outlined"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div className="error-container">
                  <div className="error">
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  size="small"
                  className="user-input-fild w-100"
                  label="No. of Credits"
                  variant="outlined"
                  name="credits"
                  value={values.credits}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div className="error-container">
                  <div className="error">
                    {errors.credits && touched.credits && errors.credits}
                  </div>
                </div>
                <h6 className="pl-2 credit-color">
                  3000 creadits remainings.
                  <a href="#" className="credit-color ml-2">
                    Buy More Credits
                  </a>
                </h6>
              </div>
            </div>
            <div class="pt-1">
              <Checkbox className="pl-0"></Checkbox>I agree to the{" "}
              <span className="terms">terms and conditions</span>
            </div>
            <div class="m-0 d-flex justify-content-start">
              <Button variant="contained" className="w-100 p-2" type="submit">
                {isLoading.value ? (
                  <CircularProgress
                    sx={{ fontSize: "0.2rem", color: "white" }}
                  />
                ) : (
                  "Invite"
                )}
              </Button>
            </div>
          </Form>
        </PopUpModel>
      )}
    </Formik>
  );
}
export default Addteam;
