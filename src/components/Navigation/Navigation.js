import { useContext, useState } from 'react';
import MobileNav from './MobileNav';
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';
import './navigation.scss';
import { AuthContext } from '../../context/AuthContext';


const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [mobNav, setMobNav] = useState(false);

  function changeBackground(){
    if(window.scrollY >= 90){
      setNav(true);
    }else{
      setNav(false);
    }
  }

  window.addEventListener('scroll',changeBackground);

  const { user } = useContext(AuthContext)

  return (
    <>
      <nav className={nav ? 'container active' : 'container'}>
        <div className='left_wrapper'>
          <Link to="/">
            <img className='main_nav_img' src="/assets/logo.png" alt="main_logo" />
          </Link>
          <ul>
            {["Home", "Destination", "Blog", "About"].map((item, index) => (
              <li key={index}>
                <Link to={`${item === "Home" ? "/" : item.trim().toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
        </ul>
        </div>
        <div className='right_wrapper'>
          <img className='wishlist_icon' src="/assets/icons/wishlist.svg" alt="wishlist" />
          {
            user ? <Avatar /> : <Link className='btn_primary' to="/login">Sign in</Link>
          }
          <img onClick={() => setMobNav(!mobNav)} className='wishlist_icon nav_ham_burger' src="/assets/icons/grid-outline.svg" alt="grid_outline" />
        </div>
      </nav>
      <MobileNav mobNav={mobNav} setMobNav={setMobNav} />
    </>
  )
}

export default Navigation