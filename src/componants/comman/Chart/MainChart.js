import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  PieChart,
  Pie,
} from 'recharts';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const data = [
  {
    name: 'Jan',
    total: 1100,
    paid: 50,
    free: 1100,
  },
  {
    name: 'Fab',
    total: 1800,
    paid: 1700,
    free: 900,
  },
  {
    name: 'Mar',
    total: 2000,
    paid: 900,
    free: 1500,
  },
  {
    name: 'May',
    total: 3000,
    paid: 2800,
    free: 904,
  },
  {
    name: 'Jun',
    total: 1100,
    paid: 900,
    free: 100,
  },
  {
    name: 'jul',
    total: 3000,
    paid: 1005,
    free: 2800,
  },
];

export default class MainChart extends PureComponent {

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
         <div className='w-100 text-right'>   <RangePicker picker="week" className='p-2' /></div>

        <ResponsiveContainer>
          <ComposedChart
            width={700}
            height={600}
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
            <Line type="monotone" dataKey="paid" stroke="red" />
            <Line type="monotone" dataKey="free"  stroke="#8884d8" />
            <Bar dataKey="total" barSize={20} fill="#413ea0" >
              <LabelList dataKey="total" position="top" />
            </Bar>
          </ComposedChart>
          {/* <PieChart 
            width={730} 
            height={250}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <Pie data={data} dataKey="total" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
            <Pie data={data} dataKey="paid" nameKey="name" cx="50%" cy="50%" innerRadius={85} outerRadius={110} fill="#82ca9d" label />
          </PieChart> */}
        </ResponsiveContainer>
      </div>
    );
  }
}
