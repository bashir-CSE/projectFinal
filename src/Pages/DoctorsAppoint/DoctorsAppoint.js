import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

function DoctorsAppoint() {
	const { user } = useAuth();
	// medicine information
	const time = new Date().toLocaleTimeString();
	const date = new Date().toLocaleDateString();
	const id = 1;
	const initialInfo = {
		name: "",
		description: "",
		date: date,
		time: time,
		id: id,
		email: user.email,
	};
	const [appointmentInfo, setAppointmentInfo] = useState(initialInfo);
	// console.log(medicineInfo);

	// load data
	// displaying data
	const [appointmentLists, setAppointmentLists] = useState([]);
	useEffect(() => {
		const url = `http://localhost:5000/appointments?email=${user.email}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setAppointmentLists(data));
	}, []);

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		const newInfo = { ...appointmentInfo };
		newInfo[field] = value;
		// console.log(newInfo);
		setAppointmentInfo(newInfo);
	};

	// const handleDltAll = () => {
	// 	setMedicineLists({});
	// };

	const handleSubmit = (e) => {
		e.preventDefault();

		// collect data
		const newAppointmentInfo = {
			...appointmentInfo,
		};
		// console.log(newMedicineInfo);

		// send to server
		fetch("http://localhost:5000/appointments", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(appointmentInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data.insertedId) {
					// window.confirm(`are you sure.....?`);
					// clear the form
					e.target.reset();
				}
				window.location.reload();
			});
	};
	// delet an user
	const handleDelete = (id) => {
		const proceed = window.confirm("Are you sure to delete...?");
		if (proceed) {
			const url = `http://localhost:5000/appointments/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					if (data.deletedCount > 0) {
						// window.confirm("are you sure to delete item....?");
						const remainingAppointments = appointmentLists.filter(
							(item) => item._id !== id
						);
						setAppointmentLists(remainingAppointments);
					}
				});
		}
	};

	return (
		<div className='container my-3'>
			<div className='mx-ao'>
				<h1 className='text-center'>Doctor's Appointments</h1>
				<hr className='w-50 mx-auto' />
			</div>
			<div className='row'>
				<div className='col col-md-4 mx-auto mb-4'>
					<div>
						<div className='card-body'>
							<form onSubmit={handleSubmit} className='mx-auto'>
								<input
									className='form-control mb-3'
									autocomplete='off'
									name='name'
									onBlur={handleOnBlur}
									type='text'
									placeholder='Appointment title'></input>

								<textarea
									className='form-control mb-3'
									name='description'
									onBlur={handleOnBlur}
									placeholder='Description'
									rows='2'></textarea>

								<button type='submit' class='btn btn-primary mb-3'>
									add
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				{!appointmentLists.length == 0 && (
					<h2>appointments : {appointmentLists.length}</h2>
				)}

				<hr />
				<table class='table table-hover'>
					{!appointmentLists.length == 0 && (
						<thead>
							<tr>
								<th scope='col'>ID</th>
								<th scope='col'>Name</th>
								<th scope='col'>Description</th>
								<th scope='col'>Time</th>
								<th scope='col'>email</th>
								<th scope='col'></th>
							</tr>
						</thead>
					)}
					<tbody>
						{appointmentLists.map((item, index) => {
							console.log(item);
							return (
								<tr key={index} title={`ID : ${item._id}`}>
									<th scope='row'>{index + 1}</th>
									<td>{item.name}</td>
									<td>{item.description}</td>
									<td>{item.date}</td>
									<td>{item.email}</td>
									<td>
										<div
											title='are you sure?'
											className='btn btn-sm btn-outline-danger'
											onClick={() => handleDelete(item._id)}>
											<FaTrashAlt />
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
export default DoctorsAppoint;
