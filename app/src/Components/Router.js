import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { withTheme } from '@material-ui/core/styles'
import PrivateRoute from '../Containers/PrivateRoute'
import Header from './Header'
import Login from '../Routes/Login'
import Home from '../Routes/Home'
import User from '../Routes/Admin/User'
import AddUser from '../Routes/Admin/AddUser'
import EditUser from '../Routes/Admin/EditUser'
import UserDetail from '../Routes/Admin/UserDetail'
import PerformanceReview from '../Routes/Admin/PerformanceReview'
import AddPerformanceReview from '../Routes/Admin/AddPerformanceReview'
import EditPerformanceReview from '../Routes/Admin/EditPerformanceReview'
import PerformanceReviewDetail from '../Routes/Admin/PerformanceReviewDetail'
import RequiredPerformanceReview from '../Routes/Employee/RequiredPerformanceReview'
import WritePerformanceReview from '../Routes/Employee/WritePerformanceReview'

const Router = ({ theme }) => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/user" component={User} />
          <PrivateRoute path="/user/add" component={AddUser} />
          <PrivateRoute path="/user/:id/edit" component={EditUser} />
          <PrivateRoute path="/user/:id/detail" component={UserDetail} />
          <PrivateRoute path="/performanceReview" component={PerformanceReview} />
          <PrivateRoute path="/performanceReview/add" component={AddPerformanceReview} />
          <PrivateRoute path="/performanceReview/:id/edit" component={EditPerformanceReview} />
          <PrivateRoute path="/performanceReview/:id/detail" component={PerformanceReviewDetail} />
          <PrivateRoute path="/requiredPerformanceReview" component={RequiredPerformanceReview} />
          <PrivateRoute path="/writePerformanceReview" component={WritePerformanceReview} />
          <Redirect from="*" to="/" />
        </Switch>
      </React.Fragment>
    </ThemeProvider>
  </HashRouter>
)

Router.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default withTheme(Router)
