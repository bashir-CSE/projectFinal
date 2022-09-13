import React, { useState } from "react";
import BackBtn from "../../BackBtn/BackBtn";
import useAuth from "../../hooks/useAuth";
function EditProfile() {
	const { user } = useAuth();

	return (
		<div className='row '>
			<div className='mx-auto my-2 card col-md-4'>
				<h3 className='card-title text-center mt-2'>MyProfile</h3>
				<hr />
				<div className='row g-0 text-capitalize'>
					<div className='col-md-4 d-flex justify-content-center align-items-center'>
						<img className='rounded-3' src={user.photoURL} />
					</div>
					<div className='col-md-8'>
						<div className='card-body'>
							<h6 className='card-text'>name: {user.displayName} </h6>
							<p>Email: {user.email} </p>
							<br />
						</div>
					</div>
				</div>
				<hr />
				<BackBtn />
			</div>
		</div>
	);
}

export default EditProfile;
