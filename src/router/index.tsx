import React from 'react'
import {
  BrowserRouter as Router, Redirect, Route,
  Switch
} from 'react-router-dom'
import { HomeRoutes } from './routes'

export const PageRouter: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          {
            HomeRoutes.map((route, index) => {
              return <Route
                key={index.toString()}
                exact
                component={route.component}
                path={route.path}
              />
            })
          }

          <Route path="/">
            <Redirect exact to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
