import { 
    createStore,
    applyMiddleware,
    compose
  } from 'redux'

  import thunk from 'redux-thunk'

  import { createLogger } from 'redux-logger'

  import rootReducer from './reducers'
  
  const initialState = {}

  const middleware = [thunk]

  if (__DEV__ === true) {
    middleware.push(createLogger({}));
  }

  const store = createStore(
      rootReducer, 
      initialState, 
      compose(
        applyMiddleware(...middleware),
      )
    )

  export default store