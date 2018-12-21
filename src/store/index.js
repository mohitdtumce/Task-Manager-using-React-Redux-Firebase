import { createStore, applyMiddleware, compose } from "redux";

// Import Reducers
import rootReducer from "./reducer";

// Importing Middlewares
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// Importing firebase and firestore
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

// Importing firebase config to connect to the project
import FBConfig from "../config/FBConfig";

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(logger, thunk.withExtraArgument({ getFirebase, getFirestore }), promise()),
        reduxFirestore(FBConfig),
        reactReduxFirebase(FBConfig),
    )
)

export default store;