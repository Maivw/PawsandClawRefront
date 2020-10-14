export function convertAge(ageIndex) {
	switch (ageIndex) {
		case 1:
			return "Puppy (0-1)";

		case 2:
			return "Young (1-3)";

		case 3:
			return "Middle Aged (3-7)";

		case 4:
			return "Adult (7-10)";

		case 5:
			return "Mature (10+)";
		default:
			return "Puppy (0-1)";
	}
}

export function convertGender(genderIndex) {
	switch (genderIndex) {
		case 1:
			return "Male";

		case 2:
			return "Female";
		default:
			return "Toy";
	}
}

export function convertSize(sizeIndex) {
	switch (sizeIndex) {
		case 1:
			return "Toy";
		case 2:
			return "Small";

		case 3:
			return "Medium";

		case 4:
			return "Large";

		case 5:
			return "X-Large";
		default:
			return "Toy";
	}
}

export function MatchPets(dogs, prefPet) {
	dogs.forEach((dog) => {
		let count = 0;
		for (let key in prefPet) {
			if (
				prefPet[key] === dog[key] ||
				(key === "breedId" && prefPet.breedId === null)
			) {
				count++;
			}
		}
		dog.matchPercentage = count / 6;
	});
	const bestMatches =
		dogs.filter((dog) => {
			return dog.matchPercentage > 0.65;
		}) || [];
	return bestMatches;
}
