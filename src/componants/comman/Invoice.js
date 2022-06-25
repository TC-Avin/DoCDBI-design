import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import { Button } from '@mui/material';
import PopUpModel from './PopUpModel';
import FlageButton from './FlageButton';
import Tippy from '@tippyjs/react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InvoiceTable from './InvoiceTable';
import UserInfoDetails from '../../pages/ContactSerch/Admin/Companies/UserInfoDetail';



const Invoice = (props) => {

    const navigate = useNavigate();


    const [SubscriptionType, setsubscriptiontype] = useState("");
    const [model, setmodel] = useState(false);
    const [ userDetail ,setUserDetail]= useState(false)

    useEffect(() => {
        setsubscriptiontype(props.title)
    }, [props.title])

    function createData(UserName, BillingType, Date, Amt , Status, View, Action) {
        return {UserName, BillingType, Date, Amt , Status, View, Action};
      }

    const rows = [
        createData('Yonna', "Subscription", "Oct 24th, 2020", "52638", "Paid" ),
        createData('Yonna', "Credit", "Oct 24th, 2020", "52638", "UnPaid"  ),
        createData('Yonna', "Team Member", "Oct 24th, 2020", "52638", "Paid" ),
        createData('Yonna', "Team Member", "Oct 24th, 2020", "52638", "UnPaid" ),
    ]
  return (
    <div>
      <div className='btn-class'> 
        <h4 class="pr-3 d-flex justify-content-between"><div class="p-2 profile-header">Invoice</div><Button variant={"contained"} className='mt-2' onClick={()=>{props.setTitle("Edit User")}}>Upload Invoice</Button></h4>
      </div>
    
    <TableContainer >

    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='bg-light'>
            <TableCell align="center">User Name</TableCell>
            <TableCell align="center">Billing Type</TableCell>
            <TableCell align="center">Date</TableCell>    
            <TableCell align="center">Amt</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">View</TableCell>
            <TableCell align="center">Action</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ListId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="center" className="p-2 ">
                <a href='#' onClick={()=>{setUserDetail(true)}}>{row.UserName}</a></TableCell>
              <TableCell align="center"  className="p-2">{row.BillingType}</TableCell>
              <TableCell align="center"  className="p-2">{row.Date}</TableCell>
              <TableCell align="center"  className="p-2">{row.Amt}</TableCell>
              <TableCell align="center"  className="p-2 d-flex justify-content-center">{<FlageButton color={row.Status=="Paid"?"green":"red"} title={row.Status}/>}</TableCell>
              <TableCell align="center"  className="p-2"><a className='text-primary pointer' onClick={()=>{setmodel(true)}}>View Invoice</a></TableCell>
              <TableCell align="center"  className="p-2 dropdown-team"><Tippy
                        content={
                          <div className="TippyAction bg-light  ">
                            <div className=" p-2 pointer hover-dropdown">
                              Mark as paid
                            </div>
                            <div className=" p-2 pointer hover-dropdown">
                              Download
                            </div>
                          </div>
                        }
                        placement="bottom-end"
                        arrow={false}
                        offset={[15, 1]}
                        trigger="click"
                        interactive={true}
                        // hideOnClick={true}
                      >
                        <MoreHorizIcon className='pointer'/>
                     </Tippy>
                     </TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>  
      
    <PopUpModel
                open={model}
                title={"Invoice"}
                close={()=>{setmodel(false);}}
                bodyClass={"Invoice-model"}
            >
              <InvoiceTable open={model} titl={Invoice} close={()=>{setmodel(false)}} bodyClass={"Invoice-model"}/>
              
          </PopUpModel>
          <PopUpModel
                open={userDetail}
                title={"User Details"}
                close={()=>{setUserDetail(false);}}
                bodyClass={"Invoice-model"}
            >
<UserInfoDetails title={true}/>              
          </PopUpModel>
    </TableContainer>
    </div>  )
}

export default Invoice