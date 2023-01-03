import React from "react";

const buttonStyle = {
	backgroundColor: "transparent",
	color: "#ffffff",
};

const LoginButton = (props) => {
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
				<a href="/login" style={buttonStyle}>
					Login
				</a>
				<div
					style={{
						width: "2vw",
					}}
				/>
				<a href="/signup" style={buttonStyle}>
					Sign up
				</a>
			</div>
		</div>
	);
};

export default LoginButton;
