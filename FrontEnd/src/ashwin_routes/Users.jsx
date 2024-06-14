import React, { useEffect, useState } from 'react';
import { BsFillArchiveFill, BsPeopleFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import axios from 'axios';

export function Users() {
    const [datas, setDatas] = useState([]);
    const [activeUsersCount, setActiveUsersCount] = useState(0);
    const [inactiveUsersCount, setInactiveUsersCount] = useState(0);

    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];

    useEffect(() => {


        // Fetch user data
        axios.get('https://eduschool-2.onrender.com/user')
            .then(response => {
                const users = response.data;
                const activeUsers = users.filter(user => user.isActive === true).length;
                const inactiveUsers = users.filter(user => user.isActive === false).length;
                setActiveUsersCount(activeUsers);
                setInactiveUsersCount(inactiveUsers);
            })
            .catch(error => {
                console.error("There was an error fetching the user data!", error);
            });
    }, []);

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>USERS</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ACTIVE USERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>{activeUsersCount}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>INACTIVE USERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>{inactiveUsersCount}</h1>
                </div>
               
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}
