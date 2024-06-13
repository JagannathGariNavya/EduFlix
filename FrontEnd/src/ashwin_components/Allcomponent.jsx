import React from 'react'
import '.ashwin.css'
import { Header } from './Header'
import { SideBar } from './SideBar'
import { Home } from './Home'

export const Allcomponent = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Home />
      </div>
    )
}
