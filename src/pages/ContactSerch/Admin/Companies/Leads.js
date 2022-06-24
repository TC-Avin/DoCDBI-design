import React, { useState } from "react";
import { Button } from "@mui/material";
import LeadsTable from "./LeadsTable";
const Leads = () => {
  const [titlebtn, settitlebtn] = useState("cate1");
  let cateArray = ["cate1", "cate2", "cat3", "cat4"];

  return (
    <div className="mt-3">
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
    </div>
  );
};

export default Leads;
