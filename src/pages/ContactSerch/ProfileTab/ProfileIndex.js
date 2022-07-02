import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import UserDetail from "./ProfileComponants/UserDetail";
import VerifyManagement from "./ProfileComponants/Subscription";
import UserTAble from "../../../componants/comman/UserTAble";
import CreditRequestTable from "../../../componants/comman/CreditRequestTable";
import SubscripttionTable from "../../../componants/comman/SubscripttionTable";
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
import Company from "../Admin/Companies/Company";
import Invoice from "../../../componants/comman/Invoice";
import Leads from "../Admin/Companies/Leads";
import Categories from "../Admin/Companies/Categories"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditUser from "../Admin/Companies/EditUser";
import UserInfo from "../Admin/Companies/UserInfo";


const ProfileManagement = () => {
  const location = useLocation();
  const [title, setTitle] = useState(location.state||"User Details");
  const [addTeam, setaddTeam] = useState(false);
  const [sendRequest, setsendRequest] = useState(false);
  const [flag, setflag] = useState("admin");
  
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

  const Admin = [
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "User Details" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Subscription" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Companies" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Categories" },
    // { icon: <PersonIcon className="ml-3 mr-2" />, title: "Transactions" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Leads" }, 
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Activity Log" }, 
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Change Password" },
  ]

  const Companies = [
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "User info" },
    // { icon: <PersonIcon className="ml-3 mr-2" />, title: "Edit User" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Invoice" }, 
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Transactions" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Subscription" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Team Members" },
    { icon: <PersonIcon className="ml-3 mr-2" />, title: "Activity Log" }, 
  ]

  const dashboard = [
    { title: "User Details", component: <UserDetail setTitle={setTitle} flag={flag}/> },
    { title: "Subscription", component: ! ["admin","Companies"].includes(flag)?<VerifyManagement setTitle={setTitle} />:<SubscripttionTable setTitle={setTitle} />},
    { title: "Team Members", component: <UserTAble setaddTeam={setaddTeam} /> },
    { title: "Credit Request", component: <CreditRequestTable setsendRequest={setsendRequest}/> },
    { title: "Transactions", component: <Transactions setsendRequest={setsendRequest}/> },
    { title: "Change Password", component: <ChangePassword setsendRequest={setsendRequest}/> },
    { title: "Activity Log", component: <ActivityLog setsendRequest={setsendRequest}/> },
    { title: "Companies", component: <Company setsendRequest={setsendRequest} setflag={setflag} setTitle={setTitle}/> },
    { title: "Invoice", component: <Invoice setsendRequest={setsendRequest} /> },
    { title: "Leads", component: <Leads setsendRequest={setsendRequest}/> },
    { title: "Categories", component: <Categories setsendRequest={setsendRequest}/> },
    { title: "Edit User", component: <EditUser setsendRequest={setsendRequest} flag={flag}/> },
    { title: "User info", component: <UserInfo setsendRequest={setsendRequest} setTitle={setTitle}/> },   
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
          <div className="d-flex flex-column justify-content-between h-100"> 
          <div>
          {(flag=="admin"?Admin:flag=="Companies"?Companies:menu).map((data,i) => {
            return (
              <p
                className=  {`${title.toLocaleLowerCase().includes(data.title.toLocaleLowerCase())&&"selected-profile-tab  "} p-3 user-menu-list`}
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
          <div className="text w-100 text-start">
              {(flag=="Companies"?<a className='text-primary pointer '  onClick={()=>{setflag("admin");setTitle("Companies")}}><ArrowBackIcon className="mx-2"/>Back to Dashboard</a>:"")} 
          </div>
          </div>
        </div>

        <div className="user-detail-dashboard">

          {dashboard.map((value) => {
          
            return <>{title.toLocaleLowerCase().includes(value.title.toLocaleLowerCase()) ? value.component : ""}</>;
          })}
          <Addteam open={addTeam} close={ChangeHandle}></Addteam>
          <SendRequest open={sendRequest} close={ChangeRequest}></SendRequest>
        </div>
      </div>
    </div>
  );
};
export default ProfileManagement;
