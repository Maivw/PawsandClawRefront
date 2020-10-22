import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Col,
	Row,
	Form,
	FormGroup,
	Input,
	InputGroup,
	Label,
	Button,
	Modal,
	ModalHeader,
	ModalFooter,
} from "reactstrap";

import {
	displayAllPetsShelter,
	shelterEditAPet,
	displayAPet,
} from "../reducers/petManagement";
import { showBreeds } from "../reducers/inforManagement";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditAPet(props) {
	const { pet, toggle, isOpen } = props;
	const dispatch = useDispatch();
	const breeds = useSelector((state) => state.inforManagement.breeds);
	const [fields, setFields] = useState({
		petName: pet.petName,
		photo: pet.photo,
		breedId: pet.breedId,
		age: pet.age,
		size: pet.size,
		description: pet.description,
		sex: pet.sex,
		isOkayKids: "true",
		isOkayPets: "true",
		isAdopted: "false",
	});
	useEffect(() => {
		dispatch(showBreeds());
	}, []);

	const onSend = (e) => {
		e.preventDefault();
		const obj = { fields, id: pet.id };
		dispatch(shelterEditAPet(obj));
		toast("Edit successfully!");
		dispatch(displayAPet({ id: pet.id }));
		dispatch(displayAllPetsShelter({ id: pet.shelterId }));
		toggelModal();
	};
	const toggelModal = () => {
		props.toggle(!isOpen);
		dispatch(displayAllPetsShelter({ id: pet.shelterId }));
	};
	const changeFields = (e) => {
		const { name, value } = e.target;
		setFields((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Modal
			isOpen={isOpen}
			toggle={toggle}
			pet={pet}
			style={{ width: "100%", height: 430 }}
		>
			<ModalHeader
				toggle={toggle}
				style={{
					backgroundColor: "#b8adf3",
					border: "1px solid white",
					color: "blueviolet",
					fontSize: "1.75rem",
				}}
			>
				EDIT YOUR PET
			</ModalHeader>

			<div className="container mt-5">
				<ToastContainer />
				<Col xs="12" md="12" xl="12" className="px-4">
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
								<option value="2">Young (1-3)</option>
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

					<ModalFooter>
						<Row>
							<Col md="8" lg="8" xl="8" xs="8" sm="8"></Col>
							<Col
								className="d-flex justify-content-around"
								md="4"
								lg="4"
								xl="4"
								xs="6"
								sm="6"
							>
								<Button
									style={{
										backgroundColor: "#b8adf3",
										border: "1px solid white",
										marginRight: 20,
									}}
									onClick={onSend}
								>
									<span style={{ color: "#423295" }}>Edit</span>
								</Button>
								<Button color="secondary" onClick={toggle}>
									Cancel
								</Button>
							</Col>
						</Row>
					</ModalFooter>
				</Col>
			</div>
		</Modal>
	);
}
