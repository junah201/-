import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignupPage.css";

const SignupPage = () => {
	const navigate = useNavigate();

	const [Email, setEmail] = useState("");
	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");
	const [ConfirmPassword, setConfirmPassword] = useState("");

	const onEmailHandler = (event) => {
		setEmail(event.currentTarget.value);
	};

	const onUsernameHandler = (event) => {
		setUsername(event.currentTarget.value);
	};

	const onPasswordHandler = (event) => {
		setPassword(event.currentTarget.value);
	};

	const onConfirmPasswordHandler = (event) => {
		setConfirmPassword(event.currentTarget.value);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();

		if (Password !== ConfirmPassword) {
			return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
		}

		if (Username.length < 2) {
			return alert("username은 2자 이상이어야 합니다.");
		}

		if (Password.length < 6) {
			return alert("password는 6자 이상이어야 합니다.");
		}

		let body = {
			username: Username,
			password: Password,
			confirm_password: ConfirmPassword,
			email: Email,
		};

		fetch("http://127.0.0.1:8000/api/v1/user/create/", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(body),
		}).then((res) => {
			console.log(res);
			if (res.status === 204) {
				alert("회원가입이 완료되었습니다.");
				navigate(`/`);
				return;
			}
			if (res.status === 409) {
				alert("username 혹은 email 중복입니다. 다시 입력해주세요.");
				return;
			}
			alert("알 수 없는 오류, 회원가입에 실패하였습니다.");
		});
	};

	return (
		<main className="SignupPage">
			<form onSubmit={onSubmitHandler}>
				<label>Username</label>
				<input type="text" value={Username} onChange={onUsernameHandler} />
				<br />
				<label>Email</label>
				<input type="email" value={Email} onChange={onEmailHandler} />
				<br />
				<label>Password</label>
				<input type="password" value={Password} onChange={onPasswordHandler} />
				<br />
				<label>Confirm Password</label>
				<input
					type="password"
					value={ConfirmPassword}
					onChange={onConfirmPasswordHandler}
				/>
				<br />
				<button>Submit</button>
			</form>
		</main>
	);
};

export default SignupPage;
