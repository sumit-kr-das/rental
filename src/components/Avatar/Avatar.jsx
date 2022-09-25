import "./avatar.scss";

const Avatar = ({ setSettings }) => {
	return (
		<div onClick={() => setSettings(true)} className="avatar_container">
			<div className="avatar">
				<img className="avatar_img" src="/assets/avatar.png" alt="avatar_img" />
			</div>
		</div>
	);
};

export default Avatar;
