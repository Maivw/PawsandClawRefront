import React, { useState } from "react";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Row,
	Col,
	CardBody,
	Container,
	CardGroup,
} from "reactstrap";
import SignUpAdopter from "./SignUpAdopter";
import SignUpShelter from "./SignUpShelter";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function SignUp() {
	const [activeTab, setActiveTab] = useState("1");

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	return (
		<>
			<div className="app flex-row align-items-center mt-5">
				<Container>
					<Row className="justify-content-center">
						<Col xl="12" lg="12" md="12" xs="12">
							<CardGroup>
								<Card className="mx-4 shadow" style={{ borderRadius: 10 }}>
									<CardBody className="p-4">
										<Row>
											<Col>
												<h1 style={{ color: "blueviolet" }}>Register</h1>
												<div>
													<Nav tabs>
														<NavItem>
															<NavLink
																onClick={() => {
																	toggle("1");
																}}
															>
																<span style={{ color: "#575656" }}>
																	As a Shelter
																</span>
															</NavLink>
														</NavItem>
														<NavItem>
															<NavLink
																onClick={() => {
																	toggle("2");
																}}
															>
																<span style={{ color: "#575656" }}>
																	As an Adopter
																</span>
															</NavLink>
														</NavItem>
													</Nav>
													<TabContent activeTab={activeTab}>
														<TabPane tabId="1" style={{ marginTop: 10 }}>
															<Row>
																<Col sm="12">
																	<SignUpShelter />
																</Col>
															</Row>
														</TabPane>
														<TabPane tabId="2" style={{ marginTop: 10 }}>
															<Row>
																<Col sm="12">
																	<SignUpAdopter />
																</Col>
															</Row>
														</TabPane>

														<p
															style={{
																marginTop: "20%",
																textAlign: "center",
																color: "#575656",
															}}
														>
															<Link to="/login">
																<FaArrowCircleLeft
																	style={{
																		color: "#b8adf3",
																		fontSize: 25,
																	}}
																/>
															</Link>
															<span style={{ marginLeft: 10 }}>
																Already have an account?
															</span>
														</p>
													</TabContent>
												</div>
											</Col>
											<Col>
												<img
													// src="https://static1.squarespace.com/static/53b1eedce4b0ea2f4d03027b/56327ffee4b0a942d54710d6/56327fffe4b0ca3d190b3062/1446150144264/ariaL.jpg"
													src="https://images.pexels.com/photos/1089394/pexels-photo-1089394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
													alt="loginphoto"
													className="login_photo"
													style={{
														width: 500,
														borderRadius: 10,
														objectFit: "cover",
													}}
												/>
											</Col>
										</Row>
									</CardBody>
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
