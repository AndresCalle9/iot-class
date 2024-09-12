import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorldApp'
import {NewOne} from './OtherComp'
import {Component} from './Props'
import {CounterApp} from './CounterAppComp'

import './styles.css';

// functional component, punto de entrada de la aplicación
// function App() {
//     return (
//         <div>
//         <h1>Hola mundo Chao</h1>
//         </div>
//     );
// }

const test = 45;

// renderizar el componente
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    {console.log('Hola mundo')},
    {/* // <App />
    // <NewOne />
    // <Component title="Hola" subTitle="Muchachos" test={test} />
    //Como mandar un número, primero ejemplificar con strings
    // <Component title="Hola" subTitle="Mundo" test = {123} /> */}
    <CounterApp value = {108} />
    </>
)