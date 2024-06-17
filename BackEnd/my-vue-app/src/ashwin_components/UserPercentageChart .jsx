import React from 'react';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell} from 'recharts';

const data = [
  { name: 'January', percentage: 12 },
  { name: 'February', percentage: 15 },
  { name: 'March', percentage: 20 },
  { name: 'April', percentage: 25 },
  { name: 'May', percentage: 30 },
  { name: 'June', percentage: 35 },
  { name: 'July', percentage: 50 },
  { name: 'August', percentage: 45 },
  { name: 'September', percentage: 30 },
  { name: 'October', percentage: 55 },
  { name: 'November', percentage: 60 },
  { name: 'December', percentage: 45 }
];
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE'];
const UserPercentageChart = () => {
  return (
    <>
    <h1
    style={{
      marginTop:"50px"
    }}
    >Users Enrolled Representation</h1>
    <div className='charts'>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="percentage" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>

    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="percentage"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
    </div>
    </>
  );
}

export default UserPercentageChart;
