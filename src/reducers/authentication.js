import axios from "../config/axiosConfig";
const SET_TOKEN = "SET_TOKEN";
const SET_PROFILE = "SET_PROFILE";
const SET_TOKEN_SHELTER = "SET_TOKEN_SHELTER ";
const SET_USER = "SET_USER ";
const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = (token) => ({ type: SET_TOKEN, token });
export const setProfile = (userProfile) => ({ type: SET_PROFILE, userProfile });
export const setTokenShelter = (tokenShelter) => ({
	type: SET_TOKEN_SHELTER,
	tokenShelter,
});
export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setUser = (user) => ({ type: SET_USER, user });

export const shelterProfileShowUp = (params) => async (dispatch) => {
	const result = await axios.get(`/shelters/${params.id}`);

	return dispatch(setProfile(result.data.shelterUser));
};

export const adopterProfileShowUp = (params) => async (dispatch) => {
	const result = await axios.get(`/users/${params.id}`);
	console.log("setProfile", result.data.user);

	return dispatch(setProfile(result.data.user));
};

export const loginAdopter = (params) => async (dispatch) => {
	const result = await axios.post("/users/login", params);
	dispatch(setUser({ ...result.data, token: result.data.token }));
};

export const loginShelter = (params) => async (dispatch) => {
	const result = await axios.post("/shelters/login", params);

	dispatch(
		setUser({
			...result.data,
			token: result.data.tokenShelter,
		})
	);
};

export const signupasAnAdopter = (params) => async (dispatch) => {
	console.log("singupParams", params);
	const result = await axios.post("/users", { ...params });
	dispatch(setUser(result.data));
};

export const signupShelter = (params) => async (dispatch) => {
	const result = await axios.post("/shelters", { ...params });
	dispatch(
		setUser({
			...result.data,
			token: result.data.tokenShelter,
		})
	);
};

export const logout = (params) => async (dispatch) => {
	dispatch(removeToken());
};
const initState = {
	user: { token: "", user: { id: "" } },
};
export default function reducer(state = initState, action) {
	switch (action.type) {
		case SET_TOKEN: {
			return {
				...state,
				token: action.token,
			};
		}

		case REMOVE_TOKEN: {
			return initState;
		}

		case SET_USER: {
			return {
				...state,
				user: action.user,
			};
		}

		case SET_PROFILE: {
			return {
				...state,
				userProfile: action.userProfile,
			};
		}

		default:
			return state;
	}
}
