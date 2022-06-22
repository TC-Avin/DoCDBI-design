import React, { useState, useEffect } from "react";
import CommanPopUp from "./CommanPopUp";
import DropDownWithTreeCheckBox from '../../../componants/comman/DropDownWIthTreeCheckBox'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DropdownCheckbox from "../../../componants/comman/DropdownCheckbox"
import Searchbar from "../../../componants/comman/Searchbar"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { sticky } from "tippy.js";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Button } from "@mui/material";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const IndustryTitleLocationType = (props) => {
  const [model, setmodel] = useState("");
  const [filter , setFilter]=useState("");
  const [open, setOpen] = useState(false);
  const [Done,setDone]=useState(false)
  const [showPopover,setShowPopover] =useState(false);

  const handleOpen = (value) => {
    setOpen(true);
    setFilter(value);
    setShowPopover(true)
  };
  const handleClose = () => {
    setOpen(false);
    setFilter("")
  };
                   

  useEffect(() => {
    console.log('propsprops', props)
    const industry = [
      { title: "By Industry Category" ,compo:<DropDownWithTreeCheckBox setDone={setDone} setContext={props.setfilterContext}  />},
      { title: "Search by Industry Name",compo:<Searchbar setDone={setDone}/> },
      { title: "SIC Code" ,compo:<DropdownCheckbox setDone={setDone} setContext={props.setfilterContext} title={"SIC Code"}/>},
      { title: "NAICS Code" ,compo:<DropdownCheckbox setDone={setDone} setContext={props.setfilterContext} title={"NAICS Code"}/> },
    ];
    const title = [
      { title: "Search By Job Title" },
      { title: "By Job Function" },
      { title: "By Management Level" },
    ];
    const location = [
      { title: "By Country" },
      { title: "By Region" },
      { title: "By State" },
      { title: "By Metro Area" },
      { title: "By City" },
      { title: "By Zip Code" },
    ];
    const type = [
      {title:"By Type"},
      {title:"By Fortune Ranking"},
      {title:"By Alexa Ranking"},

    ]
    const other = [
      { title: "Presence of Social Links" },
      { title: "Year Founded" },
    ];
    const exclusions = [
      { title: "Exclude by Keyword" },
      { title: "Exclude EU Contacts & Companies" },
      { title: "Upload a List" },
      { title: "Select From My List" },
      { title: "Exclude From Previous Downloads" },
    ];

    if (props.type === "industry") setmodel(industry);
    if (props.type === "title") setmodel(title);
    if (props.type === "location") setmodel(location);
    if (props.type === "other") setmodel(other);
    if (props.type === "exclusions") setmodel(exclusions);
    if(props.type==="type") setmodel(type)
    return () => {
      setmodel("");
    }
  }, [props.type]);





  

  return (
    <>
        {model.length ? model.map((data,i) => {
          return (
              <div  key={i}>
              <Tippy
              
                content={
                  <CommanPopUp dropTitle={filter} DoneTitle={handleClose} className={`${data.title.includes("Code") && "custom-height"}`}>

                    <div className="text-primary mb-3 title-text"><ArrowBackIosIcon style={{width:"20px",height:"20px"}} onClick={handleClose}/>{data.title}</div>
                    {data.compo}
                  </CommanPopUp>
                  }
                  // {...defaultTippyProps}

                  placement='right-start'
                  // trigger='click'
                  offset={[0, 10]}
                  className="Tippy"
                  interactive={ true}
                    // hideOnClick={true}
                //   trigger="manual"
                //   offset={[0, 10]}
                //   className="Tippy"
                //   interactive={ true}
                    // hideOnClick={true}
                   visible={filter==data.title}

              >
                <div className="px-2 d-flex flex-row justify-content-between drop-down" onClick={()=>{ handleOpen(data.title) }}>
                <div className="drop-down-list" >{data.title}</div>
                  <div className="mr-3 arrow-left"><ArrowForwardIosRoundedIcon className="left-arrow-icon"/></div>
                </div>
              </Tippy>
              </div>
            )
        }):""}
    </>
  );
};

export default IndustryTitleLocationType;
