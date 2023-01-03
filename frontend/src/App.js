import React from "react";
import { Route, Routes, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<h1>About</h1>} />
				<Route path="/posts" element={<h1>About</h1>} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
			</Routes>
		</div>
	);
}

export default App;
