import React from 'react'
import List from '../MyListCompo/List';
import DeleteIcon from '@mui/icons-material/Delete';
import Tippy from '@tippyjs/react';
import { Button } from '@mui/material'
import { NotificationManager } from 'react-notifications';


const CSVs = () => {
    const columns = [
        {
          title: 'Uploded List',
          dataIndex: 'name',
        },
        {
            title: 'Uploded Date',
            dataIndex: 'date',
          },
        {
            title: 'View Uploded ',
            dataIndex: 'view',
          },
          {
            title: 'Delete ',
            dataIndex: 'download',
          },
       
      ];
      const data = [];
      for (let i = 0; i < 15; i++) {
        data.push({
          key: i,
          name: ` ${i+1}.csv`,
          age: 32,
          address: `London, Park Lane no. ${i}`,
          view:<div className="text-primary pointer">See Uploded</div>,
          download: <Tippy
                      content={
                        <div className='TippyAction bg-light '>
                          <div className=' p-2 pointer'>Are you sure you want to Delete.</div>
                            <div className='d-flex justify-content-center'>
                              <Button variant="contained" className='m-2 bg-success' onClick={()=>{NotificationManager.error("Deleted")}}>Yes</Button>
                              <Button variant="contained" className='m-2 bg-danger'>No</Button>
                            </div>
                          </div>
                      }
            placement='bottom-end'
            arrow={false}
            offset={[15,1]}
            trigger='click'
            interactive={ true}
            className='confirmation-model delete-box'
        >  
        <DeleteIcon className='pointer'/></Tippy>,
          date:`${i+1}/9/2021`
        });
      }
  return (
    <div><List data={data} columns={columns}></List></div>
  )
}

export default CSVs