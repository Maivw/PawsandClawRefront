import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
	Card,
	CardBody,
	CardHeader,
	Col,
	Form,
	FormGroup,
	Input,
	InputGroup,
	Label,
	Button,
	Container,
	Row,
} from "reactstrap";

import { postANewPet } from "../reducers/petManagement";
import { showBreeds } from "../reducers/inforManagement";
import NavBar from "./NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateNewPet(props) {
	const shelterId = useSelector((state) => state.authentication.user.user.id);

	const dispatch = useDispatch();
	const [file, setFile] = useState("");
	const [imageFile, setImageFile] = useState("");
	const breeds = useSelector((state) => state.inforManagement.breeds);
	const [fields, setFields] = useState({
		petName: "",
		photo: "",
		breedId: "",
		age: "",
		size: "",
		description: "",
		sex: 1,
		isOkayKids: "true",
		isOkayPets: "true",
		isAdopted: "false",
	});
	useEffect(() => {
		dispatch(showBreeds());
	}, []);

	const onSend = (e) => {
		e.preventDefault();
		var data = new FormData();
		data.append("petName", fields.petName);
		data.append("photo", file);
		data.append("breedId", fields.breedId);
		data.append("age", fields.age);
		data.append("size", fields.size);
		data.append("description", fields.description);
		data.append("sex", fields.sex);
		data.append("isOkayKids", fields.isOkayKids);
		data.append("isOkayPets", fields.isOkayPets);
		data.append("isAdopted", fields.isAdopted);

		dispatch(postANewPet(data));
		toast("Add a pet successfully!");
	};
	const handleChangeUpload = (e) => {
		setImageFile(URL.createObjectURL(e.target.files[0]));
		setFile(e.target.files[0]);
	};
	const changeFields = (e) => {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<>
			<NavBar shelterId={shelterId} />
			<ToastContainer />
			<div className="app flex-row align-items-center mt-5">
				<Container>
					<Row className="justify-content-center " style={{ lineHeight: 2 }}>
						<Col xs="12" md="9">
							<Card>
								<CardHeader>
									<h3 style={{ color: "blueviolet" }}>ADD A PET</h3>
								</CardHeader>
								<CardBody>
									<Form
										action=""
										method="post"
										encType="multipart/form-data"
										className="form-horizontal"
									>
										<InputGroup className="mb-3">
											<Input
												type="text"
												name="petName"
												value={fields.petName}
												placeholder="Pet Name"
												onChange={changeFields}
											/>
										</InputGroup>

										<InputGroup className="mb-3">
											<Input
												type="select"
												name="breedId"
												placeholder="breed"
												value={fields.breedId}
												onChange={changeFields}
											>
												<option>Breed</option>
												{breeds &&
													breeds.map((b) => {
														return (
															<option key={b.id} value={b.id}>
																{b.breedName}
															</option>
														);
													})}
											</Input>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="select"
												name="age"
												placeholder="Age"
												value={fields.age}
												onChange={changeFields}
											>
												<option>Age</option>
												<option value="1">Puppy (0-1)</option>
												<option value="2">Young (1-3</option>
												<option value="3">Middle Aged (3-7)</option>
												<option value="4">Adult (7-10)</option>
												<option value="5">Mature (10+)</option>
											</Input>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="select"
												name="size"
												placeholder="Size"
												value={fields.size}
												onChange={changeFields}
											>
												<option>Size</option>
												<option value="1">Toy</option>
												<option value="2">Small</option>
												<option value="3">Medium</option>
												<option value="4">Large</option>
												<option value="5">X-large</option>
											</Input>
										</InputGroup>
										<InputGroup className="mb-3">
											<Input
												type="textarea"
												name="description"
												id="exampleText"
												placeholder="Description"
												value={fields.description}
												onChange={changeFields}
											/>
										</InputGroup>
										<InputGroup className="mb-3">
											<Col md="6" lg="6" xl="6" xs="12">
												<Label htmlFor="sex">Sex</Label>
											</Col>
											<Col md="6" lg="6" xl="6" xs="12">
												<FormGroup check inline>
													<Input
														className="form-check-input"
														type="radio"
														id="male"
														name="sex"
														value="1"
														checked={fields.sex === "1"}
														onChange={changeFields}
													/>
													<Label
														className="form-check-label"
														check
														htmlFor="male"
													>
														Male
													</Label>
												</FormGroup>
												<FormGroup check inline>
													<Input
														className="form-check-input"
														type="radio"
														id="female"
														name="sex"
														value="2"
														checked={fields.sex === "2"}
														onChange={changeFields}
													/>
													<Label
														className="form-check-label"
														check
														htmlFor="female"
													>
														Female
													</Label>
												</FormGroup>
											</Col>
										</InputGroup>
										<InputGroup className="mb-3">
											<Col md="6" lg="6" xl="6" xs="12">
												<Label htmlFor="isOkayKid">is Okay with Kids</Label>
											</Col>
											<Col md="6" lg="6" xl="6" xs="12">
												<FormGroup check inline>
													<Input
														className="form-check-input"
														type="radio"
														id="yes"
														name="isOkayKid"
														value="true"
														checked={fields.isOkayKids === "true"}
														onChange={changeFields}
													/>
													<Label
														className="form-check-label"
														check
														htmlFor="yes"
													>
														Yes
													</Label>
												</FormGroup>
												<FormGroup check inline>
													<Input
														className="form-check-input"
														type="radio"
														id="no"
														name="isOkayKid"
														value="false"
														checked={fields.isOkayKids === "false"}
														onChange={changeFields}
													/>
													<Label
														className="form-check-label"
														check
														htmlFor="no"
													>
														No
													</Label>
												</FormGroup>
											</Col>
										</InputGroup>
										<InputGroup className="mb-3">
											<Col md="6" lg="6" xl="6" xs="12">
												<Label htmlFor="isOkayPets">
													is Okay with other pets
												</Label>
											</Col>
											<Col md="6" lg="6" xl="6" xs="12">
												<FormGroup check inline>
													<Input
														className="form-check-input"
														type="radio"
														id="yes"
														name="isOkayPets"
														value="true"
														checked={fields.isOkayPets === "true"}
														onChange={changeFields}
													/>
													<Label
														className="form-check-label"
														check
														htmlFor="yes"
													>
														Yes
													</Label>
												</FormGroup>
												<FormGroup check inline>
													<Input
														className="form-check-input"
														type="radio"
														id="no"
														name="isOkayPets"
														value="false"
														checked={fields.isOkayPets === "false"}
														onChange={changeFields}
													/>
													<Label
														className="form-check-label"
														check
														htmlFor="no"
													>
														No
													</Label>
												</FormGroup>
											</Col>
										</InputGroup>
										<InputGroup className="mb-3">
											<Col md="6" lg="6" xl="6" xs="12">
												<Label htmlFor="isAdopted">is adopted</Label>
											</Col>
											<Col md="6" lg="6" xl="6" xs="12">
												<FormGroup check inline>
													<Input
														className="form-check-input"
														type="radio"
														id="yes"
														name="isAdopted"
														value="true"
														checked={fields.isAdopted === "true"}
														onChange={changeFields}
													/>
													<Label
														className="form-check-label"
														check
														htmlFor="yes"
													>
														Yes
													</Label>
												</FormGroup>
												<FormGroup check inline>
													<Input
														className="form-check-input"
														type="radio"
														id="no"
														name="isAdopted"
														value="false"
														checked={fields.isAdopted === "false"}
														onChange={changeFields}
													/>
													<Label
														className="form-check-label"
														check
														htmlFor="no"
													>
														No
													</Label>
												</FormGroup>
											</Col>
										</InputGroup>
									</Form>
								</CardBody>
								<Col className="d-flex justify-content-sm-end mb-3">
									<InputGroup className="mb-3">
										<Input
											name="image_url"
											type="file"
											placeholder="Image file"
											value={fields.photo}
											onChange={handleChangeUpload}
											style={{
												color: "blueviolet",
												boder: "1px solid  blueviolet ",
											}}
										/>
									</InputGroup>
									<Button
										style={{
											backgroundColor: "#b8adf3",
											border: "1px solid white",
										}}
										onClick={onSend}
									>
										<span
											style={{
												color: "#423295",
												display: "flex",
												justifyContent: "flex-end",
											}}
										>
											Add
										</span>
									</Button>
								</Col>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
