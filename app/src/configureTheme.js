import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import lime from '@material-ui/core/colors/lime'
import lightGreen from '@material-ui/core/colors/green'
import orange from '@material-ui/core/colors/pink'

const configureTheme = (role) => {
	const type = {
		admin: {
			palette: {
				primary: blue,
				secondary: lime
			}
		},
		employee: {
			palette: {
				primary: lightGreen,
				secondary: orange
			}
		}
	}
	return createMuiTheme(type[role])
}

export default configureTheme
