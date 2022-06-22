  import React, { Component } from "react";
  import FactoryIcon from "@mui/icons-material/Factory";
  import WorkIcon from "@mui/icons-material/Work";
  import AddLocationIcon from "@mui/icons-material/AddLocation";
  import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
  import BadgeIcon from "@mui/icons-material/Badge";
  import LinkIcon from "@mui/icons-material/Link";
  import Drawer from "react-modern-drawer";
  import "react-modern-drawer/dist/index.css";
  import UnderContruction from '../../componants/comman/UnderContruction';
  import { Card } from "@mui/material";
  import { Tooltip } from 'react-tippy';
  import IndustryTitleLocationType from "./filterCompo/IndustryTitleLocationType";
  import SalesAndEmployee from "./filterCompo/SalesAndEmployee";
  import CompanyUrl from "./filterCompo/CompanyUrl";
  import Technologies from "./filterCompo/Technologies";
  import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
  import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
  import { Fab, Action } from 'react-tiny-fab';
  import 'react-tiny-fab/dist/styles.css';
  import Button from '@mui/material/Button';
import CommanPopUp from "./filterCompo/CommanPopUp";
import Tippy from "@tippyjs/react";
import { FilterListOutlined } from "@mui/icons-material";
import { MainContext } from "../../componants/filterContext/FIlterContext";
  class Filter extends Component {
    static contextType = MainContext;

    constructor(props) {
      super(props);
      this.state = {
        open: true,
        firstTooltip:["Revenue","Employees","URL","Technologies"]
      };
    }
    

    componentDidMount = () => {
      
      const context = this.context;
      const {filterContext,setfilterContext} = this.context
      const filter = [
        { icon: <FactoryIcon />, title: "Industry",model:<IndustryTitleLocationType type="industry" context={filterContext} setContext={setfilterContext}/> },
        { icon: <WorkIcon />, title: "Title", model:<IndustryTitleLocationType type="title"  context={filterContext} setContext={setfilterContext} />},
        { icon: <AddLocationIcon />, title: "Location",model:<IndustryTitleLocationType  type="location"  context={filterContext} setContext={setfilterContext} /> },
        { icon: <CurrencyRupeeIcon />, title: "Revenue",model:<SalesAndEmployee   context={filterContext} setContext={setfilterContext} /> },
        { icon: <BadgeIcon />, title: "Employees" ,model:<SalesAndEmployee  context={filterContext} setContext={setfilterContext}/> },
        { icon: <FactoryIcon />, title: "Type",model:<IndustryTitleLocationType  type="type"  context={filterContext} setContext={setfilterContext}/>  },
        { icon: <LinkIcon />, title: "URL",model:<CompanyUrl  context={filterContext} setContext={setfilterContext}/>  },
        { icon: <FactoryIcon />, title: "Technologies",model:<Technologies  context={filterContext} setContext={setfilterContext}/>  },
        { icon: <FactoryIcon />, title: "Other" ,model:<IndustryTitleLocationType type="other"  context={filterContext} setContext={setfilterContext} />},
        { icon: <FactoryIcon />, title: "Exclusions" ,model:<IndustryTitleLocationType  context={filterContext} setContext={setfilterContext}/> },
      ];

      this.setState({ filter: filter });
    };

    openSubModel=(title)=>{
      if(this.state.selectedFilter==title){ this.setState({ selectedFilter:""  });}else{
        this.setState({ selectedFilter: title });}
      }
    render() {
      const { open, filter,selectedFilter,firstTooltip } = this.state;
      const style = {
        bottom: "1",
        right: "1",
      }

      const {filterContext,setfilterContext} = this.context

      return (
      <>
        <div className="contact-search d-flex  " style={{zIndex:9999}}><div style={{zIndex:999}}>
            <div
              direction="left-end"
              className={`${this.props.hideShow ? "hide-side" :"sidebar-wrapper"} bla bla bla `}
              // enableOverlay="false"
            >
              <Button
            variant="contained"
            style={{width:`${ !this.props.hideShow? "220px":""}`}}
            className={`header-menu top-bar-button pl-4  justify-content-start d-flex position-relative `}
            onClick={(e) => {
              this.props.hideShowClick()     
              e.stopPropagation();

              }}
          ><FilterListOutlined />{!this.props.hideShow &&<div className="ml-3"> filter</div>}</Button>
          <div>
              {filter &&
                filter.map((data,i) => {
                  return (
                    <Tippy
                     content={
                        <CommanPopUp context={filterContext} setContext={setfilterContext}  DoneTitle={()=>{this.setState({ selectedFilter: "" });}}>{data.model}</CommanPopUp>
                      }
                      visible={data.title==selectedFilter && firstTooltip.includes(data.title) ? true : false}
                      // hideOnClick={true}
                      interactive={ true}
                      className="Tippy"
                      placement='right-start'
                      // trigger='click'
                      offset={[0, 10]}
                      // hideOnClick="toggle"
                      key ={i}
                    >
                    <div>
                    <div className={`d-flex flex-row drop-down-menu p-2 m-2 drop-down ${data.title==selectedFilter && "active-filter"}`} onClick={()=>{ 
                      if(this.props.hideShow){
                         this.props.hideShowClick()
                      }
                       this.openSubModel(data.title) ;}}>
                      <div className="p-1 mr-3">{data.icon}</div>
                      <div className={`${this.props.hideShow&&"d-none"}`}>{data.title}</div>
                      <div className={`${data.title==selectedFilter && "round_btn"}`}>{data.title==selectedFilter && !this.props.hideShow && <CircleRoundedIcon className="circle-icon mt-1 mx-2"/>}</div>
                      <div className={data.title==selectedFilter && "arrow-bottom"}>{data.title==selectedFilter && !this.props.hideShow &&<KeyboardArrowDownRoundedIcon className="bottom-arrow-icon"/>}</div>
                    </div>
                    {!firstTooltip.includes(data.title)&& <div className="ml-4 mr-2 text-start drop-down-list" >{selectedFilter == data.title && !this.props.hideShow ? data.model:""}</div>}
                    </div>
                 </Tippy>
                  );
                })}
                </div>
            </div>
            </div>
          <div className="main-wrapper">
            {this.props.children}
          </div>
        </div>  
      </>
      );
    }
  }

  export default Filter;
