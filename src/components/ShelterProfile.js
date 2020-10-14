import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { shelterProfileShowUp } from "../reducers/authentication";
import { displayAllReqs } from "../reducers/inforManagement";
import {
	Card,
	CardBody,
	CardHeader,
	Table,
	Button,
	CardText,
	CardTitle,
	CardSubtitle,
	Row,
	Col,
} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Navbar from "./NavBar";

function SampleNextArrow(props) {
	const { className, onClick } = props;
	return (
		<div>
			<FaArrowCircleRight
				onClick={onClick}
				className={className}
				style={{ color: "#b8adf3", fontSize: 25 }}
			/>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return (
		<div>
			<FaArrowCircleLeft
				onClick={onClick}
				className={className}
				style={{ color: "#b8adf3", fontSize: 25 }}
			/>
		</div>
	);
}

export default function ShelterProfile(props) {
	const shelterId = useSelector((state) => state.authentication.user.user.id);
	const requests = useSelector((state) => state.inforManagement.requests);
	const dispatch = useDispatch();
	useEffect(() => {
		const data = {};
		dispatch(displayAllReqs(data, id));
	}, []);
	const { id } = useParams();

	const pets = useSelector((state) => state.petManagement.shelterPets);
	const user = useSelector((state) => state.authentication.userProfile);

	useEffect(() => {
		dispatch(shelterProfileShowUp({ id }));
	}, []);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div>
			<Navbar shelterId={shelterId} />
			<div className="container mt-5">
				<Row>
					<Col xs="12" md="4">
						<Card
							className="shadow"
							style={{ height: "100%", borderRadius: 10 }}
						>
							<CardHeader>
								<h4 style={{ color: "blueviolet" }}>Your Profile</h4>
							</CardHeader>
							<CardBody>
								{user && (
									<div style={{ lineHeight: 2, color: "#423295" }}>
										<div>
											<strong> Name:</strong>
											<span style={{ marginLeft: 5 }}>{user.shelterName}</span>
										</div>
										<div>
											<strong> Email:</strong>
											<span style={{ marginLeft: 5 }}>{user.email}</span>
										</div>
										<div>
											<strong> Website:</strong>
											<span style={{ marginLeft: 5 }}>{user.website}</span>
										</div>
										<div>
											<strong> Phone:</strong>
											<span style={{ marginLeft: 5 }}>{user.phoneNum}</span>
										</div>
										<div>
											<strong> Address:</strong>
											<span style={{ marginLeft: 5 }}>{user.address}</span>
										</div>
										<div>
											<strong> State:</strong>
											<span style={{ marginLeft: 5 }}>{user.city}</span>
										</div>
										<div>
											<strong> ZipCode:</strong>
											<span style={{ marginLeft: 5 }}>{user.zipCode}</span>
										</div>
									</div>
								)}
							</CardBody>
						</Card>
					</Col>
					<Col xs="12" md="8">
						<Slider {...settings}>
							{pets &&
								pets.map((pet) => {
									return (
										<div key={pet.id} style={{ border: "1px solid red" }}>
											<Col xl="6" lg="6" md="6" xs="12">
												<Card
													style={{
														width: "200%",
														boxShadow: "2px 4px 8px 2px rgba(0, 0, 0, 0.2)",
														borderRadius: 10,
													}}
												>
													<img
														top
														width="100%"
														height="400px"
														src={pet.photo}
														alt="Card image cap"
														style={{
															objectFit: "cover",
															boxShadow: "2px 4px 8px 2px rgba(0, 0, 0, 0.2)",
															borderTopLeftRadius: 10,
															borderTopRightRadius: 10,
														}}
													/>
													<CardBody>
														<CardTitle>Name: {pet.petName}</CardTitle>
														<CardSubtitle>Age: {pet.age}</CardSubtitle>
														<CardText>Breed: {pet.Breed.breedName}</CardText>
														<div className="d-flex justify-content-sm-between">
															<Link to={`/pets/edit/${pet.id}`}>
																<Button
																	style={{
																		backgroundColor: "#b8adf3",
																		border: "1px solid white",
																	}}
																>
																	<span style={{ color: "#423295" }}>Edit</span>
																</Button>
															</Link>
														</div>
													</CardBody>
												</Card>
											</Col>
										</div>
									);
								})}
						</Slider>
					</Col>
				</Row>
				<h4
					className="px-4 d-flex justify-content-between mt-4"
					style={{ color: "#423295" }}
				>
					<strong>Your Request:</strong>
					<strong style={{ textDecoration: "none" }}>
						<Link to={`/pets/edit/shelters/${id}`}>
							<span style={{ color: "#423295" }}>List Pets</span>
						</Link>
					</strong>
					<strong style={{ textDecoration: "none" }}>
						<Link to={`/pets/new`}>
							<span style={{ color: "#423295" }}>Creat a pet</span>
						</Link>
					</strong>
				</h4>
				<div className="shadow">
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
			</div>
			);
		</div>
	);
}
