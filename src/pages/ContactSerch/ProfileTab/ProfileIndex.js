import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import UserDetail from "./ProfileComponants/UserDetail";
import VerifyManagement from "./ProfileComponants/Subscription";
import UserTAble from "../../../componants/comman/UserTAble";
import CreditRequestTable from "../../../componants/comman/CreditRequestTable";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Button } from "@mui/material";
import PopUpModel from "../../../componants/comman/PopUpModel";
import Addteam from "./ProfileComponants/AddTeam";
import SendRequest from "./ProfileComponants/SendRequest";
import Transactions from "../../../componants/comman/Transactions"
import { useLocation} from 'react-router-dom';
import ChangePassword from "../../../componants/comman/ChangePassword";
import AddPackage from "../AuthModule/AddPackage"
import ActivityLog from "../ProfileTab/ProfileComponants/ActivityLog"


const ProfileManagement = () => {
  const location = useLocation();
  const [title, setTitle] = useState(location.state||"User Details");
  const [addTeam, setaddTeam] = useState(false);
  const [sendRequest, setsendRequest] = useState(false);

  const menu = [
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "User Details" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Subscription" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Team Members" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Credit Request" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Transactions" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Change Password" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Add Package" }, 
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Activity Log" }, 

  ];

  const dashboard = [
    { title: "User Details", component: <UserDetail setTitle={setTitle}/> },
    { title: "Subscription", component: <VerifyManagement /> },
    { title: "Team Members", component: <UserTAble setaddTeam={setaddTeam} /> },
    { title: "Credit Request", component: <CreditRequestTable setsendRequest={setsendRequest}/> },
    { title: "Transactions", component: <Transactions setsendRequest={setsendRequest}/> },
    { title: "Change Password", component: <ChangePassword setsendRequest={setsendRequest}/> },
    { title: "Add Package", component: <AddPackage setsendRequest={setsendRequest}/> },
    { title: "Activity Log", component: <ActivityLog setsendRequest={setsendRequest}/> },


  ];

  const handleClick = (title) => {
    setTitle(title);
  };

  const ChangeHandle = () => {
    setaddTeam(false);
  }
  const ChangeRequest = () => {
    setsendRequest(false);
  }

  return (
    <div className="profile-mange">
      <div className="profile-menu mb-4 mt-4">
        <span className="profile-redirect-link">Profile</span>
        <span>/</span>
        <span className="profile-redirect">{title}</span>
      </div>

      <div className="user-detail">
        <div className="user-detail-menu">
          {menu.map((data,i) => {
            return (
              <p
                className=  {`${title.toLocaleLowerCase()==data.title.toLocaleLowerCase()&&"selected-profile-tab  "} p-3 user-menu-list`}
                onClick={() => {
                  handleClick(data.title);
                }}
                key={i}
              >
                {data.icon}
                <span>{data.title}</span>
              </p>
            );
          })}
        </div>

        <div className="user-detail-dashboard">
      
          {dashboard.map((value) => {
            return <>{title.toLocaleLowerCase() === value.title.toLocaleLowerCase() ? value.component : ""}</>;
          })}
          <Addteam open={addTeam} close={ChangeHandle}></Addteam>
          <SendRequest open={sendRequest} close={ChangeRequest}></SendRequest>
          <></>
        </div>
      </div>
    </div>
  );
};
export default ProfileManagement;
