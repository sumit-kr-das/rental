import { Link } from "react-router-dom"

const MobileNav = ({mobNav, setMobNav}) => {
  return (
    <div onClick={() => setMobNav(false)} className={mobNav ? "mobile_nav_menu" : "mobile_nav_menu show_menu"}>
        <div className="back_menu" onClick={() => setMobNav(false)}>
            <img src="/assets/icons/chevron-back-outline.svg" alt="back_icon" />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Destination</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/">About</Link></li>
        </ul>
    </div>
  )
}

export default MobileNav