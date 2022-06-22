import React, { useContext, useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import {AuthContext} from './AuthContext';


function UnProtectedRoutes({children}) {
  const{isAuthenticated} = useContext(AuthContext);
  let navigate = useNavigate();
  console.log(isAuthenticated);
  useEffect(()=>{
    // console.log("unprotected")
    if(isAuthenticated){
       navigate("/dashboard");
    }
   },[])

  return (
    children
  )
}

export default UnProtectedRoutes