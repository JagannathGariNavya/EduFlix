import { useState } from 'react';
import './ashwin.css';
import { Header } from './Header';
import { SideBar } from './SideBar';
import { AllRoutes } from '../ashwin_routes/AllRoutes';




function AllComponents() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <AllRoutes/>
      </div>
    </>
  );
}

export default AllComponents;
