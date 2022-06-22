import React, {useState} from 'react'
import { Button } from '@mui/material'
import  {MyListTable}  from '../../MyList/MyListTable';
import CompanyTable from "../Companies/CompanyTable"


const Company = () => {

    const[titlebtn, settitlebtn] = useState("free user");


  return (
    <div className='mt-3'>
     <div className='d-flex justify-content-end  pb-0 pt-0'>
        <div className='d-flex justify-content-end  pb-0 pt-0  hadbar-btn table-wrapper'>
            <Button  variant= {`${titlebtn=="free user" ?"contained":"outlined"}`} className='mx-0 flex-1 button-highlight' onClick={()=>{settitlebtn("free user")}}>Free User</Button>
            <Button  variant= {`${titlebtn=="premium user" ?"contained":"outlined"}`} className='mx-0 flex-1 button-highlight' onClick={()=>{settitlebtn("premium user")}}>Premium User</Button>
            <Button  variant= {`${titlebtn=="personalized user" ?"contained":"outlined"}`} className='mx-0 flex-1 button-highlight' onClick={()=>{settitlebtn("personalized user")}}>Personalized User</Button>     
        </div>  
     </div>
     <div className='table-wrapper  card'>
      {
        "free user" == titlebtn &&<CompanyTable title={"Free User"}/>
      }
         {
        "premium user"==titlebtn &&<CompanyTable title={"Premium User"}/>
      }
         {
        "personalized user"==titlebtn &&<CompanyTable title={"Personalized User"}/>
      }
    
        </div>   
    </div>
    )
}

export default Company