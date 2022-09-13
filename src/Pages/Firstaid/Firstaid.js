import React, { useEffect, useState } from "react";
import { Accordion, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackBtn from "../../BackBtn/BackBtn";

function Firstaid() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const aids = [
		{
			desc: "fever fdffgh ghf ghfghfgh ghdfhdf gh",
			name: "cut",
			img: "https://images.unsplash.com/photo-1609840534277-88833ef3ddeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		},
		{
			desc: "frscture dfgjlfig  fgllkfhg o gsjhvv os ",
			name: "fever",
			img: "https://media.istockphoto.com/photos/boy-measuring-fever-picture-id528290460?b=1&k=20&m=528290460&s=170667a&w=0&h=53cQoNLUszvaIt9xZ9RKs7E6l9a55aNKgd8uknQGerE=",
		},
		{
			desc: "jhdskjh  dh dhkdh o adh cyfh idfo aouo",
			name: "insects bite",
			img: "https://image.freepik.com/free-photo/mosquito_1150-7972.jpg?w=740",
		},
		{
			desc: "jhdskjh  dh dhkdh o adh cyfh idfo aouo",
			name: "Fructure",
			img: "https://image.freepik.com/free-photo/doctor-helping-patient-with-fractured-leg_53876-139573.jpg?w=740",
		},
		{
			desc: "jhdskjh  dh dhkdh o adh cyfh idfo aouo",
			name: "sprain",
			img: "https://image.freepik.com/free-photo/blue-splint-ankle-bandaged-leg-cast-male-patient-white-background-isolated-sports-injury-concept_169016-7232.jpg?w=360",
		},
		{
			desc: "jhdskjh  dh dhkdh o adh cyfh idfo aouo",
			name: "burn",
			img: "data:image/jpeg;base64,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",
		},
	];
	return (
		<div className='container mx-auto '>
			<div className='row g-5'>
				<h1 className='text-center'>FirstAid</h1>
				{aids.map((aid) => {
					return (
						<div className='col col-sm-4'>
							<div className='card text-center text-capitalize text-dark'>
								<div>
									{/* <Link to={aid.link} className='text-decoration-none'> */}
									<div className='img-container'>
										<img src={aid.img} className='card-img-top '></img>
									</div>
									<div className='card-body'>
										<h5 className='card-text text-dark'>{aid.name}</h5>
									</div>
									{/* </Link> */}
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* <div>
				<Accordion defaultActiveKey='0'>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Accordion Item #1</Accordion.Header>
						<Accordion.Body>lorem100000</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey='1'>
						<Accordion.Header>Accordion Item #2</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div> */}
			{/* <BackBtn/> */}
		</div>
	);
}

export default Firstaid;
