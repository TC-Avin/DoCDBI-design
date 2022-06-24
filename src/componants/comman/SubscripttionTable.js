import React from 'react';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';

function createData(name,crete,update,price,duration,status) {
    return { name,crete,update,price,duration,status};
  }
const rows = [
    createData('Goldan','19/10/2022',"15/2/2022", "159$", "3 m","Approved"),
    createData('Silver','19/10/2022',"15/2/2022", "500$", "6 m","Approved"),
    createData('Platinium','19/10/2022',"15/2/2022", "900$", "1 y","Approved"),
  
  ];
const SubscripttionTable = (props) => {

  return (
    <div> <div>
    <h4 class="pr-3  d-flex justify-content-between"><div class="p-2 profile-header">Subscription</div><Button className='mt-2' variant="contained" onClick={()=>{props.setTitle('Add Package')}}>Add Package</Button></h4>
    
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
              <TableCell align="center" className="p-2"  >{row.create}</TableCell>
              <TableCell align="center" className="p-2"  >{row.update}</TableCell>
              <TableCell align="center" className="p-2"  >{row.price}</TableCell>
              <TableCell align="center" className="p-2"  >{row.duration}</TableCell>
              <TableCell align="center"  className={`p-2 ${row.status=="Approved" && "text-success"} ${row.status=="Pending" && "text-warning" } ${row.status=="Denied" && "text-danger" }`}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>  
    </TableContainer> 
    </div>
      )
}

export default SubscripttionTable;