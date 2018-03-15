import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {apollo} from './config/apollo'
import Routes from './config/routes'

const App = (
  <div>
    {/*<Nav/>*/}
    <Routes/>
  </div>
)
const AppWrapper = (
  
  <ApolloProvider client={apollo}>
    <MuiThemeProvider>
      <Router>
        {App}
      </Router>
    </MuiThemeProvider>
  </ApolloProvider>
)

ReactDOM.render(
  AppWrapper,
  document.getElementById('root'),
)
