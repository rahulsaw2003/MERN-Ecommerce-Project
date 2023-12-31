import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, isAdmin, children }) => {
	const { loading, user } = useSelector((state) => state.user);

	
	if(!isAuthenticated) {
		return <Navigate to="/login" />;
	}

	if (isAdmin === true && user.role !== "admin") {
		return <Navigate to="/account" />;
	}
	

	return children ? children : <Outlet /> ;
};

export default ProtectedRoute;

// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Route, Routes } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
// 	const { loading, isAuthenticated, user } = useSelector((state) => state.user);

// 	return (
// 		<Fragment>
// 				{loading === false && (
// 					<Route
// 						{...rest}
// 						render={(props) => {
// 							if (isAuthenticated === false) {
// 								return <Navigate to="/login" />;
// 							}

// 							if (isAdmin === true && user.role !== "admin") {
// 								return <Navigate to="/login" />;
// 							}

// 							return <Component {...props} />;
// 						}}
// 					/>
// 				)}
			
// 		</Fragment>
// 	);
// };

// export default ProtectedRoute;
