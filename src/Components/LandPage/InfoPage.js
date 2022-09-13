import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const services = [
	{
		name: "Medicine",
		img: "https://image.freepik.com/free-vector/online-medicine-composition-with-image-smartphone-with-reminder-app-taking-pills_1284-54425.jpg",
		link: "/Medicine",
	},
	{
		name: "vaccine",
		img: "https://image.freepik.com/free-vector/flat-hand-drawn-doctor-injecting-vaccine-patient_23-2148869091.jpg",
		link: "/vaccinePage",
	},
	{
		name: "Doctor's appoinment",
		img: "https://image.freepik.com/free-vector/appointment-booking-smartphone_23-2148559902.jpg",
		link: "/DoctorsAppoint",
	},
];
function InfoPage() {
	return (
		<div id='Reminder' className='row g-5 mt-5'>
			<h1 className='text-center'>Reminder</h1>
			{services.map((service) => {
				return (
					<div className='col col-sm-4'>
						<div className='card text-center text-capitalize text-dark'>
							<Link to={service.link} className='text-decoration-none'>
								<div className='img-container'>
									<img src={service.img} className='card-img-top'></img>
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
	);
}

export default InfoPage;
