import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { HomeRoutes } from './routes'

export const PageRouter: React.FC = () => {
  return (
    <div>
      <Router>
        {
          HomeRoutes.map((route, index) => {
            return <Route
              component={route.component}
              path={route.path}
            />
          })
        }
      </Router>
    </div>
  )
}
