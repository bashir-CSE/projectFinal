import React from "react";
import BackBtn from "../../BackBtn/BackBtn";
import { FaSistrix } from "react-icons/fa";
function MyfamilyPage() {
	return (
		<div className='container mt-4 text-capitalize'>
			<h1 className='text-center mb-3'>My family</h1>
			{/* <BackBtn /> */}
			<div class='input-group mb-3 w-50 mx-auto'>
				<div className='btn btn-primary'>add family members</div>
				<input
					type='text'
					class='form-control'
					aria-label='Sizing example input'
					aria-describedby='inputGroup-sizing-default'
				/>
				<span
					class='btn btn-outline-primary input-group-text'
					id='inputGroup-sizing-default'>
					<FaSistrix /> Search
				</span>
			</div>
			<br />
			<div
				className='btn btn-primary d-flex justify-content-center align-items-center w-25 mx-auto'
				data-bs-toggle='modal'
				data-bs-target='#exampleModal'>
				create family member's profile
			</div>
			{/* <!-- Modal --> */}
			<div
				class='modal fade'
				id='exampleModal'
				tabindex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'>
				<div class='modal-dialog'>
					<div class='modal-content'>
						<div class='modal-header'>
							<button
								type='button'
								class='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div class='modal-body'>
							<div class='mb-3'>
								<label for='exampleFormControlInput1' class='form-label'>
									Name
								</label>
								<input
									type='email'
									class='form-control'
									id='exampleFormControlInput1'
									placeholder='name'
								/>
							</div>
							<div class='mb-3'>
								<label for='exampleFormControlTextarea1' class='form-label'>
									description
								</label>
								<textarea
									class='form-control'
									id='exampleFormControlTextarea1'
									placeholder='description'
									rows='2'></textarea>
							</div>
							<div class='mb-3'>
								<label for='exampleFormControlInput1' class='form-label'>
									date
								</label>
								<input
									type='date'
									class='form-control'
									id='exampleFormControlInput1'
									placeholder=''
								/>
							</div>
							<div class='mb-3'>
								<label for='formFile' class='form-label'>
									Default file input example
								</label>
								<input class='form-control' type='file' id='formFile' />
							</div>
						</div>
						<div class='modal-footer'>
							<button type='button' class='btn btn-outline-primary'>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyfamilyPage;
