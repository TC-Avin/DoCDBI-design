import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import NotificationManager from 'react-notifications/lib/NotificationManager';


export const CheckoutForm = (props) => {
    console.log('props.modelData', props.modelData)
  return (<div className='d-flex flex-row w-100'>
            <div className=" mb-0 d-flex flex-column Checkout-gap w-100 justify-content-around">
                <div>
                    <TextField id="outlined-basic" size="small" className="user-input-fild w-100" label="Name On Card"  variant="outlined" />
                </div>
                <div>
                    <TextField id="outlined-basic" size="small" className="user-input-fild w-100" label="Card Number"  variant="outlined" />
                </div>
                <div className='d-flex justify-content-between checkout-gap'>
                    <TextField id="outlined-basic" size="small" className="user-input-fild w-100 " label="MM/YY"  variant="outlined" />
                    <TextField id="outlined-basic" size="small" className="user-input-fild w-100 " label="CVV"  variant="outlined" />                   
                </div>
                <div>
                    <TextField id="outlined-basic" size="small" className="user-input-fild w-100 " label="Address"  variant="outlined" />
                </div>
                <div className='d-flex justify-content-between checkout-gap'>
                    <TextField id="outlined-basic" size="small" className="user-input-fild w-100 " label="City"  variant="outlined" />
                    <TextField id="outlined-basic" size="small" className="user-input-fild w-100" label="State"  variant="outlined" />   
                </div>
                <div>
                    <TextField id="outlined-basic" size="small" className="user-input-fild w-100 " label="Zip-Code"  variant="outlined" />
                </div>
                <div>
                <div className='justify-content-between'>
                        <div >
                            <h6 className="billing-upgrade">${props.modelData.amount}/month</h6> 
                         </div>  
                        <div>
                            <h6 className="billing-upgrade">{props.modelData.credits} Credits <span>Anually</span></h6>
                        </div>
                    </div>
                </div>
                
                <div class="m-0 d-flex justify-content-end">
                     <Button  variant="contained" className="d-flex justify-content-center w-100" onClick={()=>{
                        props.setCheckOutModel("");NotificationManager.sucess("Paid Sucessfully")
                     }}>Submit</Button>
                 </div>
            </div>
            </div>
                        
  )
}