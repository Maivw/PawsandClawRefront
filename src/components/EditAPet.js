import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
} from "reactstrap";
import { FaArrowCircleLeft } from "react-icons/fa";
import { shelterEditAPet } from "../reducers/petManagement";
import { showBreeds } from "../reducers/inforManagement";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultState = {
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
};

export default function EditAPet(props) {
	const shelterId = useSelector((state) => state.authentication.user.user.id);

	const id = props.match.params.id;
	const dispatch = useDispatch();
	const breeds = useSelector((state) => state.inforManagement.breeds);
	const [fields, setFields] = useState(defaultState);
	useEffect(() => {
		dispatch(showBreeds());
	}, []);

	const onSend = (e) => {
		e.preventDefault();
		const obj = { fields, id };
		dispatch(shelterEditAPet(obj));
		setFields(defaultState);
		toast("Edit successfully!");
	};

	const changeFields = (e) => {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="container mt-5">
			<ToastContainer />
			<Col xs="12" md="9" className="px-4">
				<Card>
					<CardHeader className="d-flex justify-content-between ">
						<span>
							<h4 style={{ color: "blueviolet" }}>EDIT</h4>
						</span>
						<span>
							<Link
								to={`/pets/shelters/${shelterId}`}
								style={{ color: "blueviolet", textDecoration: "none" }}
							>
								<h4> Cancel</h4>
							</Link>
						</span>
						<span>
							<Link to={`/pets/shelters/${shelterId}`}>
								<FaArrowCircleLeft
									style={{
										color: "#b8adf3",
										fontSize: 25,
									}}
								/>
							</Link>
						</span>
					</CardHeader>
					<CardBody className="px-4 mt-2">
						<Form
							action=""
							method="post"
							encType="multipart/form-data"
							className="form-horizontal "
						>
							<InputGroup className="mb-3 shadow">
								<Input
									type="text"
									name="petName"
									value={fields.petName}
									placeholder="Pet Name"
									onChange={changeFields}
								/>
							</InputGroup>
							<InputGroup className="mb-3 shadow">
								<Input
									type="text"
									name="photo"
									placeholder="Image Url"
									value={fields.photo}
									onChange={changeFields}
								/>
							</InputGroup>
							<InputGroup className="mb-3 shadow">
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
							<InputGroup className="mb-3 shadow">
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
							<InputGroup className="mb-3 shadow">
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
							<InputGroup className="mb-3 shadow">
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
										<Label className="form-check-label" check htmlFor="male">
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
										<Label className="form-check-label" check htmlFor="female">
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
										<Label className="form-check-label" check htmlFor="yes">
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
										<Label className="form-check-label" check htmlFor="no">
											No
										</Label>
									</FormGroup>
								</Col>
							</InputGroup>
							<InputGroup className="mb-3">
								<Col md="6" lg="6" xl="6" xs="12">
									<Label htmlFor="isOkayPets">is Okay with other pets</Label>
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
										<Label className="form-check-label" check htmlFor="yes">
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
										<Label className="form-check-label" check htmlFor="no">
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
										<Label className="form-check-label" check htmlFor="yes">
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
										<Label className="form-check-label" check htmlFor="no">
											No
										</Label>
									</FormGroup>
								</Col>
							</InputGroup>
						</Form>
					</CardBody>
					<Col className="d-flex justify-content-sm-end mb-3">
						<Button
							style={{
								backgroundColor: "#b8adf3",
								border: "1px solid white",
							}}
							onClick={onSend}
						>
							<span style={{ color: "#423295" }}>Edit</span>
						</Button>
					</Col>
				</Card>
			</Col>
		</div>
	);
}
