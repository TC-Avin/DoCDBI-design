import React, { useEffect, useState } from 'react'
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { NotificationManager } from 'react-notifications';
import Tippy from '@tippyjs/react';
import FlageButton from "../../../../componants/comman/FlageButton";
import PopUpModel from '../../../../componants/comman/PopUpModel';
import TextField from '@mui/material/TextField';
import AddCompany from './AddCompany';
import EditCompany from './EditCompany';



const CompanyTable = (props) => {

    const [SubscriptionType, setsubscriptiontype] = useState("");
    const [model, setmodel] = useState(false);
    const [List, setList] = useState(false);


    const openModel = (row)=>{
      setList({ListName:row.ListName, Contacts:row.Contacts})
    }

    const updatevalue = (e) => {

      let Obj = List;
      Obj[e.target.name] = e.target.value;
      setList({...Obj})
    }

    useEffect(() => {
        setsubscriptiontype(props.title)
    }, [props.title])

    function createData(User, Date, SubscriptionType, UserID, Status, Action) {
        return { User, Date, SubscriptionType, UserID, Status, Action};
      }

    const rows = [
        createData('Yonna', "Oct 24th, 2020", "Subscription Type", "DBI-1" ,"active"),
        createData('Yonna', "Oct 24th, 2020", "Subscription Type", "DBI-1" ,"failed" ),
        createData('Yonna', "Oct 24th, 2020", "Subscription Type", "DBI-1" ,"active" ),
        createData('Yonna', "Oct 24th, 2020", "Subscription Type", "DBI-1" ,"active" ),
        createData('Yonna', "Oct 24th, 2020", "Subscription Type", "DBI-1" ,"failed" ),
        createData('Yonna', "Oct 24th, 2020", "Subscription Type", "DBI-1" ,"active" ),
        createData('Yonna', "Oct 24th, 2020", "Subscription Type", "DBI-1"  ,"active"),
        createData('Yonna', "Oct 24th, 2020", "Subscription Type", "DBI-1" ,"active" ),
    ]
  return (
    <TableContainer >
                    <div className='text-end m-2'><Button variant={"contained"} className='m-1 flex-1' onClick={()=>{setmodel(true)}}>Add Company</Button></div>

    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='bg-light'>
         
            <TableCell align="center">User</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Subscription Type</TableCell>    
            <TableCell align="center">User ID</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">ACTION</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ListId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="center" className="p-2 ">
                <a href='#'>{row.User}</a></TableCell>
              <TableCell align="center"  className="p-2">{row.Date}</TableCell>
              <TableCell align="center"  className="p-2 d-flex justify-content-center">{<FlageButton color={""} title={SubscriptionType}/>}</TableCell>
              <TableCell align="center"  className="p-2">{row.UserID}</TableCell>
              <TableCell align="center"  className="p-2 d-flex justify-content-center">{<FlageButton color={row.status=="active"?"green":"red"} title={"Active"}/>}</TableCell>
              <TableCell align="center"  className="p-2"><EditIcon className='pointer'onClick={ ()=>{openModel(row)}}/>
              <Tippy
                content={
                  <div className='TippyAction bg-light '>
                    <div className=' p-2 pointer'>Are you sure you want to Delete.</div>
                    <div>
                      <Button variant="contained" className='m-2 bg-success' onClick={()=>{NotificationManager.error("Deleted")}}>Yes</Button>
                      <Button variant="contained" className='m-2 bg-danger'>No</Button>
                    </div>
                  </div>
                }
                  placement='bottom-end'
                  arrow={false}
                  offset={[15,1]}
                  trigger='click'
                  interactive={ true}
                  className='confirmation-model'
              >  
              <DeleteIcon className='pointer'/></Tippy></TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>  
      <PopUpModel
                open={model}
                title={"Add Company Details"}
                close={()=>{setmodel(false);}}
                bodyClass={"AddCompany"}
            >
              <AddCompany open={model} close={()=>{setmodel(false)}} title={"Add Company Details"} buttonname={"Submit"} />
              

    </PopUpModel>
    <PopUpModel
                open={List}
                title={"Edit Details"}
                close={()=>{setList(false);}}
            >
              <div className=" w-100 d-flex flex-column mylist-Update">
                <div>
                    <TextField id="outlined-basic" size="small" value={List.User} className="user-input-fild w-100" label="Name" name='ListName' variant="outlined" onChange={updatevalue} />
                </div>
                
              </div>
              <div class="m-0 d-flex justify-content-end">
                <Button  variant="contained" className="m-2 p-2 mr-0" onClick={()=>{setList(false);NotificationManager.success("Data Updated")}}>Save</Button>
              </div>
          </PopUpModel>
                {/* <EditCompany open={List} close={()=>{setList(false)}} title={"Edit Company Details"} buttonname={"Submit"} />  */}
    </TableContainer>
  )
}

export default CompanyTable