import React from 'react'
import List from './List';

const Downloads = () => {
    const columns = [
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
    view:<div className="text-primary pointer">See Downlods</div>,
    date:`${i+1}/9/2021`
  });
}
  return (
    <div><List data={data} columns={columns}></List></div>
  )
}

export default Downloads