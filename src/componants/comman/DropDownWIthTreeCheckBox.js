import React, { useState, useEffect } from "react";
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CheckBox } from "@mui/icons-material";

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useContext } from "react";

import { MainContext } from "../filterContext/FIlterContext";
const DropDownWIthTreeCheckBox = (props) => {
  const [opened, setopened] = useState();
  const [checked, setchecked] = useState([]);
    const context=useContext(MainContext)
  const [expanded, setexpanded] = useState([]);

  const setFilter = (data)=>{
//    let newContext =[... context.filterContext]
//    let sedond = [...newContext]

//  newContext.length ?  newContext.map((d,i)=>{
//     console.log("🚀 ~ file: DropDownWIthTreeCheckBox.js ~ line 26 ~ newContext.map ~ d", d["ByIndustryCategory"].length)
//     if(d["ByIndustryCategory"].length){
//       sedond[i]["ByIndustryCategory"].push(data)
//     }else{
      
//       sedond.push({"ByIndustryCategory":data,"type":"industry"})
//       console.log("🚀 ~ file: DropDownWIthTreeCheckBox.js ~ line 31 ~ newContext.map ~ newContext", sedond)
//     }
//    }):      sedond.push({"By Industry Category":data,"type":"industry"})

   context.setContextData("industry","By Industry Category",data)

if(data.length){
  props.setDone(true)

}else{
  props.setDone(false)

}
    // context.setfilterContext(newContext)
    setchecked(data)

  }

  const sublist = [
    { label: "as" },
    { label: "sd" },
    { label: "fg" },
    { label: "hj" },
    { label: "kl" },
  ];

  const Agriculture = [
    { value:"Agriculture Production Livestock", label: "Agriculture Production Livestock",},
    { value:"Agricultural Services",label: "Agricultural Services",},
    { value:"Forestry",label: "Forestry",},
    {value:"Fishing, Hunting & Trapping", label: "Fishing, Hunting & Trapping",},
  ];

  const Mining = [
    { value:"Mining Production Livestock", label: "Mining Production Livestock",},
    { value:"Mining Services",label: "Mining Services",},
    { value:"Forestry Mining",label: "Forestry Mining",},
    {value:"Mining, Hunting & Trapping", label: "Mining, Hunting & Trapping",},
  ];
  const dropDownList =  [
    { value:"Agriculture", label: "Agriculture", children: Agriculture },
    { value:"Mining", label: "Mining", children: Mining },
  ];
  const setClick = (data) => {
    let updated = [...opened];
    if (opened.includes(data)) {
      updated = updated.filter((d) => d !== data);
    } else {
      updated.push(data);
    }
    setopened(updated);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  console.log("🚀 ~ file: DropDownWIthTreeCheckBox.js ~ line 23 ~ setFilter ~ data",props)

  return (
    <div open={true}>
      <div style={{ marginBottom: "10px" }}>

      <CheckboxTree
                nodes={dropDownList}
                checked={checked}
                expanded={expanded}
                onCheck={checked => {setFilter( checked )}}
                onExpand={expanded => {setexpanded(expanded )}}
                icons={{
                  check: <CheckBoxIcon/>,
                  uncheck:  <CheckBoxOutlineBlankIcon/>,
                  halfCheck: <CheckBoxOutlineBlankIcon/>,

                  expandClose: <ExpandLessIcon />,
                  expandOpen: <ExpandMoreIcon/>,
                  expandAll: <ExpandMoreIcon/>,
                  collapseAll: <ExpandMoreIcon/>,
                  parentClose: <div></div>,
                     parentOpen:<div> </div >,
                 leaf: <div></div>,
              }}

            />
        {/* {dropDownList.map((d) => {
          if (opened.includes(d.label) && d.children.length) {
            return (
              <div className="main-checkbox">
                <div className="font-weight-bold d-flex check-box-menu" >
                    <Checkbox {...label} /><div onClick={() => {
                    setClick(d.label);
                  }}>{d.label}</div>
                  <div className="d-flex align-items-center"><KeyboardArrowDownRoundedIcon className="bottom-arrow-icon"/></div>
                </div>
                <div className="mx-3 ">
                  {d.children.map((a) => {  
                    if (opened.includes(a.label) && a.children.length) {
                      return (
                        <div>
                          <div className="font-weight-bold d-flex ">
                              <Checkbox {...label} /><div  className="d-flex align-items-center" onClick={() => {
                              setClick(a.label);
                            }}>{a.label}</div>                  <div className="d-flex align-items-center"><KeyboardArrowDownRoundedIcon className="bottom-arrow-icon"/></div>

                          </div>
                          <div>
                            {a.children.map((b) => {
                              return (
                                <div className="mx-3 d-flex" >
                                    <Checkbox {...label} /> <div className="d-flex align-items-center" onClick={() => {
                                    setClick(b.label);
                                  }}>{b.label}{" "}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className="d-flex"
                        >
                            <Checkbox {...label} /> <div className="d-flex align-items-center" onClick={() => {
                            setClick(a.label);
                          }}>{a.label}</div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div
                // onClick={() => {
                //   setClick(d.label);
                // }}
                className="d-flex justify-content-left align-items-center"
              >
               <Checkbox {...label} /> <div className="d-flex align-items-center" onClick={() => {setClick(d.label)}}>{d.label}</div>
               </div>
            );
          }
        })} */}
      </div>
    </div>
  );
};

export default DropDownWIthTreeCheckBox;
