import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import { Link, Redirect } from "react-router-dom";
import {
	Button,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from "reactstrap";
import { signupasAnAdopter } from "../../reducers/authentication";
import { FaUserAlt, FaPhoneAlt, FaLock } from "react-icons/fa";

export default function SignUpAdopter(props) {
	const token = useSelector((state) => state.authentication.user.token);
	const dispatch = useDispatch();
	const [inputFields, setInputFields] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		phoneNum: "",
		password: "",
		confirmPassword: "",
	});
	const onChangeInputFields = (e) => {
		e.persist();
		const { name, value } = e.target;
		setInputFields((prev) => ({ ...prev, [name]: e.target.value }));
	};

	const onSignUpAdopter = (e) => {
		e.preventDefault();
		dispatch(signupasAnAdopter(inputFields));
	};
	if (token) {
		return <Redirect to="/homeAdopter" />;
	}
	return (
		<>
			<div>
				<div>
					<InputGroup className="mb-3 shadow">
						<p style={{ color: "#575656", marginTop: 10 }}>
							If you're looking for a new furry companion, please fill out the
							form!
						</p>
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<FaUserAlt />
							</InputGroupText>
						</InputGroupAddon>
						<Input
							type="text"
							placeholder="FirstName"
							name="firstName"
							value={inputFields.firstName}
							onChange={onChangeInputFields}
						/>
					</InputGroup>
					<InputGroup className="mb-3 shadow">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<FaUserAlt />
							</InputGroupText>
						</InputGroupAddon>
						<Input
							type="text"
							placeholder="LastName"
							name="lastName"
							value={inputFields.lastName}
							onChange={onChangeInputFields}
						/>
					</InputGroup>
					<InputGroup className="mb-3 shadow">
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<FaUserAlt />
							</InputGroupText>
						</InputGroupAddon>
						<Input
							type="text"
							placeholder="Username"
							autoComplete="username"
							name="username"
							value={inputFields.userame}
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
							autoComplete="email"
							name="email"
							value={inputFields.email}
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
							autoComplete="username"
							name="phoneNum"
							value={inputFields.phoneNum}
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
							autoComplete="new-password"
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
							placeholder="Confirm password"
							autoComplete="new-password"
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
						onClick={onSignUpAdopter}
					>
						Create Account
					</Button>
				</div>
			</div>
		</>
	);
}
