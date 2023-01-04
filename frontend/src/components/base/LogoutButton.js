import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { setCookie } from "../../utils/cookie";
import { LoginContext } from "../../context/LoginContext";

const buttonStyle = {
	backgroundColor: "transparent",
	color: "#ffffff",
	border: "none",
	fontSize: "2vw",
};

const LogoutButton = (props) => {
	const { setIsLogin } = useContext(LoginContext);

	const navigate = useNavigate();

	const logoutHandler = () => {
		setCookie("access_token", "");
		setCookie("token_type", "");
		setCookie("username", "");
		setCookie("is_login", false);
		setIsLogin(false);
		navigate(`/`);
	};

	return (
		<div className="Header">
			<div
				style={{
					position: "absolute",
					right: "0",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					padding: "1vw",
				}}
			>
				<button onClick={logoutHandler} style={buttonStyle}>
					Login Out
				</button>
			</div>
		</div>
	);
};

export default LogoutButton;
