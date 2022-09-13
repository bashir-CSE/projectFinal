import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackBtn from "../../BackBtn/BackBtn";
import "./DisisDitails.css";

function DisisDitails() {
	const { id } = useParams();
	const url = `http://localhost:5000/users/${id}`;
	const [disis, setDisis] = useState({});
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setDisis(data));
	}, []);
	return (
		<div className="container">
			<div className='d-flex justify-content-center align-items-center my-2'>
				<div>
					<h1>{disis.name}</h1>
					<p>{disis.description}</p>
					<h1>{disis.typs}</h1>
				</div>
			</div>
			<BackBtn />
		</div>
	);
}
export default DisisDitails;
