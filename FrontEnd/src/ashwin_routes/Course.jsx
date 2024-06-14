import React, { useEffect, useState } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import axios from 'axios';

export function Course() {
  const [datas, setDatas] = useState([]);
  const [cardsCount, setCardsCount] = useState(0);

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
  }, []);

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>COURSE</h3>
      </div>

      <div className='main-cards' style={{ width: "100%", marginBottom: "20px" }}>
        <div className='card' style={{ width: "100%", marginBottom: "20px" }}>
          <div className='card-inner'>
            <h3>COURSE</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{cardsCount}</h1>
        </div>
      </div>
      <div>
        <div 
           style={{
            display: "flex",
            flexWrap:"wrap",
            gap:"20px"
          }}
        >
          {datas.map((ele) => (
            <div className='course_card'
              style={{
                height: "350px",
                width: "300px",
                marginTop: "10px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
              }}
            >
              <img src={ele.image} alt="course_image" style={{borderRadius:"8px"}} />
              <h3>{ele.title}</h3>
              <p>{ele.reviews}</p>
              <p>{ele.price}</p>
              <button className='edit_button'>Edit</button>
              <button className='delete_button'>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
