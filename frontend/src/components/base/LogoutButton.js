import React from "react";

import { setCookie } from "../../utils/cookie";

const buttonStyle = {
	backgroundColor: "transparent",
	color: "#ffffff",
};

const LogoutButton = (props) => {
	const logoutHandler = () => {
		setCookie("access_token", "");
		setCookie("token_type", "");
		setCookie("username", "");
		setCookie("is_login", false);
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
