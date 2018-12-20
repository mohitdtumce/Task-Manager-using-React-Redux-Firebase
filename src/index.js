import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Importing Assets
import './assets/styles/index.css';

// Importing Container
import App from './containers/App';
import { Provider } from "react-redux";

import store from "./store";
store.subscribe(() => {
    console.log("Store updated", store.getState());
})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
