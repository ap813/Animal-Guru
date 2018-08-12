import React from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './components/Home'
import PostForm from './components/PostForm'
import ListDogs from './components/ListDogs'
import ListCats from './components/ListCats'
import Volunteer from './components/Volunteer';

/* Main Container */

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="Background">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/volunteer" component={Volunteer} />
          <Route exact path="/dogs" component={ListDogs} />
          <Route exact path="/cats" component={ListCats} />
          <Route exact path="/signup" component={PostForm} />
        </Switch>
      </Router>
    </div>
  </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root