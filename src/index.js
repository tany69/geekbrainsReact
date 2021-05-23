import React from "react";
import ReactDOM from "react-dom";
//import App from './components/app/app';
import {Routes} from './components/messages/routes';
import {Provider} from 'react-redux';
import {store} from './store/index';




//ReactDOM.render(
// <Provider store={store}><Routes /></Provider>, document.getElementById("app"));
ReactDOM.render(<Routes />, document.getElementById("app"));
