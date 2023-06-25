import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import {FaSearch} from 'react-icons/fa';
import {BsFillCartCheckFill} from 'react-icons/bs'
import { FaUserAlt } from "react-icons/fa";
const options = {
	burgerColorHover: "#eb4034",
	logo,
	logoWidth: "20vmax",
	navColor1: "white",
	logoHoverSize: "10px",
	logoHoverColor: "#eb4034",
	link1Text: "Home",
	link2Text: "Products",
	link3Text: "Contact",
	link4Text: "About",
	link1Url: "/",
	link2Url: "/products",
	link3Url: "/contact",
	link4Url: "/about",
	link1Size: "1.5vmax",
	link1Color: "rgba(35, 35, 35,0.8)",
	nav1justifyContent: "flex-end",
	nav2justifyContent: "flex-end",
	nav3justifyContent: "flex-start",
	nav4justifyContent: "flex-start",
	link1ColorHover: "#eb4034",
	link1Margin: "1vmax",
	searchIcon: true,
	profileIcon: true,
	cartIcon: true,
	SearchIconElement: FaSearch,
	CartIconElement: BsFillCartCheckFill,
	ProfileIconElement: FaUserAlt,
	searchIconMargin: "1vmax",
	profileIconMargin: "1vmax",
	cartIconMargin: "1vmax",
	profileIconUrl: "/login",
	profileIconColor: "rgba(35, 35, 35,0.8)",
	searchIconColor: "rgba(35, 35, 35,0.8)",
	cartIconColor: "rgba(35, 35, 35,0.8)",
	searchIconSize: "2.2vmax",
	profileIconSize: "2.2vmax",
	cartIconSize: "2.2vmax",
	profileIconColorHover: "#eb4034",
	searchIconColorHover: "#eb4034",
	cartIconColorHover: "#eb4034",
};

const Header = () => {
	return <ReactNavbar {...options} />;
};

export default Header;