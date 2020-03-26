import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import { MobileServiceProvider } from "./components/mobile-service-context";
import MobileService from "./services/mobile-service";

import App from "./components/app";


const mobileService = new MobileService();


ReactDOM.render(
        <Provider store={store}>
            <MobileServiceProvider value={mobileService}>
                <App />
            </MobileServiceProvider>
        </Provider>,
    document.querySelector('#root')
);