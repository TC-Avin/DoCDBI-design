import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import Tippy from '@tippyjs/react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NotificationManager } from 'react-notifications';
import AddPopUpModel from '../../../../componants/comman/AddPopUpModel';
import PopUpModel from '../../../../componants/comman/PopUpModel';
function createData(ListId, ListName,  CreatedBy,  Action) {
    return { ListId, ListName,  CreatedBy,  Action};
  }

const rows = [
    createData('cat-111', "Jimmy", "+1-202-256-0151", "2022/03/06", "2022/03/09" ),
    createData('cat-112', "John", "+1-202-895-0117",  "2022/04/10", "2022/04/14" ),
    createData('cat-113', "sam", "+1-207-855-0144",  "2022/03/17", "2022/03/18" ),
    createData('cat-114', "lino", "+1-452-691-8442",  "2022/03/15", "2022/03/19" ),


  ];

const Categories = () => {

    const [set, setList] = useState(false);
    const [model, setmodel] = useState("");
    const [state, setstate] = useState(true);


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
    <TableContainer >
    <div >
    <div className='btn-class'>
        <h4 class="pr-3 d-flex justify-content-between"><div class="p-2 profile-header">Categories</div><Button variant={"contained"} className='mt-2' onClick={()=>{setmodel(true)}}>Add Category</Button></h4>
    </div>
      {/* <div className='text-end m-2'><Button variant={"contained"} className='m-1 flex-1' onClick={()=>{setmodel(true)}}>Back</Button></div> */}
    </div>                 
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className='bg-light'>
       
          <TableCell align="center">Category ID</TableCell>
          <TableCell align="center">Category Name</TableCell>
          {/* <TableCell align="center">Contacts</TableCell>     */}
          <TableCell align="center">CREATED BY</TableCell>    
          {/* <TableCell align="center">UPLOAD DATE</TableCell>     */}
          <TableCell align="center">ACTION</TableCell>    

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.ListId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" className="p-2"  >{row.ListId}</TableCell>
            <TableCell align="center" className="p-2"  >{row.ListName}</TableCell>
            {/* <TableCell align="center" className="p-2"  >{row.Contacts}</TableCell> */}
            <TableCell align="center" className="p-2"  >{row.CreatedBy}</TableCell>
            {/* <TableCell align="center"  className="p-2">{row.UplaodDate}</TableCell> */}
            <TableCell align="center"  className="p-2 icon-fill">
              <EditIcon  onClick={ ()=>{openModel(row)}} className='pointer edit-fill mx-2'/>
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
            {/* <RemoveRedEyeIcon onClick={changetable} className="eye-Icon pointer mx-2"/> */}
            </TableCell>

            
          </TableRow>
        ))}
      </TableBody>
    </Table>  
          <PopUpModel
              open={set}
              title={"Category Name"}
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
        <AddPopUpModel open={model} close={()=>{setmodel(false)}} title={"Add Category"} buttonname={"Add Category"} />

  </TableContainer>
  )
}

export default Categories