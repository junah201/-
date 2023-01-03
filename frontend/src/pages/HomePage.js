import React from "react";

import "./HomePage.css";

import Profile from "../static/images/avatar.jpg";

import LoginButton from "../components/base/LoginButton";
import LogoutButton from "../components/base/LogoutButton";
import FlatButton from "../components/common/FlatButton";

import { getCookie } from "../utils/cookie";

const HomePage = () => {
	const is_login = getCookie("is_login");

	return (
		<>
			{is_login ? <LogoutButton /> : <LoginButton />}
			<div className="HomePage">
				<img src={Profile} alt="profile" />
				<h1>Voyage to Phiosophy</h1>
				<div
					style={{
						display: "flex",
					}}
				>
					<FlatButton text="About Me" target="/about" />
					<div
						style={{
							width: "2vw",
						}}
					></div>
					<FlatButton text="My writings" target="/posts" />
				</div>
			</div>
		</>
	);
};

export default HomePage;
