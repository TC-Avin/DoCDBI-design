import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const data = [
  {
    name: 'Jan',
    users: 590,
    earnings: 800,
    subscription: 'Professional',
    billing: 'Monthly',
  },
  {
    name: 'Feb',
    users: 868,
    earnings: 967,
    subscription: 'Professional',
    billing: 'Monthly',
  },
  {
    name: 'Mar',
    users: 1397,
    earnings: 1098,
    subscription: 'Professional',
    billing: 'Monthly',
  },
  {
    name: 'Apr',
    users: 1480,
    earnings: 1200,
    subscription: 'Professional',
    billing: 'Monthly',
  },
  {
    name: 'May',
    users: 1520,
    earnings: 1108,
    subscription: 'Professional',
    billing: 'Monthly',
  },
  {
    name: 'Jun',
    users: 1400,
    earnings: 680,
    subscription: 'Professional',
    billing: 'Monthly',
  },
];

export default class MainSubChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

  render() {
    return (
        <div style={{ width: '100%', height: 300 }}>
         <div className='w-100 text-right'>   <RangePicker picker="week" className='p-2' /></div>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="subscription" fill="#1362FC" stroke="#1362FC" />
          <Bar dataKey="earnings" barSize={20} fill="#1362FC" />
          <Line type="monotone" dataKey="users" stroke="#ff7300" />
          <Scatter dataKey="billing" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>

    );
  }
}
