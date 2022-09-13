import React from 'react'
import BackBtn from '../../BackBtn/BackBtn';

function HospitalNearMe() {
  return (
		<div className='container mx-auto text-center'>
			<h1>HospitalNearMe</h1>
			<hr />
			<div className='btn btn-primary text-light'>
				<a href='https://www.google.com.bd/maps/search/hospital+near+me/@24.0079436,90.242883,13.72z?hl=en' className='text-light text-decoration-none' >finde here</a>
			</div>
			<br />
			<BackBtn />
		</div>
	);
}

export default HospitalNearMe
