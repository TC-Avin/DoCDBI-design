/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    free: 0,
    paid: 0,
    total: 0,
  },
  {
    name: 'Feb',
    free: 2000,
    paid: 1398,
    total: 2398,
  },
  {
    name: 'Mar',
    free: 2000,
    paid: 3000,
    total: 5000,
  },
  {
    name: 'Apr',
    free: 2780,
    paid: 3000,
    total: 5780,
  },
  {
    name: 'May',
    free: 1890,
    paid: 2000,
    total: 3890,
  },
  {
    name: 'Jun',
    free: 2390,
    paid: 3000,
    total: 5390,
  },
  {
    name: 'Jul',
    free: 4090,
    paid: 4300,
    total: 7390,
  },
];


class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class DownloadChart extends PureComponent {

  render() {
    return (
        <div style={{ width: '100%', height: 300 }}>

      <ResponsiveContainer >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="free" stroke="#8884d8" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="paid" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
            </div>

    );
  }
}
