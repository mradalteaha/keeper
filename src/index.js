import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import store, {Persistor} from './store'



ReactDOM.render(
<Provider store={store}>
<PersistGate loading={null} persistor = {Persistor}>
<App />
</PersistGate>
</Provider>

,document.getElementById("root")); 