import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or whatever storage you are using

import authentication from "../reducers/authentication";
import petManagement from "../reducers/petManagement";
import inforManagement from "../reducers/inforManagement";

const persistConfig = {
	key: "root",
	storage,

	// whitelist: [],

	// blacklist: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	authentication,
	petManagement,
	inforManagement,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = (initialState) => {
	return createStore(
		persistedReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);
};

export default configureStore;
