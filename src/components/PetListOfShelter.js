import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Row,
	Col,
} from "reactstrap";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { displayAllPetsShelter, deleteAPet } from "../reducers/petManagement";
import Navbar from "./NavBar";
export default function PetsListOfShelter(props) {
	const pets = useSelector((state) => state.petManagement.shelterPets);
	const [pup, setPup] = useState({ pet: {} });
	const { id } = useParams();
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(displayAllPetsShelter({ id }));
	}, []);
	// const onDelete = (pet) => () => {
	// 	console.log("PET", pet);
	// 	dispatch(deleteAPet(pet));
	// 	setModal(!modal);
	// };

	const openModal = (pet) => () => {
		console.log("PPPP", pet);
		setModal(!modal);
		setPup((prev) => ({ ...prev, pet: pet }));
	};
	return (
		<>
			<div>
				<Navbar shelterId={id} />
				<Row className="justify-content-center">
					<Col xl="9" lg="9" md="9" xs="12">
						<Row>
							{pets &&
								pets.map((pet) => {
									return (
										<>
											<DeleteConfirmModal
												pet={pup.pet}
												toggle={toggle}
												isOpen={modal}
											/>
											<Col
												xl="3"
												lg="3"
												md="3"
												xs="12"
												className="mt-4"
												key={pet.id}
											>
												<Card
													style={{
														borderRadius: 10,
														boxShadow: "2px 4px 8px 2px rgba(0, 0, 0, 0.2)",
													}}
												>
													<CardImg
														top
														width="100%"
														height="300px"
														src={pet.photo}
														alt="Card image cap"
														style={{
															objectFit: "cover",
															borderTopLeftRadius: 10,
															borderTopRightRadius: 10,
															boxShadow: "2px 4px 8px 2px rgba(0, 0, 0, 0.2)",
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
															<Button
																style={{
																	backgroundColor: "#b8adf3",
																	border: "1px solid white",
																}}
																//onClick={onDelete(pet)}
																onClick={openModal(pet)}
															>
																<span style={{ color: "#423295" }}>Remove</span>
															</Button>
														</div>
													</CardBody>
												</Card>
											</Col>
										</>
									);
								})}
						</Row>
					</Col>
				</Row>
			</div>
		</>
	);
}
