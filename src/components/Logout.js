import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../index.css";

import { FaUserAltSlash } from "react-icons/fa";

import { logout } from "../reducers/authentication";

export default function Logout(props) {
	let history = useHistory();
	const dispatch = useDispatch();
	const OnLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		history.push("/login");
	};

	return <FaUserAltSlash className="ml-5" onClick={OnLogout} />;
}
