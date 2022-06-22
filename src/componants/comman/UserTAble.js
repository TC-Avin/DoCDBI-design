import React, { useState ,useEffect} from 'react';
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
import { Edit } from '@mui/icons-material';
import PopUpModel from '../comman/PopUpModel';
import TextField from '@mui/material/TextField';
import {NotificationManager} from 'react-notifications';
import { AuthContext } from "../Context/AuthContext";
import { GET_ALL_TEAM_MEMBERS } from "../Context/Types";
import { useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';




function createData(name, credits, expiration, creation,id) {
    return { name, credits, expiration, creation,id };
  }
const rows = [
    createData('William Jon', 245, "22 May", "22 April",1),
    createData('William Jon', 245, "22 May", "22 April",2),
    createData('William Jon', 245, "22 May", "22 April",3),
    createData('William Jon', 245, "22 May", "22 April",4),
    createData('William Jon', 245, "22 May", "22 April",5),
  ];
const UserTAble = (props) => {
  const { dispatch } = useContext(AuthContext);

  const [members, setMembers] = useState();

  const getTeamMembers = () => {
    dispatch({ type: GET_ALL_TEAM_MEMBERS, upDateState: setMembers });
  };

  useEffect(() => {
    getTeamMembers();
  }, []);

  const[updatemember, setupdatemember] = useState(false);
  const[Suspend, setSuspend] = useState(false);
  const [id,setId]=useState("")

  const openModel = (row)=>{
    setupdatemember({name:row.name})
  }
  const openSuspendModel = (row)=>{
    setSuspend({name:row.name})
  }

  const updatevalue = (e) => {
    let Obj = updatemember
    Obj[e.target.name]=e.target.value
    setupdatemember({...Obj})
  }

  return (
    <div>
      {" "}
      <div>
        <h4 class="pr-3 d-flex justify-content-between">
          <div class="p-2 profile-header">
            Team Members
          </div>
          
          <Button
            variant="contained"
            className='mt-2'
            onClick={() => {
              props.setaddTeam(true);
            }}
          >
            <AddRoundedIcon />
            &nbsp;Add
          </Button>
        </h4>
      </div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-light">
              <TableCell className="fw-bold" align="center">
                Name
              </TableCell>
              <TableCell align="center" className="fw-bold">
                Avbl.Credits
              </TableCell>
              <TableCell align="center" className="fw-bold">
                Expiration
              </TableCell>
              <TableCell align="center" className="fw-bold">
                Date of Creation
              </TableCell>
              <TableCell align="center" className="fw-bold">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members ? (
              members.map((row) => {
                return (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className="p-2"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="center" className="p-2">
                      {row.credits}
                    </TableCell>
                    <TableCell align="center" className="p-2">
                      {/* {row.expiration} */}
                    </TableCell>
                    <TableCell align="center" className="p-2">
                      {/* {row.creation} */}
                    </TableCell>
                    <TableCell align="center" className="p-2 dropdown-team ">
                      {/* {row.action} */}
                      <Tippy
                        content={
                          <div className="TippyAction bg-light  ">
                            <div className=" p-2 pointer hover-dropdown">
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
                        trigger="click"
                        interactive={true}
                        // hideOnClick={true}
                      >
                        <MoreVertIcon></MoreVertIcon>
                      </Tippy>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <div style={{ transform: "translate(300%,0.5rem)" }}>
                <CircularProgress sx={{ fontSize: "0.2rem", color: "black" }} />
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTAble;
