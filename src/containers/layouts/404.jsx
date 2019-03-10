import React from 'react';
import { Link } from 'react-router-dom';

const NoRoute = () => (
	<div className="container noRoute">
		<h1>404, Page not found</h1>
		<span>
			Uh-oh! Looks like the page you are trying to access, does not exist.
			Please start afresh.
		</span>
		<Link to="/" className="btn btn-primary">
			Go Back Home
		</Link>
	</div>
);

export default NoRoute;
