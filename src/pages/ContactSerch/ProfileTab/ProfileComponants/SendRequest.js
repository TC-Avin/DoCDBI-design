import React from "react";
import PopUpModel from "../../../../componants/comman/PopUpModel";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

const SendRequest = (props) => {
    return (
     <PopUpModel open={props.open} close={props.close} title="Send Credit Request">
         <div className="d-flex  addteam-wrapper flex-column">
         <div class="w-100 d-flex flex-column addteam-wrapper" >
            <div>
                <TextField id="outlined-basic" size="small" className="user-input-fild w-100" label="Enter No. of Credits"  variant="outlined" />
            </div>
         </div>
         <div class="m-0 d-flex justify-content-start">
            <Button  variant="contained" className="w-100 p-2">Send Request</Button>
         </div>
         </div>
     </PopUpModel>
    );
} 
export default SendRequest;
