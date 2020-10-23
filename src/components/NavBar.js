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
	const id = useSelector((state) => state.authentication.user.user.id);
	const role = useSelector((state) => state.authentication.user.role);
	const [collapsed, setCollapsed] = useState(true);
	console.log("ID", id);

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
								<Link
									to={`/shelters/${shelterId}`}
									className="nav-item"
									style={{ color: "white", textDecoration: "none" }}
								>
									<FaUserCheck className="ml-5 mr-2" /> Profile
								</Link>
							</NavItem>
							{/* <NavItem>
								{id ? (
									<Link
										to={`/pets/shelters/${id}`}
										className="nav-item"
										style={{ color: "white", textDecoration: "none" }}
									>
										<FaDog className="ml-5 mr-2" /> My Pets
									</Link>
								) : (
									<Link
										to={`/pets/shelters/${shelterId}`}
										className="nav-item"
										style={{ color: "white", textDecoration: "none" }}
									>
										<FaDog className="ml-5 mr-2" /> My Pets
									</Link>
								)}
							</NavItem> */}
							<NavItem>
								<Link
									to={`/pets/shelters/${id}`}
									className="nav-item"
									style={{ color: "white", textDecoration: "none" }}
								>
									<FaDog className="ml-5 mr-2" /> My Pets
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
								<Link
									to={`/adopters/${adopterId}`}
									className="nav-item"
									style={{ color: "white", textDecoration: "none" }}
								>
									<FaUserCheck className="ml-5 mr-2" /> Profile
								</Link>
							</NavItem>
							<NavItem className="nav-item">
								<Link
									to="/lovepets"
									style={{ color: "white", textDecoration: "none" }}
								>
									<FaHeart className="ml-5 mr-2" /> Wish list
								</Link>
							</NavItem>
							<NavItem className="nav-item">
								<Link
									to="/petslist"
									style={{ color: "white", textDecoration: "none" }}
								>
									<MdPets className="ml-5 mr-2" /> Pet list
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
