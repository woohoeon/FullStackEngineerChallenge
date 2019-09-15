import React, { useState } from 'react'
import AppContext from '../appContext'
import Router from './Router'
import GlobalStyles from './GlobalStyles'
import configureTheme from '../configureTheme'
import { MuiThemeProvider } from '@material-ui/core/styles'

const App = () => {
	const user = JSON.parse(sessionStorage.getItem('USER_INFO'))

	const [ userInfo, setUserInfo ] = useState({
		role: user !== null ? user.role : 'admin',
		id: user !== null ? user.id : ''
	})

	const theme = configureTheme(userInfo.role)

	return (
		<AppContext.Provider value={{ ...userInfo, setUserInfo }}>
			<React.Fragment>
				<MuiThemeProvider theme={theme}>
					<Router />
					<GlobalStyles />
				</MuiThemeProvider>
			</React.Fragment>
		</AppContext.Provider>
	)
}

export default App
