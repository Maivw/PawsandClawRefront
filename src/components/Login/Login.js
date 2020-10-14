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
import LoginAdopter from "./LoginAdopter";
import LoginShelter from "./LoginShelter";
import { Link } from "react-router-dom";

export default function Login() {
	const [activeTab, setActiveTab] = useState("1");

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};
	return (
		<>
			<div className="app flex-row align-items-center mt-5">
				<Container>
					<Row className="justify-content-center " style={{ lineHeight: 2 }}>
						<Col xl="9" lg="9" md="9" xs="12">
							<CardGroup>
								<Card className="mx-4 shadow" style={{ borderRadius: 10 }}>
									<CardBody className="p-4">
										<Row>
											<Col>
												<h1 style={{ color: "blueviolet" }}>Login</h1>
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
																	<LoginShelter />
																</Col>
															</Row>
														</TabPane>
														<TabPane tabId="2" style={{ marginTop: 10 }}>
															<Row>
																<Col sm="12">
																	<LoginAdopter />
																</Col>
															</Row>
														</TabPane>
														<Link to="/signup">
															<p
																style={{
																	marginTop: "20%",
																	textAlign: "center",
																	color: "#575656",
																	textDecoration: "none",
																}}
															>
																Need an account? <strong>Register Now!</strong>
															</p>
														</Link>
													</TabContent>
												</div>
											</Col>
											<Col xs="4" sm="4" md="4" lg="4" xl="4">
												<img
													src="https://images.pexels.com/photos/1089394/pexels-photo-1089394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
													alt="loginphoto"
													className="login_photo"
													style={{
														width: 350,
														borderRadius: 10,
														objectFit: "contain",
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
