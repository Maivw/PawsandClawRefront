import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Table } from "reactstrap";
import { adopterProfileShowUp } from "../reducers/authentication";
import { displayAllReqsOfAdopters } from "../reducers/inforManagement";
import Navbar from "./NavBar";
export default function AdopterProfile(props) {
	const { id } = useParams();

	const adopter = useSelector((state) => state.authentication.userProfile);
	console.log("nguoinuoi", adopter);
	const requests = useSelector((state) => state.inforManagement.requests);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(adopterProfileShowUp({ id }));
	}, []);
	useEffect(() => {
		const data = {};
		dispatch(displayAllReqsOfAdopters(data, id));
	}, []);

	return (
		<div>
			<Navbar />
			<Container
				className="mt-5"
				style={{
					borderRadius: 10,
					backgroundColor: "#f8f4f4",
					padding: "20px 20px 20px 20px",
				}}
			>
				{adopter && (
					<Col style={{ lineHeight: 2, color: "#423295" }} className="px-5">
						<Row style={{ marginTop: 20 }}>
							<strong> Name:</strong>
							<span style={{ marginLeft: 5 }}>{adopter.username}</span>
						</Row>
						<Row>
							<strong>Email: </strong>
							<span style={{ marginLeft: 5 }}>{adopter.email}</span>
						</Row>
						<Row>
							<strong>First Name:</strong>
							<span style={{ marginLeft: 5 }}>{adopter.firstName}</span>
						</Row>
						<Row>
							<strong>Last Name:</strong>
							<span style={{ marginLeft: 5 }}>{adopter.lastName}</span>
						</Row>
					</Col>
				)}
				<h4
					className="px-4 d-flex justify-content-between"
					style={{ color: "#423295" }}
				>
					<strong>Your Request:</strong>
					<strong style={{ textDecoration: "none" }}>
						<Link to="/preferredPet">
							<span style={{ color: "#423295" }}>Find Pets</span>
						</Link>
					</strong>
				</h4>
				<div className="px-4">
					<Table
						bordered
						className="mt-4"
						style={{
							borderRadius: 10,
							padding: "0 10px 0 10px",
							color: "#575656",
						}}
					>
						<thead>
							<tr xl="2" lg="2" md="2" xs="6">
								<th>#</th>
								<th>Pet Information</th>
								<th>Shelter Name</th>
								<th>Message</th>
								<th>Send Date</th>
								<th>Is Accepted</th>
							</tr>
						</thead>
						<tbody style={{ marginBottom: 20 }}>
							{requests &&
								requests.map((req, i) => (
									<tr xl="2" lg="2" md="2" xs="6" key={i}>
										<th scope="row">{i + 1}</th>
										<td>
											<Link
												style={{ color: "#575656" }}
												to={`/pets/${req.Pet.id}`}
											>
												{req.Pet.petName}
											</Link>
										</td>
										<td>{req.ShelterUser.shelterName}</td>
										<td>{req.message}</td>
										<td>{req.createdAt}</td>
										<td>{req.isAccepted ? "Yes" : "No"}</td>
									</tr>
								))}
						</tbody>
					</Table>
				</div>
			</Container>
		</div>
	);
}
