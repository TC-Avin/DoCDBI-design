import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {AuthContext} from './AuthContext';


function ProtectedRoutes({children}) {

  const{isAuthenticated} = useContext(AuthContext);
  let navigate = useNavigate();

 useEffect(()=>{

  if(!isAuthenticated){
     navigate("/");
  }
 },[isAuthenticated])

  return (
    children
  )
}

export default ProtectedRoutes