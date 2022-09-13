import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { FaGoogle, FaLock, FaSignInAlt } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./LoginPage.css";
export default function LoginPage() {
	const { user, error, loginUser, isLoading, signInUsingGoogle } = useAuth();
	const [loginData, setLoginData] = useState({});

	const location = useLocation();
	const history = useHistory();
	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
		// console.log(loginData);
	};

	const handleLoginSubmit = (e) => {
		loginUser(loginData.email, loginData.password, location, history);
		e.preventDefault();
	};

	const handaleGoogleLogin = () => {
		signInUsingGoogle(location, history);
	};

	return (
		<>
			<h3 className='alert alert-danger mb-0 align-items-center d-flex justify-content-center gap-2 text-center'>
				<FaLock />
				Account Protected
			</h3>
			<div className='container text-capitalize card col-lg-6 py-3 shadow mt-5'>
				{/* {user.email && (
					// <div
					// 	class='alert alert-success mt-2 d-flex align-items-center justify-content-center'
					// 	role='alert'>
					// 	<svg
					// 		class='bi flex-shrink-0 me-2'
					// 		width='24'
					// 		height='24'
					// 		role='img'
					// 		aria-label='Success:'></svg>
					// 	<h5>Login successful...... </h5>
					// </div>
				)} */}
				<h1 className='text-center'>login page</h1>
				<hr />
				<form class='row mx-auto w-50 my-3' onSubmit={handleLoginSubmit}>
					<div class='mb-3'>
						<input
							name='email'
							type='email'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='Enter your Email'
							onBlur={handleOnChange}
						/>
					</div>
					<div class='mb-3'>
						<input
							name='password'
							type='password'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='Your Password'
							onBlur={handleOnChange}
						/>
					</div>

					<div class='col-12'>
						<button type='submit' class='btn btn-primary'>
							<FaSignInAlt /> login
						</button>
					</div>

					<div class='input-group my-3  justify-content-center'>
						<div class='input-group-text'>
							<FaGoogle />
						</div>
						<div
							className='btn btn-outline-dark text-capitalize'
							onClick={handaleGoogleLogin}>
							sign in with google
						</div>
					</div>

					<Link to='/register'>
						<button class='col-12 mt-3 btn btn-outline-dark'>
							New User....?
						</button>
					</Link>
					<Link to='/DoctorPage'>
						<button class='col-12 mt-3 btn btn-outline-dark'>doc</button>
					</Link>
				</form>
				{/* spinner */}
				{isLoading && <Spinner className='text-center' animation='border' />}
				{/* register seccess alert  */}

				{error && (
					<div
						class='alert alert-warning d-flex align-items-center'
						role='alert'>
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
		</>
	);
}
