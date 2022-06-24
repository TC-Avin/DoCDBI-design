import { Button } from '@mui/material'
import React, { useState } from 'react'
import { MyListTable } from '../MyList/MyListTable'
import AddIcon from '@mui/icons-material/Add';
import PopUpModel from "./../../../componants/comman/PopUpModel";
import AddPopUpModel from "../../../componants/comman/AddPopUpModel"
import { NotificationManager } from 'react-notifications';

import Downloads from './MyListCompo/Downloads';
import { Download } from '@mui/icons-material';
import CSVs from './MyListCompo/CSVs';
import SaveSearch from './MyListCompo/SaveSearch';
import Unlocks from './MyListCompo/Unlocks';
const MyList = () => {
    // const [model, setmodel] = useState("");
    const[titlebtn, settitlebtn] =useState("");

    // const handlemodel = () => {
    //     setmodel("");
    // }
  return (
      <div className='mt-3'>
          <div className='d-flex justify-content-end  pb-0 pt-0  hadbar-btn table-wrapper'>
              <Button variant={`${titlebtn=="" ?"contained":"outlined"}`} className='mx-0 button-highlight ' onClick={()=>{settitlebtn("")}}>List</Button>
              <Button  variant= {`${titlebtn=="download" ?"contained":"outlined"}`} className='mx-0 flex-1 button-highlight' onClick={()=>{settitlebtn("download")}}>Downloads</Button>
              <Button  variant= {`${titlebtn=="csvs" ?"contained":"outlined"}`} className='mx-0 flex-1 button-highlight' onClick={()=>{settitlebtn("csvs")}}>CSVs</Button>
              <Button  variant= {`${titlebtn=="savesearch" ?"contained":"outlined"}`} className='mx-0 flex-1 button-highlight' onClick={()=>{settitlebtn("savesearch")}}>Save Search</Button>
              {/* <Button  variant= {`${titlebtn=="unlocks" ?"contained":"outlined"}`} className='mx-0 flex-1 button-highlight' onClick={()=>{settitlebtn("unlocks")}}>Unlocks</Button> */}
          </div>
     <div className='table-wrapper  card'>
      {
        "download"==titlebtn &&<Downloads/>
      }
         {
        "csvs"==titlebtn &&<CSVs/>
      }
         {
        "savesearch"==titlebtn &&<SaveSearch/>
      }
         {
        "unlocks"==titlebtn &&<Unlocks/>
      }
      
     { ""==titlebtn &&<MyListTable />}
      
        </div>   
        {/* <AddPopUpModel open={model} close={()=>{setmodel(false);NotificationManager.success("List Added")}} title={"Add List"} buttonname={"Add List"} /> */}
      </div>
    
  )
}

export default MyList