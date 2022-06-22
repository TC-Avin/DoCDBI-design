import React, { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

const TopBar = (props) => {
    const [profile, setprofile] = useState(false)
    


    let role = "admin"
  const navigate = useNavigate();
  const user = [
    { icon: <AccountBalanceIcon />, title: "Home", link: "/home" },
    {
      icon: <PersonSearchIcon />,
      title: "Contact Search",
      link: "/contactsearch",
    },
    { icon: <FormatListBulletedIcon />, title: "My List", link: "/mylist" },
    // { icon: <SearchIcon />, title: "Look up", link: "/lookup" },
    // { icon: <CheckCircleOutlineIcon />, title: "Verify", link: "/verify" },
    { icon: <PersonIcon />, title: "Profile", link: "/profile" },
  ];

  const admin = [
    { icon: <AccountBalanceIcon />, title: "DashBoard", link: "/dashboard" },
    { icon: <PersonSearchIcon />, title: "Contact Search", link: "/contactsearch", },
    { icon: <FormatListBulletedIcon />, title: "My List", link: "/mylist" },
    // { icon: <SearchIcon />, title: "Verify", link: "/verify" },
    // { icon: <CheckCircleOutlineIcon />, title: "My List", link: "/verify" },
    { icon: <PersonIcon />, title: "Profile", link: "/profile" },
  ];

  return (
    <div className={`d-flex flex-row justify-content-between  top-bar-wrapper`}>
      {(role == "admin" ? admin : user ).map((data,i) => {
        if (data.title == "Profile") {
          return (
          
              <Button
                variant="contained"
                className={`header-menu top-bar-button position-relative ${role=="admin" && "bg-yellow"}`}
                onClick={() => {
                  role == "admin"  && setprofile(!profile)
                   role == "user" && navigate(data.link, { replace: true });
                //  navigate(data.link, { replace: true });
                  }}
                  key={i}
              >
                <div  className="d-flex" >
                  <div className="mx-1">{data.icon}</div>
                  <div className="mx-1">{data.title}</div>{" "}
                </div>
               {profile && <div className="position-absolute drop-profile">
                <div href="#" onClick={()=>{navigate('/profile')}}><span><PersonIcon/></span>Leads</div>
                <div href="#"  onClick={()=>{navigate('/profile')}}><span><PersonIcon/></span>Categories</div>
                <div href="#"  onClick={()=>{navigate('/company')}}><span><PersonIcon/></span>Companies</div>
                <div href="#"  onClick={()=>{navigate('/profile',{state:'subscription'})}}><span><PersonIcon/></span>Subscriptions</div>
              </div>} 
              </Button>
              
          
          );
        }else{
        return (
          <Button
            variant="contained"
            className={`header-menu top-bar-button p-2 ${role=="admin" && "bg-yellow"}`}
            onClick={() => {
                navigate(data.link, { replace: true });
            }}
            style={{width:`${data.title=="Filter"&&"220px"}`}}
            key={i}

          >
            <div className="mx-1">{data.icon}</div>
            <div className="mx-1">{data.title}</div>
          </Button>
        );}
      })}
    </div>
  );
};

export default TopBar;
