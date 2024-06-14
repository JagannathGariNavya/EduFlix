import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './ashwin.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { SideBar } from './components/SideBar';

import { Users } from './routes/Users';
import { Course } from './routes/Course';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
