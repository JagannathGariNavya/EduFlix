import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import SearchBar from './SearchBar';

const SearchFunc= () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://eduschool-2.onrender.com/card_data');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
    <div>
    <input
      type="text"
      placeholder="Search by name..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  </div>
      <div>
        {filteredItems.map(item => (
          <div key={item.id}>
            {/* <img src={item.image} alt={item.name} /> */}
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.rating} ({item.ratingcount})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFunc;