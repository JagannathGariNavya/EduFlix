import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';
import { getCartItemsFromLocalStorage, setCartItemsToLocalStorage } from '../Utils/localStorage';
import { Header1 } from '../components/Header1';
import { CourseContent } from '../components/CourseContent';
import { Courselearn } from '../components/Courselearn';
import { Instructor } from '../components/Instructor';
import { CoursePurchase } from '../components/CoursePurchase';
import { Reviews } from '../components/Reviews';
import { FAQ } from '../components/FAQ';





export const CoursePage = () => {
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const [cartCount, setCartCount] = useState(0);
    const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://eduschool-2.onrender.com/pdp_Details/${id}`)
      .then((response) => {
        const courseData = response.data;
        setCourse(courseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, [id]);


  useEffect(() => {
    const currentCartItems = getCartItemsFromLocalStorage();
    setCartCount(currentCartItems.length);
  }, []);

  const addToCart = () => {
    if (course) {
      const currentCartItems = getCartItemsFromLocalStorage();
      const itemExists = currentCartItems.find((item) => item.id === course.id);
      if (!itemExists) {
        const updatedCartItems = [...currentCartItems, { ...course, quantity: 1 }];
        setCartItemsToLocalStorage(updatedCartItems);
        setCartCount(updatedCartItems.length);
      }
    }
  };

  const handleBuyNow = () => {
    addToCart();
    navigate('/CartPage');
  };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!course) {
        return <div>Loading...</div>;
    }
    if (course.length === 0) {
        return <div>Loading...</div>;
      }


    return (
        <>
        <Header1 course={course} addToCart={addToCart} handleBuyNow={handleBuyNow} cartCount={cartCount}/>
        <CourseContent/>
        <Courselearn/>
        <Instructor/>
        <CoursePurchase/>
        <Reviews/>
        <FAQ/>
         </>
  )
} 
