import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Header.css";
import {
	FaUserCircle,
	FaBars,
	FaGoogle,
	FaSignInAlt,
	FaSignOutAlt,
} from "react-icons/fa";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
function Header() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { user, logout, photoURL } = useAuth();

	const { signInUsingGoogle } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || "/";

	const handaleGoogleLogin = () => {
		signInUsingGoogle().then((result) => {
			const user = result.user;
			history.push(redirect_uri);
			// setUser(user);
			// console.log(user);
		});
	};

	return (
		<>
			<Navbar expand='lg' sticky='top' className='sticky-top nav-bar'>
				<Container>
					<Navbar.Brand>
						<Link className='navbar-brand text-light ' to='/'>
							StoRex
						</Link>
					</Navbar.Brand>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
							<li className='nav-item'>
								<a className='nav-link' href='#services'>
									Services
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link mx-4' href='#Reminder'>
									Reminder
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#Diseases'>
									Diseases
								</a>
							</li>
						</ul>
					</div>

					<li className='fs-6 nav-item text-light  d-flex align-items-center'>
						{user.email && (
							<>
								<small className='text-light text-capitalize me-2'>
									{user.displayName}
								</small>
								<div className='text-center profilePic'>
									<img src={user.photoURL} />
								</div>
							</>
						)}
					</li>
					{/* {user.email ? (
						<button
							className='btn d-flex btn-sm justify-content-center align-items-center gap-2 btn-danger me-2'
							onClick={logout}>
							Logout
							<FaSignOutAlt />
						</button>
					) : (
						<button className='btn btn-outline-primary  me-3'>
							<Link
								to='/login'
								className='text-light text-decoration-none text-capitalize'>
								<FaSignInAlt /> login
							</Link>
						</button>
					)} */}
					<div className='text-light cours' onClick={handleShow}>
						<FaBars />
					</div>

					{/* sidbar start here */}
					<Offcanvas show={show} onHide={handleClose}>
						<Offcanvas.Body className='bg'>
							{/* <Offcanvas.Header closeButton> fgsdg </Offcanvas.Header> */}
							{user.email && (
								<div className='text-center profilePic'>
									<img src={user.photoURL} />
								</div>
							)}
							{!user.email && (
								<>
									<div className='text-center profilePic fs-5'>
										<FaUserCircle />
									</div>

									<li className=' mt-3 text-center nav-item list-unstyled '>
										<button className='btn btn-primary mx-auto text-center nav-item list-unstyled'>
											<Link
												to='/login'
												className='text-light text-decoration-none text-capitalize'>
												<FaSignInAlt /> login
											</Link>
										</button>
									</li>
									<br />
									<p className='text-center'>OR</p>
									<li className=' mt-3 text-center nav-item list-unstyled '>
										<div class='input-group mb-3 justify-content-center'>
											<div class='input-group-text'>
												<FaGoogle />
											</div>
											<div
												className='btn btn-outline-dark text-capitalize'
												onClick={handaleGoogleLogin}>
												sign in with google
											</div>
										</div>
									</li>
								</>
							)}
							<li className='fs-6 nav-item d-flex justify-content-center mt-2 align-items-center'>
								{user.email && (
									<h5 className='text-dark text-capitalize'>
										{user.displayName}
									</h5>
								)}
							</li>
							{user.email && (
								<div className='text-center offcanvasList list-group list-group-flush'>
									<li className='list-group-item nav-item list-unstyled text-decoration-none  '>
										<Link className=' text-decoration-none' to='/'>
											Home
										</Link>
									</li>
									<li className='list-group-item nav-item list-unstyled text-decoration-none'>
										<Link to='/EditProfile' className=' text-decoration-none'>
											Edit profile
										</Link>
									</li>
									<li className='list-group-item nav-item'>
										<a className='nav-link' href='#services'>
											services
										</a>
									</li>
									<li className='list-group-item nav-item'>
										<a className='nav-link' href='#Reminder'>
											Reminder
										</a>
									</li>
									<li className='list-group-item nav-item'>
										<a className='nav-link' href='#Diseases'>
											Diseases
										</a>
									</li>
									<li className='list-group-item nav-item'>
										<Link className='nav-link' to='/AboutUs'>
											About Us
										</Link>
									</li>

									<li>
										{user?.email && (
											<>
												<button
													className='btn-danger btn justify-content-center align-items-center gap-2 mt-3 fw-5 mx-auto d-flex text-uppercase'
													onClick={logout}>
													logout
													<FaSignOutAlt />
												</button>
											</>
										)}
									</li>
								</div>
							)}
						</Offcanvas.Body>
					</Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
