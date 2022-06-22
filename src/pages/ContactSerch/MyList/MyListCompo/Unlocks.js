import React from 'react'
import List from './List';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Unlocks = () => {
    const dataSource = [
        {
            Phone: <div><CallIcon className='mr-2'/>+101-9856321478</div> ,
            Email: <div><EmailIcon className='mr-2'/>abc@gmail.com</div>,
        },  
        {
            Phone: <div><CallIcon className='mr-2'/>+101-9856321478</div>,
            Email: <div><EmailIcon className='mr-2'/>abc@gmail.com</div>,
        },  
        {
            Phone: <div><CallIcon className='mr-2'/>+101-9856321478</div>,
            Email: <div><EmailIcon className='mr-2'/>abc@gmail.com</div>,
        }, 
        {
            Phone: <div><CallIcon className='mr-2'/>+101-9856321478</div>,
            Email: <div><EmailIcon className='mr-2'/>abc@gmail.com</div>,
        }, 
        {
            Phone: <div><CallIcon className='mr-2'/>+101-9856321478</div>,
            Email: <div><EmailIcon className='mr-2'/>abc@gmail.com</div>,
        }, 

      ];
      const columns = [
        {
          title: 'Phone',
          dataIndex: 'Phone',
        },
        {
          title: 'Email',
          dataIndex: 'Email',
        },
      ];
  return (
    <div><List data={dataSource} columns={columns}></List></div>
  )
}

export default Unlocks