import React from "react";
import ReactDOM from "react-dom";
//import App from './components/app/app';
import {Routes} from './components/messages/routes';
import {Provider} from 'react-redux';
import {store} from './store';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './store'




ReactDOM.render(
 <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
       <Routes/>
    </PersistGate>
  </Provider>
    , document.getElementById("app"));
//ReactDOM.render(<Routes />, document.getElementById("app"));
