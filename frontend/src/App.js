import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState, useEffect } from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/protectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js"
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
import NotFound from "./component/layout/Not Found/NotFound.js";
function App() {

	const { isAuthenticated, user } = useSelector((state) => state.user);

	const [stripeApiKey, setStripeApiKey] = useState("");

	async function getStripeApiKey() {
		const { data } = await axios.get("/api/v1/stripeapikey");

		setStripeApiKey(data.stripeApiKey);
	}

	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Roboto", "Droid Sans", "Chilanka"],
			},
		});

		store.dispatch(loadUser());

		getStripeApiKey();
	}, []);

	 window.addEventListener("contextmenu", (e) => e.preventDefault());

	return (
		<Router>
			<Header />

			{isAuthenticated && <UserOptions user={user} />}

			{stripeApiKey && (
				<Elements stripe={loadStripe(stripeApiKey)}>
					<Routes>
						<Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
							<Route path="/process/payment" exact element={<Payment />} />
						</Route>
					</Routes>
				</Elements>
			)}

			<Routes>
				{/* Public Routes Here */}
				<Route path="/" element={<Home />} />

				<Route path="/product/:id" element={<ProductDetails />} />

				<Route path="/products" element={<Products />} />

				<Route path="/products/:keyword" element={<Products />} />

				<Route path="/search" element={<Search />} />

				<Route path="/contact" element={<Contact />} />

				<Route path="/about" element={<About />} />

				{/* PROTECTED ROUTE*/}
				<Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
					<Route path="/account" element={<Profile />} />

					<Route path="/password/update" element={<UpdatePassword />} />

					<Route path="/me/update" exact element={<UpdateProfile />} />

					<Route path="/login/shipping" exact element={<Shipping />} />

					<Route path="/success" exact element={<OrderSuccess />} />

					<Route path="/orders" exact element={<MyOrders />} />

					<Route path="/order/confirm" exact element={<ConfirmOrder />} />

					<Route path="/order/:id" exact element={<OrderDetails />} />
				</Route>

				{/* Admin Protected Route */}
				<Route element={<ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} />}>
					<Route path="/admin/dashboard" element={<Dashboard />} />

					<Route path="/admin/products" element={<ProductList />} />

					<Route path="/admin/product" element={<NewProduct />} />

					<Route path="/admin/product/:id" element={<UpdateProduct />} />

					<Route path="/admin/orders" element={<OrderList />} />

					<Route path="/admin/order/:id" element={<ProcessOrder />} />

					<Route path="/admin/users" element={<UsersList />} />

					<Route path="/admin/user/:id" element={<UpdateUser />} />

					<Route path="/admin/reviews" element={<ProductReviews />} />
				</Route>

				<Route path="/password/forgot" exact element={<ForgotPassword />} />

				<Route path="/password/reset/:token" exact element={<ResetPassword />} />

				<Route path="/login" element={<LoginSignUp />} />

				<Route path="/cart" element={<Cart />} />

				<Route element={window.location.pathname === "/process/payment" ? null : <NotFound />}  />

			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
