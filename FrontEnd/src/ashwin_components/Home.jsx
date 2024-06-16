import React, { useEffect, useState } from 'react';
import { BsCart3, BsFillArchiveFill, BsPeopleFill } from 'react-icons/bs';
import axios from 'axios';

import UserPercentageChart from './UserPercentageChart ';



export function Home() {
    const [datas, setDatas] = useState([]);
    const [cardsCount, setCardsCount] = useState(0);
    const [activeUsersCount, setActiveUsersCount] = useState(0);
    const [inactiveUsersCount, setInactiveUsersCount] = useState(0);

    useEffect(() => {
        // Fetch card data
        axios.get('https://eduschool-2.onrender.com/card_data')
            .then(response => {
                const fetchedData = response.data;
                setDatas(fetchedData);
                setCardsCount(Object.keys(fetchedData).length);
            })
            .catch(error => {
                console.error("There was an error fetching the card data!", error);
            });

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
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>COURSES</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>{cardsCount}</h1>
                </div>
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
                <div className='card'>
                    <div className='card-inner'>
                        <h3>SOLD COURSES</h3>
                        <BsCart3 className='card_icon' />
                    </div>
                    <h1>175</h1>
                </div>    
            </div>


          <UserPercentageChart/>
        </main>
    );
}
