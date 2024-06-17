import { useState } from "react";
import "./ashwin.css";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { AllRoutes } from "../ashwin_routes/AllRoutes";
import { useNavigate } from "react-router-dom";

function AllComponents({ setAuth }) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const navigate = useNavigate();

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const logout = () => {
    if (typeof setAuth === "function") {
      setAuth(false); // Clear authentication state
      navigate("/login"); // Navigate to login page
    } else {
      console.error("setAuth is not a function");
    }
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} logout={logout} />
      <SideBar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <AllRoutes />
    </div>
  );
}

export default AllComponents;
