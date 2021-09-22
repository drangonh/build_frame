import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
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
                component={route.component}
                path={route.path}
              />
            })
          }

          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
