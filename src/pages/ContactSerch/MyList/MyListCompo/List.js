import { Button, Table } from 'antd';
import React, { useState } from 'react';

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