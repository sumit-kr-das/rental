import { useState } from 'react'
import './avatar.scss';

const Avatar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="avatar_container">
    <div className='avatar' onClick={() => setOpen(!open)}>
        <img className='avatar_img' src="/assets/avatar.png" alt="avatar_img" />
    </div>{
      open&&(
        <div className="popup">
        <ul>
          <li>Sumit</li>
          <li>Settings</li>
          <li>Log Out</li>
        </ul>
    </div>
      )
    }

    </div>
  )
}

export default Avatar