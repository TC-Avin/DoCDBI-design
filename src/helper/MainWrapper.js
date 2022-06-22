import React, {useState} from "react";
import HeaderBar from "../componants/comman/HeaderBar";
import TopBar from "../componants/comman/TopBar";
import Filter from "../pages/ContactSerch/Filter";

const HeaderFilterTopBarWrapper = Compo  =>{

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
       return setToggle(!toggle)
    }

    return (
      <>
        <HeaderBar />
        <Filter hideShow={toggle} hideShowClick={handleClick}>
          <div className="d-flex flex-column">
          <div><TopBar/></div>
          {Compo}
          </div>
        </Filter>
        
      </>
    )
  }
  export default HeaderFilterTopBarWrapper;
  