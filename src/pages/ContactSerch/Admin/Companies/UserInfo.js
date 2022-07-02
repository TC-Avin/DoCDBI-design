import React, { useState } from 'react'
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
import UserInfoDetails from './UserInfoDetail';
import PopUpModel from '../../../../componants/comman/PopUpModel';
import EditUser from './EditUser';



const UserInfo = (props) => {

    const navigate = useNavigate();
    const [model, setmodel] = useState(false);

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
    <div className=''>
        <div className='btn-class'> 
            <h4 class="pr-3 d-flex justify-content-between"><div class="p-2 profile-header">User Info</div><Button variant={"contained"} className='mt-2 button-custom' onClick={()=>setmodel(true)}>Edit User</Button></h4>
        </div>
        <UserInfoDetails/>

        <PopUpModel
          open={model}
          title={"Edit Detail"}
          close={()=>{setmodel(false);}}
          bodyClass={"AddCompany"}
        >
          <EditUser />
        </PopUpModel>

    </div>
  )
}

export default UserInfo