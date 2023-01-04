import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";

import { LoginContext } from "../context/LoginContext";

import { setCookie } from "../utils/cookie";

const LoginPage = () => {
	const navigate = useNavigate();

	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");

	const { setIsLogin } = useContext(LoginContext);

	const onUsernameHandler = (event) => {
		setUsername(event.currentTarget.value);
	};

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (Username.length < 2) {
			return alert("username은 2자 이상이어야 합니다.");
		}

		if (Password.length < 6) {
			return alert("password는 6자 이상이어야 합니다.");
		}

		var details = {
			username: Username,
			password: Password,
		};

		var formBody = [];
		for (var property in details) {
			var encodedKey = encodeURIComponent(property);
			var encodedValue = encodeURIComponent(details[property]);
			formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");

		fetch("http://127.0.0.1:8000/api/v1/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: formBody,
		}).then((res) => {
			if (res.status === 200) {
				const data = res.json();
				setCookie("access_token", data.access_token);
				setCookie("token_type", data.token_type);
				setCookie("username", data.username);
				setCookie("is_login", true);
				setIsLogin("true");
				navigate(`/`);
				return;
			}
			if (res.status === 401) {
				alert("Incorrect username or password");
				return;
			}
			alert("알 수 없는 오류, 로그인에 실패하였습니다.");
		});
	};

	return (
		<main className="SignupPage">
			<form onSubmit={onSubmitHandler}>
				<label>Username</label>
				<input type="text" value={Username} onChange={onUsernameHandler} />
				<br />
				<br />
				<label>Password</label>
				<input type="password" value={Password} onChange={onPasswordHandler} />
				<br />
				<button>Submit</button>
			</form>
		</main>
	);
};

export default LoginPage;
