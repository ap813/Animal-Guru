import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './components/Home'
import PostForm from './components/PostForm';
import ListDogs from './components/ListDogs'
import ListCats from './components/ListCats';

const Router = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/volunteer" component={PostForm} />
        <Route exact path="/dogs" component={ListDogs} />
        <Route exact path="/cats" component={ListCats} />
    </Switch>
)

export default Router