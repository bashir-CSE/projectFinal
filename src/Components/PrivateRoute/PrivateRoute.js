import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
	let { user, isLoading } = useAuth();
	if (isLoading) {
		return <Spinner className='text-center' animation='border' />;
	}
		return (
			<Route
				{...rest}
				render={({ location }) =>
					user.email ? (
						children
					) : (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: location },
							}}
						/>
					)
				}
			/>
		);
}

export default PrivateRoute;
