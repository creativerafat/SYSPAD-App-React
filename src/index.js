import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Splash from './views/splash'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Splash} path="/" />
        <Route exact component={Home} path="/home" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
