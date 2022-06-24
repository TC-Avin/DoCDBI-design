import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData( SrNo,name, calories, fat, carbs, protein) {
    return { SrNo, name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData("1", 'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData("2", 'Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData("3", 'Eclair', 262, 16.0, 24, 6.0),
    createData("4", 'Cupcake', 305, 3.7, 67, 4.3),
    createData("5", 'Gingerbread', 356, 16.0, 49, 3.9),
  ];

const InvoiceTable = (props) => {
  return (
        <div>
            <div className=" w-100 d-flex flex-column mylist-Update">
             <div className='d-flex justify-content-between Invoice-box'>
              <div>Invoice</div>
              <div className='Invoice-font'>01/01/2018</div>
               <div className='d-flex'>Status:<div className='Invoice-font'>Pending</div></div>
             </div>
             <div className='d-flex justify-content-between mb-4'>
                <div className='invoice-copmponent'>
                 <div>From:</div>
                  <div className='Invoice-font'>Webz Poland</div>
                  <div>Madalinskiego 8,71-101 Szczecin, Poland </div>
                  <div>Email: info@webz.com.pl</div>
                 <div>Phone: +48 444 666 3333</div>
               </div>
               <div className='invoice-copmponent'>
                 <div>To:</div>
                 <div className='Invoice-font'>Bob Mart</div>
                 <div>Attn: Daniel Marek,43-190 Mikolow, Poland</div>
                 <div>Email: marek@daniel.com</div>
                 <div>Phone: +48 123 456 789</div>
               </div>
             </div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">#</TableCell>
                        <TableCell align="left">Item	</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Unit Cost&nbsp;(g)</TableCell>
                        <TableCell align="left">Qty&nbsp;(g)</TableCell>
                        <TableCell align="left">Total&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.SrNo}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.SrNo}
                          </TableCell>
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">{row.calories}</TableCell>
                          <TableCell align="left">{row.fat}</TableCell>
                          <TableCell align="left">{row.carbs}</TableCell>
                          <TableCell align="left">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className='w-100 justify-content-end'>
                <div className='d-flex justify-content-between Invoice-bill invoice-billing'>
                    <div className='mr-5 billing-font'>Subtotal</div>
                    <div className='justify-content-start'>$8.497,00</div>
                </div>
                <div className='d-flex justify-content-between Invoice-bill invoice-billing'>
                    <div className='mr-5 billing-font'>Discount (20%)</div>
                    <div>$1,699,40</div>
                </div>
                <div className='d-flex justify-content-between Invoice-bill invoice-billing'>
                    <div className='mr-5 billing-font'>VAT (10%)</div>
                    <div>$679,76</div>
                </div>
                <div className='d-flex justify-content-between Invoice-bill invoice-billing'>
                    <div className='mr-5 billing-font'>Total</div>
                    <div className='billing-font'>$7.477,36</div>
                </div>
                </div>
                
                
              </div>
              
          </div>  )
}

export default InvoiceTable