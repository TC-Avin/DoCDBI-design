import React, { useState } from "react";
import { Link } from "react-router-dom";
// import SearchBar from 'material-ui-search-bar-enhanced'
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = (props) => {
  const { handleChange } = props;
  const [value, setValue] = useState("");
  const suggestions = ["asd","as","bb","filter"]

  
  return (
    <>
      <div className="input-group search-area">
        <span className="input-group-text">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search Here"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            handleChange(e.target.value);
          }}
        />

      </div>
    {  value &&  <div className="search-filter w-100 border p-2">
      {suggestions.map((d,i)=>{
        return (
          <div>{d}</div>
        )
      })}
      </div>}

    </>
  );
};
export default Searchbar;
