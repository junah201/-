import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginPage.css";

import { setCookie } from "../utils/cookie";

const LoginPage = () => {
	const navigate = useNavigate();

	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");

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

		fetch("http://127.0.0.1:8000/api/v1/user/login", {
			method: "POST",
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				//"content-type": "application/json",
			},
			body: JSON.stringify({
				username: Username,
				password: Password,
			}),
		}).then((res) => {
			console.log(res);
			if (res.status === 200) {
				setCookie("access_token", res.data.access_token);
				setCookie("token_type", res.data.token_type);
				setCookie("username", res.data.username);
				setCookie("is_login", true);
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
