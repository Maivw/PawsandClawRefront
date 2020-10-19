import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAPet } from "../reducers/petManagement";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function DeleteConfirmModal(props) {
	const dispatch = useDispatch();
	const { isOpen, toggle, pet } = props;
	const onDelete = (pet) => () => {
		dispatch(deleteAPet(pet));
		toggleModal();
	};

	const toggleModal = () => {
		props.toggle(!isOpen);
	};
	return (
		<div>
			<Modal isOpen={isOpen} toggle={toggle} pet={pet}>
				<ModalHeader toggle={toggle}>Please confirm</ModalHeader>
				<ModalBody>
					Delete {<strong>{pet.petName}</strong>} from your pet list?
					<img
						width="100%"
						height="450px"
						src={pet.photo}
						alt="pet"
						style={{ marginTop: 10, objectFit: "contain" }}
					/>
				</ModalBody>
				<ModalFooter>
					<Button
						style={{
							backgroundColor: "#b8adf3",
							border: "1px solid white",
						}}
						onClick={onDelete(pet)}
					>
						Delete
					</Button>
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default DeleteConfirmModal;
