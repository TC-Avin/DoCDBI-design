import React from 'react'
import { Avatar, Skeleton } from 'antd';
import List from './List';

import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import DeleteIcon from '@mui/icons-material/Delete';
import Tippy from '@tippyjs/react';
import { Button } from '@mui/material'
import { NotificationManager } from 'react-notifications';
const animatedComponents = makeAnimated();


const SaveSearch = () => {


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
        title: 'Date',
        dataIndex: 'date',
      },
      {
        title: 'Action',
        dataIndex: 'action',
      },
      {
        title: 'Edit',
        dataIndex: 'edit',
      },
    
  ];

  let rawTitle = ["Contacts","Title","Phone"]

 let  raw = rawTitle.map((val)=>{
  return {
    name: val,
            date:"10/08/2022"    ,
            action:<div className='text-primary'>go to search</div>  ,
            edit:<Tippy
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
  <DeleteIcon className='pointer'/></Tippy> 
  }
 })
  return (
<List columns={columns} data={raw}></List>)


  //   <List
  //   itemLayout="horizontal"
  //   dataSource={data}
  //   renderItem={(item) => (<>
  //     <List.Item className='w-100'>
  //       <List.Item.Meta
  //         avatar={<BookmarkAddedIcon className='mx-3'/>}
  //         title={<div href="https://ant.design">{`${item.title} search `}</div>}
  //         className='w-75'
  //       //   description={item.filter}
  //       />
  //        <List.Item.Meta
  //       //  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
  //         title={<Link to="/contactsearch">{"go to search"}</Link>}
  //       //   description={item.filter}
  //       >
  //           go to search
  //       </List.Item.Meta>
  //     </List.Item>
  //   </>
  //   )}
  // />
  // )
}

export default SaveSearch