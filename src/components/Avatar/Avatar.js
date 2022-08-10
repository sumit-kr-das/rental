import { useState } from "react";
import "./avatar.scss";

import {AiOutlineUser,AiFillSetting,AiOutlineLogin} from "react-icons/ai";

const Avatar = () => {
	const [open, setOpen] = useState(false);

  const logOut = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
  }

	return (
		<div className="avatar_container">
			<div className="avatar" onClick={() => setOpen(!open)}>
				<img className="avatar_img" src="/assets/avatar.png" alt="avatar_img" />
			</div>
			{open && (
				<div className="popup">
					<ul>
						<li><AiOutlineUser /><span>Sumit</span></li>
						<li><AiFillSetting /><span>Settings</span></li>
 						<li onClick={logOut}><AiOutlineLogin /><span>Log Out</span></li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Avatar;
