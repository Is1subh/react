import React, { useState,useEffect} from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
	useEffect(() => {
		document.title = 'Login';
	  }, []);
	const [email, setEmail] = useState("");
	const [password, setpassword] = useState("");
	//authentication
	let navigate = useNavigate();

	useEffect(() => {
		let isAuth = localStorage.getItem("isLoggedIn");
		if (isAuth === true || isAuth === "true") {
			navigate("../dashboard", { replace: true });
		}
	});


	//onchange event handler
	const handleEmail = (event) => {
		setEmail(event.target.value);
	};
	const handlePassword = (event) => {
		setpassword(event.target.value);
	};


	const handlesubmit = async (e) => {
		e.preventDefault();

		axios
			.post("https://reqres.in/api/login", {
				email: email,
				password: password,
			})
			.then((result) => {
				//setting into localstorage
				localStorage.setItem("token", result.data.token);
				localStorage.setItem("isLoggedIn", true);
				navigate("../dashboard", { replace: true });
			})
			.catch((error) => {
				document.getElementById("errorId").innerHTML = "Username/password doesn't exist."
			});
	};


	return (
		<div className="container" id="containerId">
			<p id="errorId"></p>
			<h2 className="mb-3">Login Here</h2>
			<form onSubmit={handlesubmit}>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Username</label>
					<input
						type="text"
						value={email}
						onChange={handleEmail}
						className="form-control"
						id="loginInputEmail"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input
						type="password"
						value={password}
						onChange={handlePassword}
						className="form-control"
						id="loginInputPassword"
						placeholder="Enter Password"
						required
					/>
				</div>

				<button
					type="submit"
					id="buttonId"
					className="btn btn-primary btn-block mt-2 mb-2"
				>
					Login
				</button>
			</form>
			<div>
				<br />
			<p>Username: eve.holt@reqres.in<br/>
			password: cityslicka</p>
		</div>
			
		</div>
		
	);
}
