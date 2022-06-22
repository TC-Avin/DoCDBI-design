import { Button } from "@mui/material";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";


const HeaderBar = () => {
  const [serchTerm, setserchTerm] = useState("")
  const [suggestions, setsuggestions] = useState([])

  const navigate = useNavigate();





  useEffect(() => {
    let ary = ["hello","hi","contacts","mylist","verify","avin","gaurav"]
    let filtered = ary.filter((d)=>d.includes(serchTerm))
    setsuggestions(filtered)
  
  }, [serchTerm])
  

  return (
    <div className="w-100 p-3 bg-blue">
      <div className="d-flex flex-row justify-content-between">
        {" "}
        <big style={{color:"white", fontSize:"25px"}}>DocDBI</big>
        <div className=" search-area search-bar w-50 position-relative input-search" onMouseLeave={()=>{
          console.log('first')
          setserchTerm("")
        }}>
            <div className="d-flex w-75 ">
              <input type="text" className=" rounded-left focus-input w-100 inputtype-search" placeholder="Quick Search" onChange={(e)=>{setserchTerm(e.target.value)}} />
              <span className=" search-icon icn-search pointer"><SearchIcon/></span>
            </div>
            {serchTerm && <div className="position-absolute suggestion-dropdown bg-white search-suggestion w-75">
          {suggestions.map((d)=>{
          return(<p className="text-start px-1 my-2 text-bold pointer hover-suggestion">{d}</p>)
        })}
        </div>
        }
        </div>
      
       <div className="d-flex"> 
       <Button variant="contained" className="bg-green no-right-radius">5 free credits</Button>
        <Button variant="contained" className="bg-orange no-left-radius"  onClick={()=>{navigate('/profile',{state:'subscription'})}}>Upgrade Pro</Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
