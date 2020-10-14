import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signupShelter } from "../../reducers/authentication";
import { showStates } from "../../reducers/inforManagement";
import {
	Button,
	Form,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from "reactstrap";
import {
	FaUserAlt,
	FaPhoneAlt,
	FaLock,
	FaHome,
	FaCity,
	FaAsterisk,
	FaSun,
} from "react-icons/fa";

export default function SignUpShelter(props) {
	const states = useSelector((state) => state.inforManagement.states);
	const tokenShelter = useSelector((state) => state.authentication.user.token);
	const dispatch = useDispatch();
	const [inputFields, setInputFields] = useState({
		shelterName: "",
		website: "",
		phoneNum: "",
		email: "",
		address: "",
		city: "",
		stateId: "",
		zipCode: "",
		password: "",
		confirmPassword: "",
	});

	const onSubmitSignupShelter = (e) => {
		e.preventDefault();
		dispatch(signupShelter(inputFields));
	};

	const onChangeInputFields = (e) => {
		e.persist();
		const { name, value } = e.target;
		setInputFields((prev) => ({ ...prev, [name]: e.target.value }));
	};

	useEffect(() => {
		dispatch(showStates());
	}, []);

	const [dropdownOpen, setOpen] = useState(false);

	const toggle = () => setOpen(!dropdownOpen);
	if (tokenShelter) {
		return <Redirect to="/homeShelter" />;
	}
	return (
		<div>
			<Form>
				<InputGroup className="mb-3 mt-2 shadow">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaUserAlt />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="ShelterName"
						name="shelterName"
						value={inputFields.shelterName}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3 shadow">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaAsterisk />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="Website URL"
						name="website"
						value={inputFields.website}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3 shadow">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaPhoneAlt />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="PhoneNum"
						name="phoneNum"
						value={inputFields.phoneNum}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3 shadow">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>@</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="Email"
						name="email"
						value={inputFields.email}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3 shadow">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaHome />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="Address"
						name="address"
						value={inputFields.address}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3 shadow">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaCity />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="City"
						name="city"
						value={inputFields.city}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3 shadow">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaSun />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="select"
						name="stateId"
						id="stateId"
						value={inputFields.stateId}
						onChange={onChangeInputFields}
					>
						{states.map((st) => {
							return (
								<option key={st.id} value={st.id} name="stateId">
									{st.stateName}
								</option>
							);
						})}
					</Input>
				</InputGroup>
				<InputGroup className="mb-3 shadow">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaSun />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="text"
						placeholder="Zip Code"
						name="zipCode"
						value={inputFields.zipCode}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-3 shadow">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaLock />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="password"
						placeholder="Password"
						name="password"
						value={inputFields.password}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<InputGroup className="mb-4 shadow">
					<InputGroupAddon addonType="prepend">
						<InputGroupText>
							<FaLock />
						</InputGroupText>
					</InputGroupAddon>
					<Input
						type="password"
						placeholder="Repeat password"
						name="confirmPassword"
						value={inputFields.confirmPassword}
						onChange={onChangeInputFields}
					/>
				</InputGroup>
				<Button
					style={{
						backgroundColor: "#b8adf3",
						border: "1px solid white",
					}}
					block
					shadow
					onClick={onSubmitSignupShelter}
				>
					Create Account
				</Button>
			</Form>
		</div>
	);
}
