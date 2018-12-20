import { combineReducers } from "redux";

// Importing Reducers
import authenticationReducer from "./authenticationReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
    auth: authenticationReducer,
    task: taskReducer
});

export default rootReducer;