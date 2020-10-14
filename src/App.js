import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Logout from "./components/Logout";
import PetsList from "./components/PetsList";
import PetDetail from "./components/PetDetail";
import CreateNewPet from "./components/CreateNewPet";
import ShelterProfile from "./components/ShelterProfile";
import AdopterProfile from "./components/AdopterProfile";
import PetPrefs from "./components/PetPrefs";
import PetsListOfShelter from "./components/PetListOfShelter";
import Home from "./components/Home";
import PetsListOfShelterEdit from "./components/PetsShelterListEdit";
import EditAPet from "./components/EditAPet";
import LovePets from "./components/LovePets";
import PetListWithNavBar from "./components/PetListWithNavBar";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/" component={Home} />
					<Route exact path="/logout" component={Logout} />
					<Route exact path="/pets" component={PetsList} />
					<Route exact path="/petslist" component={PetListWithNavBar} />
					<Route exact path="/pets/new" component={CreateNewPet} />
					<Route exact path="/pets/:id" component={PetDetail} />
					<Route exact path="/pets/edit/:id" component={EditAPet} />
					<Route exact path="/shelters/:id" component={ShelterProfile} />
					<Route exact path="/adopters/:id" component={AdopterProfile} />
					<Route exact path="/preferredPet" component={PetPrefs} />
					<Route exact path="/lovepets" component={LovePets} />
					<Route
						exact
						path="/pets/shelters/:id"
						component={PetsListOfShelter}
					/>
					<Route
						exact
						path="/pets/edit/shelters/:id"
						component={PetsListOfShelterEdit}
					/>
				</Switch>
			</BrowserRouter>
			<div className="cursor"></div>
			<div className="cursor2"></div>
		</>
	);
}

export default App;
