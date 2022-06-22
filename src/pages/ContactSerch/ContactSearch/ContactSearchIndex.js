import React, { Component } from "react";
import FactoryIcon from "@mui/icons-material/Factory";
import WorkIcon from "@mui/icons-material/Work";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BadgeIcon from "@mui/icons-material/Badge";
import LinkIcon from "@mui/icons-material/Link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import UnderContruction from '../../../componants/comman/UnderContruction';
import { Card } from "@mui/material";
import {
  Tooltip,
} from 'react-tippy';
import IndustryTitleLocationType from "../filterCompo/IndustryTitleLocationType";
import SalesAndEmployee from "../filterCompo/SalesAndEmployee";
import CompanyUrl from "../filterCompo/CompanyUrl";
import Technologies from "../filterCompo/Technologies";
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import ContactSearchManagement from "./ContactSearchManagement/ContactSearchManagement";
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';


import { FloatingButton, Item } from "react-floating-button";
import downloadIcon from "./assets/DOWNLOAD.svg";
import forwardIcon from "./assets/FORWARD.svg";


class ContactSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  componentDidMount = () => {
    const filter = [
      { icon: <FactoryIcon />, title: "Industry",model:<IndustryTitleLocationType type="industry"/> },
      { icon: <WorkIcon />, title: "Title", model:<IndustryTitleLocationType type="title"/>},
      { icon: <AddLocationIcon />, title: "Location",model:<IndustryTitleLocationType  type="location"/> },
      { icon: <CurrencyRupeeIcon />, title: "Revenue",model:<SalesAndEmployee /> },
      { icon: <BadgeIcon />, title: "Employees" ,model:<SalesAndEmployee/>},
      { icon: <FactoryIcon />, title: "Type",model:<IndustryTitleLocationType  type="type"/> },
      { icon: <LinkIcon />, title: "By Company URL",model:<CompanyUrl/> },
      { icon: <FactoryIcon />, title: "Technologies",model:<Technologies/> },
      { icon: <FactoryIcon />, title: "Other" ,model:<IndustryTitleLocationType type="other"/>},
      { icon: <FactoryIcon />, title: "Exclusions" ,model:<IndustryTitleLocationType/>},
    ];
    this.setState({ filter: filter });
  };

  openSubModel=(title)=>{
    if(this.state.selectedFilter==title){ this.setState({ selectedFilter:""  });}else{
       this.setState({ selectedFilter: title });}
    }
  render() {
    const { open, filter,selectedFilter } = this.state;
    const style = {
      bottom: "1",
      right: "1",
    }
    
    return (
    <>
      <div className="contact-search" style={{zIndex:999999}}>
          <div
            direction="left-end"
            className="bla bla bla sidebar-wrapper"
            // enableOverlay="false"
            style={{zIndex:999999}}
          >
            {filter &&
              filter.map((data) => {
                return (
                  // <Tooltip
                  //   html={(
                  //     data.model
                  //   )}
                  //   position="right"
                  //   open={data.title==selectedFilter}
                  
                  // >

                  <>
                  
                  <div className={`d-flex flex-row drop-down-menu p-2 m-2 drop-down ${data.title==selectedFilter && "active-filter"}`} onClick={()=>{this.openSubModel(data.title) ;}}>
                    <div className="p-1 mr-3">{data.icon}</div>
                    <div className=" p-1">{data.title}</div>
                    <div className={data.title==selectedFilter && "round_btn"}>{data.title==selectedFilter && <CircleRoundedIcon className="circle-icon"/>}</div>
                    <div className={data.title==selectedFilter && "arrow-bottom"}>{data.title==selectedFilter && <KeyboardArrowDownRoundedIcon className="bottom-arrow-icon"/>}</div>
                  </div>
                  <div className="ml-4 mr-2 text-start drop-down-list">{selectedFilter == data.title && data.model}</div>

                  </>

                  // </Tooltip>

                );
              })}{" "}
                  {/* <Button variant="contained" className="d-flex flex-row p-2 mb-3 ml-3 drop-down">Clear Search</Button> */}
                  {/* <a href="#"><CancelIcon/>Clear Search</a> */}
          </div>  
          <div className="contactManagement">
            <ContactSearchManagement/>
          </div>
      </div>  
    </>
    );
  }
}

export default ContactSearch;
