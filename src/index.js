import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import App from './containers/App'
import store from './services/store'
import './styles/main.css'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
