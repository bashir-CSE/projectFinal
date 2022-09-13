import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

function BackBtn() {
	let history = useHistory();

	function handleClick() {
		history.push("/");
		// history.goBack();
	}

	return (
		<Button variant='danger my-3 px' onClick={handleClick}>
			Go back
		</Button>
	);
}

export default BackBtn;
