import { useState } from 'react';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import './navigation.scss';


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

  return (
    <>
      <nav className={nav ? 'container active' : 'container'}>
        <div className='left_wrapper'>
          <Link to="/">
            <img src="/assets/logo.png" alt="main_logo" />
          </Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Destination</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">About</Link></li>
          </ul>
        </div>
        <div className='right_wrapper'>
          <img className='wishlist_icon' src="/assets/icons/wishlist.svg" alt="wishlist" />
          <Link className='btn_primary' to="/register">Sign up</Link>
          <img onClick={() => setMobNav(!mobNav)} className='nav_ham_burger' src="/assets/icons/grid-outline.svg" alt="grid_outline" />
        </div>
      </nav>
      <MobileNav mobNav={mobNav} setMobNav={setMobNav} />
    </>
  )
}

export default Navigation