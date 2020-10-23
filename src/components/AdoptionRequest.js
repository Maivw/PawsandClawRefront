import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendAdoptionRequest } from "../reducers/inforManagement";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
} from "reactstrap";

export default function AdoptionRequestModal(props) {
	const { isOpen, pet } = props;
	const currentPet = props.pet;

	const dispatch = useDispatch();

	const [message, setMessage] = useState("");
	const onChangeMessage = (e) => {
		e.preventDefault();
		setMessage(e.target.value);
	};

	const onSend = (e) => {
		e.preventDefault();

		const data = {
			petId: currentPet.id,
			shelterId: currentPet.shelterId,
			message: message,
			isAccepted: true,
		};
		dispatch(sendAdoptionRequest(data));
		toggleModal();
	};

	const toggleModal = () => {
		props.toggle(!isOpen);
	};
	return (
		<div>
			<Modal isOpen={isOpen} toggle={toggleModal} pet={currentPet}>
				<ModalHeader toggle={toggleModal} style={{ color: "#1b0c69" }}>
					Messge
				</ModalHeader>
				<ModalBody>
					<Input
						type="textarea"
						name="text"
						id="exampleText"
						onChange={onChangeMessage}
					/>
				</ModalBody>
				<ModalFooter>
					<Button
						style={{
							backgroundColor: "#b8adf3",
							border: "1px solid white",
						}}
						onClick={toggleModal}
						onClick={onSend}
					>
						<span style={{ color: "#423295" }}>Send</span>
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}
