import React from 'react'
import List from './List';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DataTable from '../../../../componants/comman/DataTable';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Downloads = () => {

  const [state, setstate] = useState(true);
  const [checkBoxColumn, setCheckBoxColumn] = useState(["_id", "contact_name", "title", "phone_number", "email", "address", "name", "Action"]);


  const changetable = () => {
    setstate(false);
  }

    const columns = [
        { field: "_id", headerName: "ID", width: 50 },
        { field: "contact_name", headerName: "CONTACTS", width: 130 },
        { field: "title", headerName: "TITLE", width: 130 },
        { field: "phone_number", headerName: "PHONE", width: 130 },
        { field: "email", headerName: "EMAIL", width: 90 },
        { field: "address", headerName: "LOCATION", width: 220 },
        { field: "name", headerName: "INDUSTRY", width: 370 },
        { field: "action", headerName: "ACTIONS", width: 150 },
    ]

    const colum = [
        {
          title: 'Download List',
          dataIndex: 'name',
        },
        {
            title: 'Downloads Date',
            dataIndex: 'date',
          },
        {
            title: 'View Downloads ',
            dataIndex: 'view',
          },
       
      ];
      const data = [];

for (let i = 0; i < 15; i++) {
  data.push({
    key: i,
    name: ` ${i+5} sheet Downloaded`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    view:<div className="text-primary pointer" ><RemoveRedEyeIcon onClick={changetable}/></div>,
    date:`${i+1}/9/2021`
  });
}
  return (
    <div>{state ? <List data={data} columns={colum}  />:
    <div>
      <div className='w-100 d-flex justify-content-start button-margin'>
       <Button variant="contained" className='m-1 justify-content-start ' onClick={()=>{
        setstate(true)
       }}><ArrowBackIcon/></Button>
      </div>
      <DataTable columns={columns} checkBoxColumn={checkBoxColumn} />
    </div>}</div>
  )
}

export default Downloads