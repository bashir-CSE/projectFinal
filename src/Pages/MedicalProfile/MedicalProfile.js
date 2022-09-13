import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

function MedicalProfile() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const { register, handleSubmit, reset } = useForm();
	const { user } = useAuth();
	const time = new Date().toLocaleTimeString();
	const date = new Date().toLocaleDateString();

	const [inpData, setInpData] = useState([]);

	// load data
	// displaying data
	const [usersLists, setUsersLists] = useState([]);
	useEffect(() => {
		const url = `http://localhost:5000/profiles?email=${user.email}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setUsersLists(data);
				console.log(usersLists);
			});
	}, []);

	const onSubmit = (data) => {
		const Info = {
			height: data.height,
			weight: data.weight,
			gender: data.gender,
			dob: data.dob,
			blood: data.blood,
			marital: data.marital,
			corona: data.corona,
			allergies: data.allergies,
			Diabetes: data.Diabetes,
			bloodpressure: data.bloodpressure,
			heart: data.heart,
			kidney: data.kidney,
			email: user.email,
		};
		setInpData(Info);
		// console.log(inpData);
		// send to server
		// fetch("http://localhost:5000/profiles?email=${user.email}", {
		fetch(`http://localhost:5000/profiles?email=${user.email}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(inpData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					reset();
					alert(`hi`);
				}
				window.location.reload();
			});
	};

	return (
		<div className="container">
			<Button variant='primary' onClick={handleShow}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{" "}
					<form className='mx-auto mt-2' onSubmit={handleSubmit(onSubmit)}>
						<input
							placeholder='email'
							className='mb-3 form-control'
							type='email'
							disabled
							value={user.email}
							{...register("email")}
						/>
						<input
							placeholder='height'
							className='mb-3 form-control'
							type='number'
							{...register("height")}
						/>

						<input
							placeholder='weight'
							className='mb-3 form-control'
							type='number'
							{...register("weight")}
						/>

						<div className='mb-3 row'>
							<label for='inputPassword' className='col-sm-3 col-form-label'>
								gender:
							</label>
							<div className='col-sm-9'>
								<select
									{...register("gender")}
									className='form-select form-select-sm'
									aria-label='.form-select-sm example'>
									<option value='female'>female</option>
									<option value='male'>male</option>
									<option value='other'>other</option>
								</select>
							</div>
						</div>
						<input
							className='mb-3 form-control'
							type='date'
							{...register("dob")}
						/>
						<div className='mb-3 row'>
							<label for='inputPassword' className='col-sm-3 col-form-label'>
								blood group:
							</label>
							<div className='col-sm-9'>
								<select
									{...register("blood")}
									className='form-select form-select-sm'
									aria-label='.form-select-sm example'>
									<option selected>select one</option>
									<option value='A+'>A+</option>
									<option value='A'>A-</option>
									<option value='B+'>B+</option>
									<option value='B-'>B-</option>
									<option value='AB+'>AB+</option>
									<option value='AB-'>AB-</option>
									<option value='O+'>O+</option>
									<option value='O-'>O-</option>
								</select>
							</div>
						</div>
						<div className='mb-3 row'>
							<label for='inputPassword' className='col-sm-3 col-form-label'>
								marital status:
							</label>
							<div className='col-sm-9'>
								<select
									{...register("marital")}
									className='form-select form-select-sm text-capitalize'
									aria-label='.form-select-sm example'>
									<option selected>select one</option>
									<option value='Single'>Single</option>
									<option value='married'>married</option>
									<option value='unmarried'>unmarried</option>
									<option value='divorced'>divorced</option>
									<option value='widow'>widow</option>
								</select>
							</div>
						</div>
						<h4 className='text-start mt-4'>medical conditions:</h4>
						<div className='mb-3 row'>
							<label for='inputPassword' className='col-sm-3 col-form-label'>
								Corona:
							</label>
							<div className='col-sm-9'>
								<select
									{...register("corona")}
									className='form-select form-select-sm text-capitalize'
									aria-label='.form-select-sm example'>
									<option selected>no</option>
									<option value='yes'>yes</option>
								</select>
							</div>
						</div>
						<div className='my-3 row'>
							<label for='inputPassword' className='col-sm-3 col-form-label'>
								Allergies:
							</label>
							<div className='col-sm-9'>
								<select
									{...register("allergies")}
									className='form-select form-select-sm text-capitalize'
									aria-label='.form-select-sm example'>
									<option selected>select one</option>
									<option value='yes'>yes</option>
									<option value='no'>no</option>
								</select>
							</div>
						</div>
						<div className='mb-3 row'>
							<label for='inputPassword' className='col-sm-3 col-form-label'>
								Diabetes:
							</label>
							<div className='col-sm-9'>
								<select
									{...register("Diabetes")}
									className='form-select form-select-sm text-capitalize'
									aria-label='.form-select-sm example'>
									<option selected>no</option>
									<option value='yes'>yes</option>
								</select>
							</div>
						</div>
						<div className='mb-3 row'>
							<label for='inputPassword' className='col-sm-3 col-form-label'>
								blood pressure:
							</label>
							<div className='col-sm-9'>
								<select
									{...register("bloodpressure")}
									className='form-select form-select-sm text-capitalize'
									aria-label='.form-select-sm example'>
									<option selected>no</option>
									<option value='yes'>yes</option>
								</select>
							</div>
						</div>
						<div className='mb-3 row'>
							<label for='inputPassword' className='col-sm-3 col-form-label'>
								heart problem:
							</label>
							<div className='col-sm-9'>
								<select
									{...register("heart")}
									className='form-select form-select-sm text-capitalize'
									aria-label='.form-select-sm example'>
									<option selected>no</option>
									<option value='yes'>yes</option>
								</select>
							</div>
						</div>
						<div className='mb-3 row'>
							<label for='inputPassword' className='col-sm-3 col-form-label'>
								kidney problem:
							</label>
							<div className='col-sm-9'>
								<select
									{...register("kidney")}
									className='form-select form-select-sm text-capitalize'
									aria-label='.form-select-sm example'>
									<option selected>no</option>
									<option value='yes'>yes</option>
								</select>
							</div>
						</div>

						<input className="btn btn-primary" type='submit' onClick={handleClose} />
					</form>
				</Modal.Body>
			</Modal>

			<div class='row'>
				{/* {!usersLists.length == 0 && (

				)} */}
				<div class='col-sm-4 text-star'>
					{usersLists.map((item, index) => {
						const {
							bloodpressure,
							corona,
							height,
							weight,
							kidney,
							marital,
							_id,
							email,
							dob,
							gender,
							heart,
							Diabetes,
							allergies,
							blood,
						} = item;
						console.log(item.email);
						return (
							<div class='card' key={index}>
								<div class='card-body text-capitalize'>
									<h4 class='card-title'>name: {user.displayName}</h4>
									<h5 class='card-title'>email: {user.email}</h5>
									<p class='card-text'>height: {height}</p>
									<p class='card-text'>weight: {weight}</p>
									<p class='card-text'>gender: {gender}</p>
									<p class='card-text'>date of birth: {dob}</p>
									<p class='card-text'>blood group: {blood}</p>
									<p class='card-text mb-2'>marital status: {marital}</p>
									<br />
									<h3 class='card-text'>medical conditions</h3>
									<hr />
									<p class='card-text'>corona: {corona}</p>
									<p class='card-text'>allergies: {allergies}</p>
									<p class='card-text'>Diabetes: {Diabetes}</p>
									<p class='card-text'>blood pressure: {bloodpressure}</p>
									<p class='card-text'>heart: {heart}</p>
									<p class='card-text'>kidney: {kidney}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default MedicalProfile;
