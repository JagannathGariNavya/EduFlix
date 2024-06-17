import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export function SideBar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <a href="">
            <img
              className="project_logo"
              src="React_Project_logo.png"
              alt="logo"
            />
          </a>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/course">
            <BsFillArchiveFill className="icon" /> Course
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/users">
            <BsPeopleFill className="icon" /> Users
          </Link>
        </li>
      </ul>
    </aside>
  );
}
