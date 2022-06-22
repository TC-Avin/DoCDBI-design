import React from 'react'
import PopUpModel from './PopUpModel';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CSVLink } from "react-csv";

export const DownloadPopUpModel = (props) => {

  const headers = [
    { label: "Contacts", key: "Contacts" },
    { label: "Title", key: "Title" },
    { label: "Phone", key: "Phone" },
    { label: "Email", key: "Email" },

    { label: "Location", key: "Location" },

    { label: "Industry", key: "Industry" },



  ];
  
  const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
  ];

  return (
    <PopUpModel
         open={props.open}
         title={props.title}
         close={props.close}
     >
        <div className=" mb-3">
             <p>{props.title}</p>
                <div>
                    <p className=' d-flex justify-content-start'>
                    <input type="radio" id="html" name="fav_language" value="HTML" className='m-1' /><h6>Specific # of leads</h6>
                    </p>
                    
                    <TextField id="outlined-basic" size="small" className="user-input-fild w-100" label="Name"  variant="outlined" />
                    <p className=' mt-3 d-flex justify-content-start'>
                    <input type="radio" id="html" name="fav_language" value="HTML" className='m-1' /><h6>Only selected leads</h6>
                    </p>
                    <p className=' d-flex justify-content-start'>
                    <input type="radio" id="html" name="fav_language" value="HTML" className='m-1' /><h6>All leads</h6>
                    </p>
                    
                    
                    
                </div>
        </div>
                <div class="m-0 ">
                  {console.log('props.rows', props.rows)}
                  <CSVLink data={props.rows} headers={headers} className="download-icon">
                    <Button  variant="contained" className="d-flex justify-content-center w-100 download-button border-radius: 20px" onClick={props.close}>{props.buttonname}</Button>
                  </CSVLink>
                </div>
    </PopUpModel>
  )
}
