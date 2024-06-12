import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
   <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>
)
