import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function Register() {
	const [loginData, setLoginData] = useState({});
	const history = useHistory();
	const { user, error, registerUser, isLoading } = useAuth();

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		console.log(newLoginData);
		setLoginData(newLoginData);
	};

	// console.log(`email: ${loginData.email}, password : ${loginData.password}`);

	const handleRegisterSubmit = (e) => {
		if (loginData.password !== loginData.password2) {
			alert("Please enter right password");
			return;
		}
		registerUser(
			loginData.email,
			loginData.password,
			loginData.userName,
			history
		);
		e.preventDefault();

		e.target.reset();
	};

	return (
		<div className='container text-capitalize card col-lg-6 py-1 shadow mt-5'>
			<h1 className='text-center'>registration</h1>
			<hr />
			{!isLoading && (
				<form class='row mx-auto w-50 mt-2' onSubmit={handleRegisterSubmit}>
					<div class='mb-3'>
						<input
							type='text'
							name='userName'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='Enter your name'
							onBlur={handleOnBlur}
						/>
					</div>

					<div class='mb-3'>
						<input
							type='email'
							name='email'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='Enter your Email'
							onBlur={handleOnBlur}
						/>
					</div>

					<div class='mb-3'>
						<input
							name='password'
							type='password'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='Password'
							onBlur={handleOnBlur}
						/>
					</div>

					<div class='mb-3'>
						<input
							name='password2'
							type='password'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='Re-Type Password'
							onBlur={handleOnBlur}
						/>
					</div>

					<div class='col-12'>
						<button type='submit' class='btn btn-primary'>
							register
						</button>
					</div>

					<Link to='/login'>
						<p class='col-12 btn btn-sm btn-outline-dark mt-3 text-capitalize'>
							allready registerd....?
							<br />
							please login
						</p>
					</Link>
				</form>
			)}
			{/* spinner */}
			{isLoading && <Spinner className='text-center' animation='border' />}
			{/* register seccess alert  */}
			{user.email && (
				<div class='alert alert-success d-flex align-items-center' role='alert'>
					<svg
						class='bi flex-shrink-0 me-2'
						width='24'
						height='24'
						role='img'
						aria-label='Success:'></svg>
					<div>Account successfully created</div>
				</div>
			)}
			{error && (
				<div class='alert alert-warning d-flex align-items-center' role='alert'>
					<svg
						class='bi flex-shrink-0 me-2'
						width='24'
						height='24'
						role='img'
						aria-label='Warning:'></svg>
					<div>{error}</div>
				</div>
			)}
		</div>
	);
}

export default Register;
