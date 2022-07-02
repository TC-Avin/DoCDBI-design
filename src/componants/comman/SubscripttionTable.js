import React,{useState} from 'react';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';
import Tippy from '@tippyjs/react';
import PopUpModel from './PopUpModel';
import AddPackage from '../../pages/ContactSerch/AuthModule/AddPackage';


function createData(name,crete,update,price,duration,status,Action) {
    return { name,crete,update,price,duration,status,Action};
  }
const rows = [
    createData('Goldan','19/10/2022',"15/2/2022", "159$", "3 m","Approved","thrty"),
    createData('Silver','19/10/2022',"15/2/2022", "500$", "6 m","Approved"),
    createData('Platinium','19/10/2022',"15/2/2022", "900$", "1 y","Approved"),
  
  ];
const SubscripttionTable = (props) => {

  const [model, setmodel] =useState(false);

  return (
    <div> <div>
    <h4 class="pr-3  d-flex justify-content-between"><div class="p-2 profile-header">Subscription</div><Button className='mt-2 button-custom' variant="contained" onClick={()=>{setmodel(true)}}>Add Package</Button></h4>
    
  </div>
<TableContainer >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='bg-light'>
            <TableCell align="left">Package Name</TableCell>
            <TableCell align="center">Created Date</TableCell>
            <TableCell align="center">Updated Date</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Duration</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left" className="p-2">
                {row.name}
              </TableCell>
              <TableCell align="center" className="p-2"  >{row.crete}</TableCell>
              <TableCell align="center" className="p-2"  >{row.update}</TableCell>
              <TableCell align="center" className="p-2"  >{row.price}</TableCell>
              <TableCell align="center" className="p-2"  >{row.duration}</TableCell>
              <TableCell align="center"  className={`p-2 ${row.status=="Approved" && "text-success"} ${row.status=="Pending" && "text-warning" } ${row.status=="Denied" && "text-danger" }`}>{row.status}</TableCell>
              <TableCell align="center" className="p-2"  >
              <Tippy
                        content={
                          <div className="TippyAction bg-light  ">
                            <div className=" p-2 pointer hover-dropdown" onClick={()=>{
                              setmodel(true)
                            }}>
                              Edit
                            </div>
                            <div className=" p-2 pointer hover-dropdown">
                              Suspend
                            </div>
                          </div>
                        }
                        placement="bottom-end"
                        arrow={false}
                        offset={[15, 1]}
                        trigger="focusin"
                        interactive={true}
                     
                        // hideOnClick={true}
                      >
                        <MoreVertIcon className='pointer'></MoreVertIcon>
                      </Tippy>
                      </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <PopUpModel
          open={model}
          title={"Add Package"}
          close={()=>{setmodel(false);}}
          bodyClass={"AddCompany"}
        >
          <AddPackage open={model} close={()=>{setmodel(false)}} title={"Add Package"} />
        </PopUpModel>
      </Table>  
    </TableContainer> 
    </div>
      )
}

export default SubscripttionTable;