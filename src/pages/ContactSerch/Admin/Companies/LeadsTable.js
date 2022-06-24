import React from 'react'
import { Space, Table, Tag } from 'antd';

const LeadsTable = () => {
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
    }
  ]

  const createData = (name,email,website,gender)=>{
    return {name,email,website,gender}
  }
  const data = [
    createData("Jeana DFR","12xcx3@g.com","www.sfdrt.com","M"),
    createData("Jeana Lynn","12fbfd3@g.com","www.rdfdt.com","F"),
    createData("Jeana SAd","123czdc@g.com","www.rt.com","M"),

  ]
  return (
    <div className="">
      <Table columns={column} dataSource={data} />
    </div>
  )
}

export default LeadsTable