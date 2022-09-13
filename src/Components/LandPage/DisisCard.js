import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DisisCard.css";
function DisisCard(props) {
	const { img, id, name, description } = props.data;
	return (
		<div className='col'>
			<div className='card mb-3'>
				<img src={img} class='card-img-top' />
				<div className='card-body '>
					<h2 className='text-capitalize card-title'>{name}</h2>
					<p className='card-text'> {description}</p>
					<div className='mt-5'>
						<Link className='btnn mx-auto' to={`/disisdetails/${id}`}>
							<span className='noselect'>read more</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DisisCard;
