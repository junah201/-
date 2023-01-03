import React from "react";

const FlatButton = (props) => {
	return (
		<a
			href={props.target}
			style={{
				backgroundColor: "transparent",
				color: "#ffffff",
				border: "0.2vw solid #ffffff",
				fontSize: "2vw",
				padding: "0.6vw",
				textDecoration: "none",
			}}
		>
			{props.text}
		</a>
	);
};

export default FlatButton;
