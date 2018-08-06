import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './components/Home'
import PostForm from './components/PostForm';

const Router = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/volunteer" component={PostForm} />
    </Switch>
)

export default Router