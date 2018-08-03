import React, { Component } from 'react';
import './App.css';
import Post from './components/Post'
import PostForm from './components/PostForm'
import { Provider } from 'react-redux'

import store from './store'

/* Main Container */

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="Middle">
          <PostForm />
          <hr />
          <Post /> 
        </div>
      </Provider>
    );
  }
}

export default App;
 