import { create } from "axios";
import { store } from "../index";
import { removeToken } from "../reducers/authentication";

const api = create({
	baseURL: "https://pawsandclaws-backend2.herokuapp.com",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
	timeout: 60000,
});

// Add a request interceptor
api.interceptors.request.use((config) => {
	const state = store.getState();

	return {
		...config,
		headers: {
			...config.headers,
			Authorization: `Bearer ${state.authentication.user.token}`,
		},
	};
});

// Add a response interceptor
// api.interceptors.response.use(
// 	(response) => response,
// 	(error) => {
// 		// Do something with response error
// 		if (error.response.status === 401) {
// 			window.alert("Something went wrong!. Please login again"); //eslint-disable-line
// 			// window.location.reload();
// 			store.dispatch(removeToken());
// 			window.location.href = "/login";
// 		}
// 		return Promise.reject(error.response);
// 	}
// );

export default api;
