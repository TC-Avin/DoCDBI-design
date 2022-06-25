import React, { useState } from "react";
import { Button } from "@mui/material";
import LeadsTable from "./LeadsTable";
import PopUpModel from "../../../../componants/comman/PopUpModel";
import AddLeads from "./AddLeads"

const Leads = () => {
  const [titlebtn, settitlebtn] = useState("cate1");
  let cateArray = ["cate1", "cate2", "cat3", "cat4"];
  const [model ,setmodel] = useState(false);

  return (
    <div>
      <div className='btn-class'>
        <h4 class="pr-3 d-flex justify-content-between"><div class="p-2 profile-header">Leads</div><Button variant={"contained"} className='mt-2' onClick={()=>{setmodel(true)}}>Upload Leads</Button></h4>
    </div>
      <div className="d-flex justify-content-end  pb-0 pt-0">
        <div className="d-flex justify-content-end  pb-0 pt-0  hadbar-btn table-wrapper">
          {cateArray.map((data) => {
            return (
              <Button
                variant={`${titlebtn == data ? "contained" : "outlined"}`}
                className="mx-0 flex-1 button-highlight"
                onClick={() => {
                  settitlebtn(data);
                }}
              >
                {data}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="table-wrapper  card">
        <LeadsTable />
      </div>
      <PopUpModel
      open={model}
      title={"Upload Leads"}
      close={()=>{setmodel(false)}}
      >
        <AddLeads close={()=>{setmodel(false)}}/>
      {/* <UploadLead close={()=>{setmodel(false)}}/> */}
      </PopUpModel>
    </div>
  );
};

export default Leads;
