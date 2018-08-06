import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'

import { BrowserRouter } from 'react-router-dom'

import store from './store'

const app = <BrowserRouter>
    <Root store = {store} />
</BrowserRouter>

ReactDOM.render(app, document.getElementById('root'));
