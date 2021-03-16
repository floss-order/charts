import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
      <Switch>
        <PrivateRoute path="/" component={Home} exact />
        <Route path="/login" component={Login} />
      </Switch>
  )  
}

export default App
