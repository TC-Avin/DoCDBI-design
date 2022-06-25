import React from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import { Button } from '@mui/material';


const UserInfoDetails = (props) => {

    const navigate = useNavigate();

    function createData(User, Details) {
        return { User, Details };
      }

    const rows = [
        createData('Email', "user@gmail.com"),
        createData('Login IP', "150.152.15.2"),
        createData('Available Credits', "650"),
        createData('Subscription Expire', "24th oct 2022"),
        createData('Team Members', "5"),
        createData('Billing Cycle', "Monthly"),
        createData('Subscription name', "Gold"),
      ]
  return (
  
        <div className='p-3'>
            { <div className='w-100 p-3 bg-blue text-white text-center'>Sam Manish</div>}
        <TableContainer className='border p-3 '>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow   >
                
                    <TableCell align="left" className='p-2'>{row.User}</TableCell>
                    <TableCell align="right" className='p-2'>{row.Details}</TableCell>
                
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default UserInfoDetails