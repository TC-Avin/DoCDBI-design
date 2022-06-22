import React,{useState,useEffect} from 'react'
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Download from '@mui/icons-material/Download';
import Pagination from '@mui/material/Pagination';
import Tippy from '@tippyjs/react';

const Transactions = () => {
  const [Rows, setRows] = useState("")


    const rows = [
        createData(1, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(2, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(3, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(4, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(5, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(6, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(7, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(8, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(9, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(10, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(11, "Abc", 12345, 56454, "22May", "online", "Approved"),
        createData(12, "Abc", 12345, 56454, "22May", "online", "Approved"),
      ];
      useEffect(() => {
        let newRow = rows.slice(0,7)      
        setRows(newRow)
      }, [])
      
      function createData(Sno, ItemName, OrderID, TxnID, DateTime, PaymentMode, Status) {
        return { Sno, ItemName, OrderID, TxnID, DateTime, PaymentMode, Status};
      }

      const paginate = (d)=>{
       let newRow = rows.slice((d-1)*7,(d)*7)      
       setRows(newRow)
      }

  return (
    <div className='transection-pegination'> 
        <div><div>
    <h4 class="pr-3 d-flex justify-content-between"><div class="p-2 profile-header">Transactions</div></h4>
  </div>

<TableContainer >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='bg-light'>
            <TableCell align="center">S.no</TableCell>
            <TableCell align="center">Item Name</TableCell>
            <TableCell align="center">Order ID</TableCell>
            <TableCell align="center">Txn ID</TableCell>
            <TableCell align="center">Date/Time</TableCell>
            <TableCell align="center">Payment Mode</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {Rows.length &&  Rows.map((row) => (
            <TableRow
              key={row.Sno}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center" className="p-2">
                {row.Sno}
              </TableCell>
              <TableCell align="center" className="p-2"  >{row.ItemName}</TableCell>
              <TableCell align="center" className="p-2"  >{row.OrderID}</TableCell>
              <TableCell align="center" className="p-2"  >{row.TxnID}</TableCell>
              <TableCell align="center" className="p-2"  >{row.DateTime}</TableCell>
              <TableCell align="center" className="p-2"  >{row.PaymentMode}</TableCell>
              <TableCell align="center"  className={`p-2 ${row.Status=="Approved" && "text-success"} ${row.Status=="Pending" && "text-warning" } ${row.Status=="Denied" && "text-danger" }`}>{row.Status}</TableCell>
              <TableCell align="center" className="p-2"  >
         
                <Tippy
                        content={
                          <div className="   ">
                            Download Invoice
                          </div>
                        }
                         placement="auto"
                        arrow={false}
                        trigger="mouseenter"
                        interactive={true}
                        // hideOnClick={true}
                      >
                      <Download className="pointer"/>
                      </Tippy>
                </TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>  
    
    </TableContainer> 
    </div>
    <p className='text-end'>  <Pagination className='pagination' count={Math.ceil(rows.length/7)} onChange={(e,page)=>{
      paginate(page)
    }} color="primary" /></p>

    </div>

  )
}

export default Transactions