import React, { useState } from "react";
import { Route, Routes, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/PostsPage";
import NotFoundPage from "./pages/NotFoundPage";

import { LoginContext } from "./context/LoginContext";
import { getCookie } from "./utils/cookie";

import "./App.css";

function App() {
	const [isLogin, setIsLogin] = useState(getCookie("is_login"));

	return (
		<LoginContext.Provider
			value={{
				isLogin,
				setIsLogin,
			}}
		>
			<div className="App">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/about" element={<h1>About</h1>} />
					<Route path="/posts" element={<PostsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</LoginContext.Provider>
	);
}

export default App;
