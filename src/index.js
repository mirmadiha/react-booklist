import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import {Provider} from './context/books'

const el = document.getElementById('root');

const root=ReactDOM.createRoot(el);

root.render(
<Provider value={5}>
    <App/>
</Provider>
);