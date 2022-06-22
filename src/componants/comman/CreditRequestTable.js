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

function createData(credit, required, Status) {
    return { credit, required, Status};
  }
const rows = [
    createData('Frozen yoghurt', 159, "Approved"),
    createData('Ice cream sandwich', 237, "Pending"),
    createData('Eclair', 262,  "Denied"),
    createData('Cupcake', 305, "Approved"),
    createData('Gingerbread', 356, "Pending"),
  ];
const CreditRequestTable = (props) => {

  return (
    <div> <div>
    <h4 class="pr-3  d-flex justify-content-between"><div class="p-2 profile-header">Request</div><Button className='mt-2' variant="contained" onClick={()=>{props.setsendRequest(true)}}>Request Credits</Button></h4>
    
  </div>
<TableContainer >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='bg-light'>
            <TableCell align="left">No. of Credits</TableCell>
            <TableCell align="center">Date of Req.</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.credit}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left" className="p-2">
                {row.credit}
              </TableCell>
              <TableCell align="center" className="p-2"  >{row.required}</TableCell>
              <TableCell align="center"  className={`p-2 ${row.Status=="Approved" && "text-success"} ${row.Status=="Pending" && "text-warning" } ${row.Status=="Denied" && "text-danger" }`}>{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>  
    </TableContainer> 
    </div>
      )
}

export default CreditRequestTable;