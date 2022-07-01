import React from 'react';
import ReactDom from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from './StateProvider'
import reducer from './reducer';
import { initialState } from './reducer';


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <StateProvider initialState={initialState} reducer={reducer}> 
    <App />
   </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
