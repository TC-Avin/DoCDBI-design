import { Button, Table } from 'antd';
import React, { useState } from 'react';
import PopUpModel from '../../../../componants/comman/PopUpModel';
import TextField from '@mui/material/TextField';

const List = (props) => {
    console.log('props', props)
        return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        > 
        </span>
      </div>
      <Table  columns={props.columns} dataSource={props.data} />
      
    </div>
  );
 
}

export default List