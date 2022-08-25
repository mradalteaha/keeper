import React from 'react';

import App from "./components/App";
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import store, {Persistor} from './store'


import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
<PersistGate loading={null} persistor = {Persistor}>
    <StrictMode>
      <App />
    </StrictMode>
    </PersistGate>
    </Provider>,

  );

/*
ReactDOM.render(
<Provider store={store}>
<PersistGate loading={null} persistor = {Persistor}>
<App />
</PersistGate>
</Provider>

,document.getElementById("root")); */