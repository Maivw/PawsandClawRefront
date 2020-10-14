import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
} from "reactstrap";
import Logout from "./Logout";
import { FaUserCheck, FaDog, FaHeart } from "react-icons/fa";
import { MdPets } from "react-icons/md";

import { Link } from "react-router-dom";

export default function NavBar(props) {
	const { shelterId, adopterId } = props;
	const role = useSelector((state) => state.authentication.user.role);

	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			{role === "Shelter" ? (
				<Navbar color="faded" light className="color-nav mt-2">
					<NavbarBrand href="/" className="mr-auto ">
						<h1 className="ml-5" style={{ color: "white" }}>
							PawsAndClaws
						</h1>
					</NavbarBrand>
					<NavbarToggler onClick={toggleNavbar} className="mr-2" />
					<Collapse isOpen={!collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<Link to={`/shelters/${shelterId}`} className="nav-item">
									<FaUserCheck className="ml-5" />
								</Link>
							</NavItem>
							<NavItem>
								<Link to={`/pets/shelters/${shelterId}`} className="nav-item">
									<FaDog className="ml-5" />
								</Link>
							</NavItem>
							<NavItem className="nav-item">
								<Logout />
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			) : (
				<Navbar color="faded " light className="color-nav mt-2 w-100">
					<NavbarBrand href="/" className="mr-auto ">
						<h1 className="ml-5" style={{ color: "white" }}>
							PawsAndClaws
						</h1>
					</NavbarBrand>
					<NavbarToggler onClick={toggleNavbar} className="mr-2" />
					<Collapse isOpen={!collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<Link to={`/adopters/${adopterId}`} className="nav-item">
									<FaUserCheck className="ml-5" />
								</Link>
							</NavItem>
							<NavItem className="nav-item">
								<Link to="/lovepets" style={{ color: "white" }}>
									<FaHeart className="ml-5" />
								</Link>
							</NavItem>
							<NavItem className="nav-item">
								<Link to="/petslist" style={{ color: "white" }}>
									<MdPets className="ml-5" />
								</Link>
							</NavItem>
							<NavItem className="nav-item">
								<Logout />
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			)}
		</div>
	);
}
