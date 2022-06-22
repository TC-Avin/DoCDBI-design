import React from "react";
import RoundButton from "../../../componants/comman/RoundButton";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const NumberTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      width: "100%",
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: "#1976d2",
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  

const Verify = () => {

    // const table = {
    //     alignItems: "center",
    //     display: "flex",
    //     flexDirection: "column",
    // }
  return (
    <div className="verify-page">

        <div className="verify-header">
            <h4>Email List Verification</h4>
            <div>Verify by UpLead provides real-time email verification and email</div>
            <div>cleansing as an add-on service. Please see pricing below</div>
        </div>

        <div className="d-flex justify-content-center">
            <div className="bill-pay">

                <div className="calculate-cost">
                    <h4>Calculate Your Cost</h4>
                    <div>Enter your estimated number of emails:</div>
                    <NumberTextField
                        id="input-number"
                        variant="filled"
                        style={{ marginTop: 11 }}
                        type="number"
                        className="w-75 NumberTextField"
                    />
                </div>


                <div className="verify-table">
                    <div className="mb-4 plan-table-top">
                        <h4>Pay As you Go!</h4>
                        <table className="menu-table">
                            <tr className="menu-table-head">
                                <th>Emails</th>
                                <th>Price per Email</th>
                            </tr>
                            <tr>
                                <th>up to <strong>10,000</strong></th>
                                <th>$0.008</th>
                            </tr>
                            <tr>
                                <th>up to <strong>100,000</strong></th>
                                <th>$0.005</th>
                            </tr>
                            <tr>
                                <th>up to <strong>250,000</strong></th>
                                <th>$0.004</th>
                            </tr>
                            <tr>
                                <th>up to <strong>1000,0000</strong></th>
                                <th>$0.003</th>
                            </tr>
                        </table>
                        <div style={{marginTop:"5px"}}>The minimum total cost is $0.50</div>
                    </div>
                    <hr/>
                    <div className="plan-table-bottom">
                        <div>Over 1,000,000</div>
                        <div className="contact-us">Contact Us</div>
                    </div>
                </div>

            </div>
        
            <div className="upload-file">
                <h6><strong>Upload a file and start verifying your email list</strong></h6>
                <div className="icon"><CloudUploadIcon/></div>
                <div>Simple drag and drop CSV file or</div> 
                <div><span>browse</span> to upload your list</div>
                <p>Or</p>
                <input type="file" id="upload" hidden/>
                <label for="upload" className="chose-file">Upload File</label>
                {/* <RoundButton data="Upload File"></RoundButton> */}
            </div>

        </div>

    </div>
  );
};

export default Verify;
