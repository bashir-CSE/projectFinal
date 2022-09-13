import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./ExploreMore.css";
function ExploreMore(props) {
	const services = [
		{
			name: "Medical profile",
			img: "https://image.freepik.com/free-vector/healthcare-smart-card-abstract-concept-illustration-manage-patient-identity-practitioners-pharmacists-secure-access-medical-records-improved-communication_335657-884.jpg",
			link: "/MedicalProfile",
		},
		{
			name: "my records",
			img: "https://rescript.nz/wp-content/uploads/2020/05/online-prescriptions.png",
			link: "/MyRecord",
		},
		{
			name: "my family",
			img: "https://image.freepik.com/free-vector/illustration-family-healthcare_53876-40783.jpg",
			link: "/MyfamilyPage",
		},

		{
			name: "First aid",
			img: "https://image.freepik.com/free-vector/medical-service-set-icons_24877-51551.jpg",
			link: "/Firstaid",
		},
		{
			name: "Hospital near me",
			img: "https://image.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg",
			link: "/HospitalNearMe",
		},
		{
			name: "Pharmacy near me",
			img: "https://image.freepik.com/free-vector/pharmacy-medical-shop-concept_74855-7815.jpg",
			link: "/PharmecyNearMe",
		},
	];
	const { user, logout, photoURL } = useAuth();
	return (
		<div>
			{/* {user.email && ( */}
			<div id='services' className='row g-5 mt-5'>
				<h1 className='text-center'>Services</h1>
				{services.map((service) => {
					return (
						<div className='col col-sm-4'>
							<div className='card text-center text-capitalize text-dark'>
								<Link to={service.link} className='text-decoration-none'>
									<div className='img-container'>
										<img src={service.img} className='card-img-top '></img>
									</div>
									<div className='card-body'>
										<h5 className='card-text text-dark'>{service.name}</h5>
									</div>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
			{/* )} */}
		</div>
	);
}

export default ExploreMore;
