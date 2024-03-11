import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Avatar from "../../../../components/Avatar/Avatar";
import { AuthContext } from "../../../../context/AuthContext";
import "./layout.scss";

const Layout = () => {
  const [settings, setSettings] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div className="layout_container">
      {/* sidebar */}
      <div className="layout_sidebar">
        <div className="layout_profile">
          <img src="/assets/logo.png" alt="logo" />
        </div>
        <ul>
          <li>
            <Link to="/">Add Hotel</Link>
          </li>
          <li>
            <Link to="/">Add Hotel</Link>
          </li>
          <li>
            <Link to="/">Add Hotel</Link>
          </li>
        </ul>
      </div>
      {/* main section */}
      <div className="layout_main_container">
        {/* Navigation  */}
        <div className="layout_navigation">
          <div></div>
          <Avatar name={user.name} setSettings={setSettings} />
        </div>
        <div className="outlet_container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
