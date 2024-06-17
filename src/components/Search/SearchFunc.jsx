import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Input,
  Box,
  Flex,
  Image,
  Text,
  Spinner,
  Center,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const SearchFunc = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://eduschool-2.onrender.com/card_data');
        setItems(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box p={5}>
      <Input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        mb={5}
      />
      {loading ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : (
        <Flex flexWrap="wrap" gap={5} justify="center">
          {filteredItems.map(item =>(
            <Box key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={3} maxWidth="200px">
              <Image src={item.image} alt={item.name} />
              <Box p={2}>
                <Text fontWeight="bold">{item.name}</Text>
                <Text>${item.price}</Text>
                <Text>{item.rating} ({item.ratingcount} reviews)</Text>
              </Box>
            </Box>
          ))}
          {filteredItems.length === 0 && !loading && (
            <Text>No items found for "{query}".</Text>
          )}
        </Flex>
      )}
    </Box>
  );
};

export default SearchFunc;
