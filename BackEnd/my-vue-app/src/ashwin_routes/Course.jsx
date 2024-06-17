import React, { useEffect, useState } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';
import axios from 'axios';
import { ChakraProvider, Button, Input, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

export function Course() {
  const [datas, setDatas] = useState([]);
  const [cardsCount, setCardsCount] = useState(0);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ title: '', reviews: '', price: '', image: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
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

  const handleEdit = (id, data) => {
    setEditId(id);
    setEditData(data);
    onOpen();
  };

  const handleDelete = (id) => {
    axios.delete(`https://eduschool-2.onrender.com/card_data/${id}`)
      .then(() => {
        setDatas(prevData => prevData.filter(item => item.id !== id));
        setCardsCount(prevCount => prevCount - 1);
      })
      .catch(error => {
        console.error("There was an error deleting the card!", error);
      });
  };

  const handleSave = () => {
    axios.put(`https://eduschool-2.onrender.com/card_data/${editId}`, editData)
      .then(response => {
        setDatas(prevData => prevData.map(item => (item.id === editId ? response.data : item)));
        setEditId(null);
        onClose();
      })
      .catch(error => {
        console.error("There was an error updating the card!", error);
      });
  };

  const handleCancel = () => {
    setEditId(null);
    setEditData({ title: '', name: '', price: '', image: '' }); // Reset editData
    onClose(); // Close the modal
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prevData => ({ ...prevData, [name]: value }));
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDatas = datas.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    const totalPages = Math.ceil(datas.length / itemsPerPage);
    if (pageNumber < 1) {
      setCurrentPage(1);
    } else if (pageNumber > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <main className={`main-container ${isOpen ? 'blur-background' : ''}`}>
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

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {currentDatas.map((ele) => (
          <div key={ele.id} className='course_card'
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
            <img src={ele.image} alt="course_image" style={{ borderRadius: "8px" }} />
            <h3>{ele.title}</h3>
            <p>{`Instructor: ${ele.name}`}</p>
            <p>{ele.price}</p>
            <button className='edit_button' onClick={() => handleEdit(ele.id, ele)}>Edit</button>
            <button className='delete_button' onClick={() => handleDelete(ele.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className='pagination_button' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>{currentPage}</span>
        <button className='pagination_button' onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= datas.length}>
          Next
        </button>
      </div>

      {/* ChakraProvider wrapped only around the modal */}
      {editId && (
        <ChakraProvider>
          <Modal isOpen={isOpen} onClose={handleCancel}>
            <ModalOverlay />
            <ModalContent bg="white">
              <ModalHeader>Edit Course</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  type="text"
                  name="title"
                  value={editData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  mb={3}
                />
                <Input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  mb={3}
                />
                <Input
                  type="text"
                  name="price"
                  value={editData.price}
                  onChange={handleChange}
                  placeholder="Price"
                  mb={3}
                />
                <Input
                  type="text"
                  name="image"
                  value={editData.image}
                  onChange={handleChange}
                  placeholder="Image URL"
                  mb={3}
                />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSave}>
                  Save
                </Button>
                <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ChakraProvider>

      )}
    </main>
  );
}
