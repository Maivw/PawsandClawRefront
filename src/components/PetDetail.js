import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import AdoptionRequestModal from "./AdoptionRequest";
import { convertAge, convertGender, convertSize } from "./Utils";
import { FaArrowCircleLeft } from "react-icons/fa";
import { displayAPet } from "../reducers/petManagement";
import NavBar from "./NavBar";

export default function PetDetail(props) {
	const pet = useSelector((state) => state.petManagement.pet.pet);
	console.log("get@@@@", pet);
	const id = props.match.params.id;
	console.log("checkkkk2", id);
	const [opened, setOpened] = useState(false);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(displayAPet({ id }));
	}, [id]);

	const opendReqModal = () => {
		setOpened(true);
	};

	const isClosed = () => {
		setOpened(!opened);
	};

	return (
		<div>
			<NavBar />
			<div
				className="container mt-5"
				style={{
					border: "1px solid #6c757d",
					borderRadius: 10,
					boxShadow: "2px 4px 8px 2px rgba(0, 0, 0, 0.5)",
				}}
			>
				<Row className="px-4 py-4 ml=4">
					<AdoptionRequestModal isOpen={opened} toggle={isClosed} pet={pet} />
					<Col>
						{pet && (
							<Row>
								<Col xl="6" lg="6" md="6" xs="12" className="mt-4 mb-4">
									<img
										className="petImage"
										src={pet.photo}
										style={{
											height: 600,
											width: 500,
											objectFit: "cover",
											borderRadius: 10,
											boxShadow: "2px 4px 8px 2px rgba(0, 0, 0, 0.5)",
										}}
									/>
								</Col>
								<Col
									xl="6"
									lg="6"
									md="6"
									xs="12"
									style={{ color: "#1b0c69", lineHeight: 2 }}
								>
									<h1 className="mt-4 mb-5"> {pet.petName}</h1>
									<hr />
									<div style={{ withd: "auto", height: 450 }} className="mt-5">
										<div>
											Age:
											<span style={{ color: "#575656", marginLeft: 5 }}>
												{convertAge(pet.age)}
											</span>
										</div>
										<div>
											Breed:
											<span style={{ color: "#575656", marginLeft: 5 }}>
												{pet.Breed.breedName}
											</span>
										</div>
										<div>
											Size:
											<span style={{ color: "#575656", marginLeft: 5 }}>
												{convertSize(pet.size)}
											</span>
										</div>
										<div>
											Sex:
											<span style={{ color: "#575656", marginLeft: 5 }}>
												{convertGender(pet.sex)}
											</span>
										</div>
										<div>
											IsAdopted:
											<span style={{ color: "#575656", marginLeft: 5 }}>
												{pet.isAdopted ? "Yes" : "No"}
											</span>
										</div>
										<div>
											Is Okay with Kids:
											<span style={{ color: "#575656", marginLeft: 5 }}>
												{pet.isOkayKids ? "Yes" : "No"}
											</span>
										</div>
										<div>
											Is Okay with other pets:{" "}
											<span style={{ color: "#575656", marginLeft: 5 }}>
												{pet.isOkayPets ? "Yes" : "No"}
											</span>
										</div>
										<div>
											Description:
											<span style={{ color: "#575656", marginLeft: 5 }}>
												{pet.description}
											</span>
										</div>
									</div>

									<hr />
									<Row className="mt-5">
										<Col>
											<Link to="/">
												<FaArrowCircleLeft
													style={{
														color: "#b8adf3",
														fontSize: 25,
													}}
												/>
											</Link>
										</Col>
										<Col>
											<Button
												style={{
													backgroundColor: "#b8adf3",
													border: "1px solid white",
												}}
												onClick={opendReqModal}
											>
												<span style={{ color: "#423295" }}>
													Send a message to Shelter
												</span>
											</Button>
										</Col>
									</Row>
								</Col>
							</Row>
						)}
					</Col>
				</Row>
			</div>
		</div>
	);
}
