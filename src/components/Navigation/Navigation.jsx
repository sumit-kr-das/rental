import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../Avatar/Avatar";
import CartPopup from "./CartPopup";
import MobileNav from "./MobileNav";
import Settings from "./Settings";
import "./navigation.scss";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [mobNav, setMobNav] = useState(false);
  const [cartCon, setCartCon] = useState(false);
  const [settings, setSettings] = useState(false);

  const { user } = useContext(AuthContext);
  // const { cart } = useContext(Cart);

  function changeBackground() {
    if (window.scrollY >= 500) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={nav ? "container active" : "container"}>
        <div className="nav_wrapper">
          <div className="left_wrapper">
            <Link to="/">
              <img
                className="main_nav_img"
                src="/assets/logo.png"
                alt="main_logo"
              />
            </Link>
            <ul>
              {["Home", "Listing", "About", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`${item === "Home" ? "/" : item.trim().toLowerCase()}`}
                    style={nav ? { color: "#000" } : { color: "#000" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="right_wrapper">
            {user.access_token ? (
              <Avatar name={user.name} setSettings={setSettings} />
            ) : (
              <div className="btn_group">
                <Link className="btn_secondary" to="/register">
                  Sign up
                </Link>
                <Link className="btn_primary" to="/login">
                  Log in
                </Link>
              </div>
            )}
            {nav ? (
              <img
                onClick={() => setMobNav(!mobNav)}
                className="wishlist_icon nav_ham_burger"
                src="/assets/icons/menu_black.png"
                alt="grid_outline"
              />
            ) : (
              <img
                onClick={() => setMobNav(!mobNav)}
                className="wishlist_icon nav_ham_burger"
                src="/assets/icons/menu.png"
                alt="grid_outline"
              />
            )}
          </div>
        </div>
      </nav>
      <MobileNav mobNav={mobNav} setMobNav={setMobNav} />
      {cartCon && <CartPopup cart={cartCon} setCart={setCartCon} />}
      {settings && <Settings setSettings={setSettings} />}
    </>
  );
};

export default Navigation;
