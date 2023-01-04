import React, { useState, useContext } from "react";

import "./HomePage.css";

import Profile from "../static/images/avatar.jpg";

import LoginButton from "../components/base/LoginButton";
import LogoutButton from "../components/base/LogoutButton";
import FlatButton from "../components/common/FlatButton";

import { LoginContext } from "../context/LoginContext";

const HomePage = () => {
	const { isLogin } = useContext(LoginContext);

	return (
		<>
			{isLogin === "true" ? <LogoutButton /> : <LoginButton />}

			<div className="HomePage">
				<img src={Profile} alt="profile" />
				<h1>Voyage to Phiosophy</h1>
				<div
					style={{
						display: "flex",
						paddingTop: "1vh",
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
