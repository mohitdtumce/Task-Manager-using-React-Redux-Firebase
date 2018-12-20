import { createStore, applyMiddleware } from "redux";

// Import Reducers
import rootReducer from "./reducer";

// Importing Middlewares
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(logger, thunk, promise())
)

export default store;