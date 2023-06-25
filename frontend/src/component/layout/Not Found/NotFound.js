import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="PageNotFound">
			<ErrorIcon />
			<p className="status">Error!</p>
			<br />
			<Typography>Page Not Found </Typography>
			<Link to="/">Home</Link>
		</div>
	);
};

export default NotFound;
