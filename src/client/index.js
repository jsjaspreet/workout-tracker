// third party imports imports
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// local imports
import store from "./store"
import Root from './views/Root'

// render the routed application
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Root />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("app")
)
