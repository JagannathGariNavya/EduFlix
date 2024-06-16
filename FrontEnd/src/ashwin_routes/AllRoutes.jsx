import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../ashwin_components/Home'
import { Course } from './Course'
import Users from './Users'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    )
}
