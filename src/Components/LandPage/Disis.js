import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import DisisCard from "./DisisCard";
function Disis() {
	const [datas, setDatas] = useState([]);
	let url = "http://localhost:5000/users";

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => setDatas(json));
	}, []);

	return (
		<div id='Diseases' className='mt-5'>
			<div className='mt-5'>
				<h1 className='text-center text-capitalize '>Diseases section</h1>
				<Row xs={1} lg={3} md={6} className='g-4 text-center'>
					{datas.map((data) => {
						return <DisisCard key={data.id} data={data} />;
					})}
				</Row>
			</div>
		</div>
	);
}

export default Disis;
