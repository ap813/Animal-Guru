import React, {Component} from 'react'
import Root from './components/Root'
import store from './store'
import { Provider } from 'react-redux'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}