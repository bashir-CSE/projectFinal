import React from "react";
import { Carousel } from "react-bootstrap";
import LoginPage from "../LoginPage/LoginPage";
import "./BannerPage.css";
function BannerPage() {
	return (
		<div className='carousel_container_1'>
			<div class='content'>
				<div className='row container mx-auto px-5 text-center'>
					<div class='col-12'>
						<h1>We store with care, for you</h1>
					</div>
					{/* <div class='col-sm-6'>
						<h1>hihello</h1>
					</div> */}
				</div>
			</div>
			<div className='carousel_container'>
				<Carousel fade>
					{/* interval={0} */}
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://image.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?w=826'
							alt='First slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://image.freepik.com/free-vector/hand-drawn-hospital-reception-scene-with-people-wearing-face-masks_23-2148813989.jpg?w=740'
							alt='Second slide'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
							alt='Third slide'
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
}

export default BannerPage;
