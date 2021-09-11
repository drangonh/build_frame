import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  LoginPage
} from '../page/index'


export const PageRouter: React.FC = () => {
  return (
    <div>
      <Router>
        <Route path='/login' component={LoginPage} />
      </Router>
    </div>
  )
}
