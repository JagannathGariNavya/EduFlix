import React, { useEffect, useState } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import axios from 'axios';
import {
  ChakraProvider,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@chakra-ui/react";

export function Users() {
  const [datas, setDatas] = useState([]);
  const [activeUsersCount, setActiveUsersCount] = useState(0);
  const [inactiveUsersCount, setInactiveUsersCount] = useState(0);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: '', email: '', phone: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Fetch user data
    axios.get('https://eduschool-2.onrender.com/user')
      .then(response => {
        const users = response.data;
        setDatas(users);
        const activeUsers = users.filter(user => user.isActive).length;
        const inactiveUsers = users.filter(user => !user.isActive).length;
        setActiveUsersCount(activeUsers);
        setInactiveUsersCount(inactiveUsers);
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  const handleEdit = (id, data) => {
    setEditId(id);
    setEditData(data);
    onOpen();
  };

  const handleCancel = () => {
    setEditId(null);
    setEditData({ name: '', email: '', phone: '' }); // Reset editData
    onClose(); // Close the modal
  }

  const handleDelete = (id) => {
    axios.delete(`https://eduschool-2.onrender.com/user/${id}`)
      .then(() => {
        setDatas(prevData => prevData.filter(item => item.id !== id));
        const user = datas.find(user => user.id === id);
        if (user.isActive) {
          setActiveUsersCount(prevCount => prevCount - 1);
        } else {
          setInactiveUsersCount(prevCount => prevCount - 1);
        }
      })
      .catch(error => {
        console.error("There was an error deleting the user!", error);
      });
  };

  const handleSave = () => {
    axios.put(`https://eduschool-2.onrender.com/user/${editId}`, editData)
      .then(response => {
        setDatas(prevData => prevData.map(item => (item.id === editId ? response.data : item)));
        setEditId(null);
        setEditData({ name: '', email: '', phone: '' });
        onClose();
      })
      .catch(error => {
        console.error("There was an error updating the user!", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prevData => ({ ...prevData, [name]: value }));
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);

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

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {currentItems.map((ele) => (
          <div key={ele.id} className='course_card'
            style={{
              height: "350px",
              width: "300px",
              marginTop: "10px",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            {ele.image ? (
              <img src={ele.image} alt="user_image" style={{ borderRadius: "50%", width: "100px", height: "100px", marginBottom: "10px" }} />
            ) : (
              <div style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: getRandomColor(),
                fontSize: "2rem",
                color: "white"
              }}>
                {ele.name.charAt(0).toUpperCase()}
              </div>
            )}
            <h3>{`Name: ${ele.name.charAt(0).toUpperCase() + ele.name.slice(1)}`}</h3>
            <p>{`Email: ${ele.email}`}</p>
            <p>{`Phone number: ${ele.phone}`}</p>
            <div>
              <button className='edit_button' onClick={() => handleEdit(ele.id, ele)}>Edit</button>
              <button className='delete_button' onClick={() => handleDelete(ele.id)}>Delete</button>
            </div>
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

      {editId && (
        <ChakraProvider>
          <Modal isOpen={isOpen} onClose={handleCancel}>
            <ModalOverlay />
            <ModalContent bg="white">
              <ModalHeader>Edit User</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  mb={3}
                />
                <Input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  mb={3}
                />
                <Input
                  type="text"
                  name="phone"
                  value={editData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
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

export default Users;
