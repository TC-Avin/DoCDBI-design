import axios from "axios";
import React, { useEffect } from "react";
import { getTest } from "../Context/APIs";

const UnderContruction = () => {
  useEffect(()=>{
    async function f(){
      const res = await getTest();
    }
    f();
  },[])
  return <div>Page Is Under Contruction </div>;
};

export default UnderContruction;
