import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'
import store from './store'

const app = <Root store = {store} />

ReactDOM.render(app, document.getElementById('root'));
