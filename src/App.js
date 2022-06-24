import './App.css';
import DocDBI from './componants/DocDBI';
import { BrowserRouter } from "react-router-dom";
import './sass/index.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useState, createContext } from "react";
import { MainContext } from './componants/filterContext/FIlterContext';
import { indexOf } from 'lodash';

function App() {
  const [filterContext, setfilterContext] = useState([])

  const setContextData = (type,subType,data)=>{
    let newContext = [...filterContext];
    let second = [...newContext]
    let flag = {flag:false,index:0}
   if(newContext.length){
    newContext.map((val,i)=>{
      if(val[subType]){
        flag={flag:true,index:i}
      }else{
       
      }
    })
    if(flag.flag){
      second[flag.index][subType]=data
    }else{
      let obj = {}
         obj[subType]=data;
         obj.type = type
       second.push({...obj})
    }
   }else{
    let obj = {}
        obj[subType]=data;
        obj.type = type
        second.push({...obj})
   }
   setfilterContext(second)
  }
  return (
    <MainContext.Provider value={{filterContext,setfilterContext,setContextData}}>

    <div className="App">
      <NotificationContainer/>
      <DocDBI/>
    </div>
    </MainContext.Provider>

  );
}

export default App;

