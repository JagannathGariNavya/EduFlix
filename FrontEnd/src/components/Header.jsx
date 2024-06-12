import { Box } from '@chakra-ui/react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <Routes>
            <Route path="" element={<h3><Box w="100%" h="70px" >Home</Box></h3>}/>
            {/* <Route path="" element={}/>
            <Route path="" element={}/> */}
        </Routes>

    </div>
  )
}
