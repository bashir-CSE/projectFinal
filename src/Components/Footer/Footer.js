import React from "react";
import {
	FaFacebookF,
	FaYoutube,
	FaGooglePlusSquare,
	FaLinkedin,
	FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
	return (
		<footer className='container py-5 text-center text-capitalize mt-5'>
			<div className='row mt-5'>
				<div className='col-6 col-md-4'>
					<h4>information</h4>
					<hr className='  mx-auto' />
					<div className='text-start'>
						<li className='list-unstyled fw-bold'>
							<Link to='/AboutUs'>About Us</Link>
						</li>
						<li className='list-unstyled fw-bold'>FAQ</li>
					</div>
				</div>
				<div className='col-6 col-md-4'>
					<h4>community</h4>
					<hr className='  mx-auto' />
					<div className='text-start'>
						<FaFacebookF className='text-primary fw-bold' /> facebook
						<br />
						<FaYoutube className='text-danger fw-bold' /> youtube
						<br />
						<FaGooglePlusSquare className='text-danger fw-bold' /> google plus{" "}
						<br />
						<FaLinkedin className='text-primary fw-bold' /> linkedin <br />
						<FaTwitterSquare className='text-primary fw-bold' /> twitter
					</div>
				</div>
				<div className='col-6 col-md-4'>
					<h4>Misc</h4>
					<hr className='  mx-auto' />
					<div className='text-start'>
						<li className='list-unstyled fw-bold'>terms and conditions</li>
						<li className='list-unstyled fw-bold'>privacy policy</li>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

{
	/* <div className='logo_section'>
					<p>Follow us: </p>
					<div className='icon d-flex gap-2 '>
						<FaFacebookF />




					</div>
				</div> */
}
