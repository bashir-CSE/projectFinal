import React from "react";

function DoctorPage() {
	return (
		<div>
			<h1 className="text-center text-capitalize">doctor</h1>
			<div class='input-group mx-auto w-50'>
				<input
					type='text'
					class='form-control'
					placeholder="Search patient"
					aria-label="Recipient's username"
					aria-describedby='basic-addon2'
				/>
				<div className="btn btn-primary">search</div>
			</div>
		</div>
	);
}

export default DoctorPage;
