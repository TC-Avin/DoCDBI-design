import React, {useState} from 'react'
import { Button } from '@mui/material'
import  {MyListTable}  from '../../MyList/MyListTable';
import CompanyTable from "../Companies/CompanyTable"
import AddCompany from './AddCompany';
import PopUpModel from '../../../../componants/comman/PopUpModel';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';



const Company = (props) => {

    const[titlebtn, settitlebtn] = useState("free user");
    const [model, setmodel] = useState(false);



  return (
    <div>
      <div className='btn-class'>
        <h4 class="pr-3 d-flex justify-content-between"><div class="p-2 profile-header">Companies</div><Button variant={"contained"} className='mt-2 button-custom' onClick={()=>{setmodel(true)}}>Add Company</Button></h4>
      </div>
      <div className='mt-1'>
     <div className='d-flex justify-content-end  pb-0 pt-0'>
        <div className='d-flex justify-content-end  pb-0 pt-0  hadbar-btn table-wrapper'>
            <Button  variant= {`${titlebtn=="free user" ?"contained":"outlined"}`} className='mx-0 flex-1 button-highlight ' onClick={()=>{settitlebtn("free user")}}>Free User</Button>
            <Button  variant= {`${titlebtn=="premium user" ?"contained":"outlined"}`} className='mx-0 flex-1 button-highlight' onClick={()=>{settitlebtn("premium user")}}>Premium User</Button>
            <Button  variant= {`${titlebtn=="personalized user" ?"contained":"outlined"}`} className='mx-0 flex-1 button-highlight' onClick={()=>{settitlebtn("personalized user")}}>Personalized User</Button>     
        </div>  
     </div>
     <div className='table-wrapper  card'>
      {
        "free user" == titlebtn &&<CompanyTable title={"Free User"} setflag={props.setflag} setTitle={props.setTitle}/>
      }
         {
        "premium user"==titlebtn &&<CompanyTable title={"Premium User"}/>
      }
         {
        "personalized user"==titlebtn &&<CompanyTable title={"Personalized User"}/>
      }
    
      </div>  
       
    
      <PopUpModel
          open={model}
          title={"Add Company Details"}
          close={()=>{setmodel(false);}}
          bodyClass={"AddCompany"}
      >
      <AddCompany open={model} close={()=>{setmodel(false)}} title={"Add Company Details"} buttonname={"Submit"} />
    </PopUpModel>
    <div className="Btn-style">
      {/* <a className='text-primary pointer' onClick={()=>{props.setflag("admin")}}>Back to Dashboard</a> */}
      {/* <Button variant='contained' onClick={()=>{props.setflag("admin")}} ><KeyboardBackspaceRoundedIcon /></Button> */}
    </div>
    </div>  
    </div>
    )
}

export default Company