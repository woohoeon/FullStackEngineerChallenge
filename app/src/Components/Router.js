import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { withTheme } from '@material-ui/core/styles'
import PrivateRoute from '../Containers/PrivateRoute'
import Header from '../Containers/Header'
import Login from '../Routes/Login'
import Home from '../Routes/Home'
import User from '../Routes/Admin/User'
import PerformanceReview from '../Routes/Admin/PerformanceReview'
import RequiredPerformanceReview from '../Routes/Employee/RequiredPerformanceReview'

const Router = ({ theme }) => (
	<HashRouter>
		<ThemeProvider theme={theme}>
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/login" exact component={Login} />
					<PrivateRoute path="/" exact component={Home} />
					<PrivateRoute path="/user" component={User} />
					<PrivateRoute path="/performanceReview" component={PerformanceReview} />
					<PrivateRoute path="/requiredPerformanceReview" component={RequiredPerformanceReview} />
					<Redirect from="*" to="/" />
				</Switch>
			</React.Fragment>
		</ThemeProvider>
	</HashRouter>
)

Router.propTypes = {
	theme: PropTypes.object.isRequired
}

export default withTheme(Router)
