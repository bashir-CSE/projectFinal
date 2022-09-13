import React, { useEffect, useState } from "react";
import {
	Modal,
	Spinner,
} from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import "./MyRecord.css";

function MyRecord() {
	const { isLoading } = useAuth();
	// modal hide and show
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// input state change
	const [description, setDescription] = useState(``);
	const [fileType, setFileType] = useState(``);
	const [image, setImage] = useState(null);

	// load data from database
	const [recordImgs, setRecordImgs] = useState([]);
	useEffect(() => {
		const url = `http://localhost:5000/myrecords`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setRecordImgs(data));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!image) {
			// alert(`please add aimage`);
			return;
		}
		const formData = new FormData();
		formData.append("description", description);
		formData.append("fileType", fileType);
		formData.append("image", image);

		fetch("http://localhost:5000/myrecords", {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					// window.confirm(`are you sure.....?`);
					// clear the form
					e.target.reset();
					alert("image added successfully");
				}
			})
			.catch((err) => {
				console.error("Error:", err);
			});

		window.location.reload();
	};

	const handleDelete = (id) => {
		const proceed = window.confirm("Are you sure to delete...?");
		if (proceed) {
			const url = `http://localhost:5000/myrecords/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					if (data.deletedCount > 0) {
						// window.confirm("are you sure to delete item....?");
						const remainingRecordImgs = recordImgs.filter(
							(item) => item._id !== id
						);
						setRecordImgs(remainingRecordImgs);
					}
				});
		}
	};
	return (
		<div className='container MyRecord-container mt-2'>
			<h3 className='text-center mb-3 '>MyRecord</h3>
			
			<button className='upload-btn' onClick={handleShow}>
				<img src='https://img.icons8.com/material-outlined/96/000000/add-image.png' />
			</button>

			{/* load doctors to display */}
			<div class='row'>
				{recordImgs.map((item, index) => {
					console.log(item);
					const { image, fileType, description, date, time, _id } = item;

					return (
						<div key={index} class='col-sm-3'>
							<div class='card text-capitalize'>
								<div className='img-container'>
									<img
										class='card-img-top'
										src={`data:image/jpeg;base64,${image}`}
									/>
								</div>
								<div class='card-body'>
									<p class='card-text'>{description}</p>
									<p class='card-text'>
										type: <span className='fw-bold'> {fileType} </span>{" "}
									</p>
									<p class='card-text'>
										<small class='text-muted'>{date}</small>
									</p>
									<div
										className='btn btn-sm btn-outline-danger'
										onClick={() => handleDelete(_id)}>
										<FaTrashAlt />
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			{isLoading && <Spinner className='text-center' animation='border' />}
			{/* modal */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<h3>Add file</h3>
				</Modal.Header>
				<Modal.Body>
					<form class='row g-3' onSubmit={handleSubmit}>
						{/* file upload */}
						<div class='input-group mb-3'>
							<input
								onBlur={(e) => setImage(e.target.files[0])}
								accept='image/*'
								type='file'
								class='form-control'
							/>
						</div>

						{/* description */}
						<textarea
							onBlur={(e) => setDescription(e.target.value)}
							class='form-control'
							placeholder='description'
							aria-label='With textarea'></textarea>

						{/* write file type */}
						<div class='input-group mb-3'>
							<input
								onBlur={(e) => setFileType(e.target.value)}
								type='text'
								className='form-control'
								placeholder='write file type'
							/>
						</div>

						<button type='submit' class='btn btn-primary mb-3'>
							submit data
						</button>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default MyRecord;
