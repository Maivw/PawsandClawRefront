import React from "react";
import Navbar from "./NavBar";
import { Col, Row, Button } from "reactstrap";
import { useSelector } from "react-redux";
import PetsList from "./PetsList";
import Carousel from "./Carousel";
import { Redirect, Link } from "react-router-dom";

export default function Home(props) {
	const role = useSelector((state) => state.authentication.user.role);
	const shelterId = useSelector((state) => state.authentication.user.user.id);
	const adopterId = useSelector((state) => state.authentication.user.user.id);

	return (
		<>
			{shelterId || adopterId ? (
				<div>
					<Navbar shelterId={shelterId} adopterId={adopterId} />
					<Row className="d-flex  justify-content-center mb-4">
						<Col
							xl="10"
							lg="10"
							md="10"
							xs="12"
							style={{
								backgroundColor: "#f8f4f4",
								borderBottomLeftRadius: 10,
								borderBottomRightRadius: 10,
							}}
						>
							<Carousel />
						</Col>
					</Row>

					<div>
						{role === "Adopter" ? (
							<Link to="/preferredPet">
								<Button
									style={{
										backgroundColor: "#b8adf3",
										border: "1px solid white",
										marginLeft: "15%",
									}}
								>
									<span style={{ color: "#423295" }}>Find your wished Pet</span>
								</Button>
							</Link>
						) : (
							<div></div>
						)}
					</div>

					<PetsList />
				</div>
			) : (
				<Redirect to="/login" />
			)}
			);
		</>
	);
}
