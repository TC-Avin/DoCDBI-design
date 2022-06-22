import React, { useContext, useState } from "react";
import email from "../../../assests/image/email.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, CircularProgress } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../componants/Context/AuthContext";
import { RESEND_EMAIL } from "../../../componants/Context/Types";
const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { dispatch } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className=" m-5">
      <div className="shadow-lg m-5">
        <h6
          className="text-start px-4 pt-4 text-primary pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowBackIosIcon style={{ width: "20px", height: "20px" }} />
          Back
        </h6>

        <div className="px-5 mx-5">
          <h3>Verify Your Email</h3>

          <h6 className="py-2">
            You will need to verify your email to complete the sign up process
          </h6>
          <img
            src={email}
            alt="as"
            width={"300"}
            height={"300"}
            className="p-3"
          />
          <h6 className="px-5 mx-5">
            An email hase been sent to {location?.state?.email} with the link to
            verify your account.If you haven't recieve the email after a few
            mins then please check your spam folder
          </h6>
          <div className="m-auto d-flex flex-row w-50 justify-content-around p-4">
            <Button
              variant="contained"
              className="button-wid"
              onClick={() => {
                dispatch({
                  type: RESEND_EMAIL,
                  payload: location?.state?.email,
                  setIsLoading: setIsLoading,
                });
              }}
            >
              {isLoading ? (
                <CircularProgress sx={{ fontSize: 10, color: "white" }} />
              ) : (
                "Resend Email"
              )}
            </Button>
            <Button variant="outlined" className="button-wid">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
