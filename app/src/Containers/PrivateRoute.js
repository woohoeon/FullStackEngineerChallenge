import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'

const PrivateRoute = ({ history, component: Component, path, ...rest }) => {
  const user = { role: 'admin', id: 'fjwoij-f9-aaa0sdf-f23fvv' }

  if (!user) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

PrivateRoute.propTypes = {
  history: PropTypes.object.isRequired,
  component: PropTypes.any,
  path: PropTypes.string.isRequired,
}

export default withRouter(PrivateRoute)
