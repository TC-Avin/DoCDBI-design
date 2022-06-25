import React, { useState } from 'react';
import { Table } from 'antd';
import EditIcon from '@mui/icons-material/Edit';
import PopUpModel from '../../../../componants/comman/PopUpModel';
import UploadLead from './UploadLead';


const LeadsTable = () => {
  const [model,setmodel] = useState(false)
  let column = [
    {
        title: 'Name',
    dataIndex: 'name',
    },{
        title: 'Email',
    dataIndex: 'email',
    },{
        title: 'Website',
    dataIndex: 'website',
    },{
        title: 'Gender',
    dataIndex: 'gender',
    },
  ]

  const createData = (name,email,website,gender,action)=>{
    return {name,email,website,gender,action}
  }
  const data = [
    createData("Jeana DFR","12xcx3@g.com","www.sfdrt.com","M"),
    createData("Jeana Lynn","12fbfd3@g.com","www.rdfdt.com","F"),
    createData("Jeana SAd","123czdc@g.com","www.rt.com","M"),
  ]
  return (
    <div className="">
      <Table columns={column} dataSource={data} />
      <PopUpModel 
      open={model}
      title={"Upload Leads"}
      close={()=>{setmodel(false)}}>

        {/* <AddLead></AddLead> */}
        <UploadLead close={()=>{setmodel(false)}}/>

      </PopUpModel>
    </div>
  )
}

export default LeadsTable