import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import _ from "lodash";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const MultiInputBox = (props) => {
  const [count, setcount] = useState(2);
  return (
    <div>
      <p>{props.title || "Enter NAICS codes below (2, 3, 4, 5 or 6 digit codes are accepted)"}</p>
      <div className="combobox-main">
        {_.range(count).map((d) => {
          return (
            <div className="combobox-sub">
              <TextField
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
              <CloseIcon />
            </div>
          );
        })}
      </div>
      <p
        onClick={() => {
          setcount(count + 2);
        }}
      >
        {" "}
        <AddIcon /> Add More
      </p>
      <p>
        <Button>{props.button || "Dummy Button"}</Button>
      </p>
    </div>
  );
};

export default MultiInputBox;
