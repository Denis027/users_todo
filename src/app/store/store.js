import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersListReducer from "./reducers/usersListSlice";

const rootReducer = combineReducers({
    usersList: usersListReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export default setupStore;
