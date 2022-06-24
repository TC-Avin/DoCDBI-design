import React, { useState } from 'react'
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import PopUpModel from "../../../componants/comman/PopUpModel"
import Tippy from '@tippyjs/react';
import { NotificationManager } from 'react-notifications';
import AddPopUpModel from '../../../componants/comman/AddPopUpModel';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DataTable from '../../../componants/comman/DataTable';
import { yellow } from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Download } from '@mui/icons-material';


function createData(ListId, ListName, Contacts, CreatedBy, UplaodDate, Action) {
    return { ListId, ListName, Contacts, CreatedBy, UplaodDate, Action};
  }
const rows = [
    createData('cat-111', "Jimmy", "+1-202-256-0151", "2022/03/06", "2022/03/09" ),
    createData('cat-112', "John", "+1-202-895-0117",  "2022/04/10", "2022/04/14" ),
    createData('cat-113', "sam", "+1-207-855-0144",  "2022/03/17", "2022/03/18" ),
    createData('cat-114', "lino", "+1-452-691-8442",  "2022/03/15", "2022/03/19" ),
    createData('cat-115', "Asher", "+1-302-545-0844",  "2022/03/15", "2022/03/20" ),
    createData('cat-116', "Akio", "+1-302-256-2584",  "2022/03/15", "2022/03/20" ),

    createData('cat-117', "Ezekiel", "+1-857-246-5933",  "2022/04/24", "2022/03/26" ),

    createData('cat-118', "Deshal", "+1-962-536-5635",  "2022/03/20", "2022/03/21" ),

    createData('cat-119', "Asher", "+1-526-265-8492",  "2022/03/05", "2022/03/19" ),

    createData('cat-120', "Alvis", "+1-236-238-7861",  "2022/03/10", "2022/03/21" ),

    createData('cat-121', "Faustus", "+1-459-592-5959",  "2022/04/05", "2022/03/12" ),

  ];
export const MyListTable = () => {
  const [set, setList] = useState(false);
  const [model, setmodel] = useState("");
  const [state, setstate] = useState(true);
  const [checkBoxColumn, setCheckBoxColumn] = useState(["_id", "contact_name", "title", "phone_number", "email", "address", "name", "Action"]);

  const columns = [
    { field: "_id", headerName: "ID", width: 50 },
    { field: "contact_name", headerName: "CONTACTS", width: 130 },
    { field: "title", headerName: "TITLE", width: 130 },
    { field: "phone_number", headerName: "PHONE", width: 130 },
    { field: "email", headerName: "EMAIL", width: 90 },
    { field: "address", headerName: "LOCATION", width: 220 },
    { field: "name", headerName: "INDUSTRY", width: 370 },
    { field: "action", headerName: "ACTIONS", width: 150 },
]

  const changetable = () => {
    setstate(false);
  }

  const openModel = (row)=>{
    setList({ListName:row.ListName, Contacts:row.Contacts})
  }
  const updatevalue = (e) => {
    let Obj = set
    Obj[e.target.name]=e.target.value
    setList({...Obj})
  }
  return (
    <div>{
      state ?
    <TableContainer >
      <div >
        {/* <div className='text-end m-2'><Button variant={"contained"} className='m-1 flex-1' onClick={()=>{setmodel(true)}}>Back</Button></div> */}
        <div className='text-end m-2'><Button variant={"contained"} className='m-1 flex-1' onClick={()=>{setList(true)}}>Add List</Button></div>
      </div>                 
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='bg-light'>
         
            <TableCell align="center">List Name</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">ACTION</TableCell>    

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ListId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell align="center" className="p-2"  >{row.ListName}</TableCell>
              <TableCell align="center"  className="p-2">{row.CreatedBy}</TableCell>
              <TableCell align="center"  className="p-2 icon-fill"><EditIcon  onClick={ ()=>{openModel(row)}} className='pointer edit-fill mx-2'/>
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
              <DeleteIcon className='pointer delete-fill'/></Tippy>
              <RemoveRedEyeIcon onClick={changetable} className="eye-Icon pointer mx-2"/>
              <Download className='pointer' />
              </TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>  
            <PopUpModel
                open={set}
                title={"Add List"}
                close={()=>{setList(false);}}
            >
              <div className=" w-100 d-flex flex-column mylist-Update">
                <div>
                    <TextField id="outlined-basic" size="small" value={set.ListName} className="user-input-fild w-100" label="Name" name='ListName' variant="outlined" onChange={updatevalue} />
                </div>
                
              </div>
              <div class="m-0 d-flex justify-content-end">
                <Button  variant="contained" className="m-2 p-2 mr-0" onClick={()=>{setList(false);NotificationManager.success("Data Updated")}}>Submit</Button>
              </div>
          </PopUpModel>
          <AddPopUpModel open={model} close={()=>{setmodel(false)}} title={"Add List"} buttonname={"Add List"} />

    </TableContainer>:
    <div>
      <div className='w-100 d-flex justify-content-between button-margin'>
       <div  className='m-1 justify-content-between ' onClick={()=>{
        setstate(true)
       }}><ArrowBackIcon className='mr-2'/>Back</div><div className='d-flex align-items-center'>Mylist/Jimmy</div>
      </div>
       <DataTable columns={columns} checkBoxColumn={checkBoxColumn} />
    </div>
    }
    </div>
  )
}
