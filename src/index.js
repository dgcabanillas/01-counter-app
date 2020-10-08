import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import App from './App';
import './index.css';

const root = document.querySelector("#root");

ReactDOM.render( <CounterApp /> , root ); 
//ReactDOM.render( <App saludo={'Hola, Soy Diego'} /> , root ); 