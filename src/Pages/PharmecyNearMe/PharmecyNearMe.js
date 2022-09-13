import React from 'react'
import BackBtn from '../../BackBtn/BackBtn';

function PharmecyNearMe() {
  return (
		<div className='container mx-auto text-center text-capitalize'>
			<h1>pharmacy near me</h1>
			<hr />
			<div className='btn btn-primary text-light'>
				<a
					href='https://www.google.com.bd/maps/search/pharmacy+near+me/@24.0082413,90.2428829,13z/data=!3m1!4b1?hl=en'
					className='text-light text-decoration-none'>
					finde here
				</a>
			</div>
			<br />
			<BackBtn />
		</div>
	);
}

export default PharmecyNearMe
