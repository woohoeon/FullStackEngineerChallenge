import { createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import lime from '@material-ui/core/colors/lime'
import green from '@material-ui/core/colors/green'
import pink from '@material-ui/core/colors/pink'

const configureTheme = (role) => {
  const type = {
    admin: {
      palette: {
        primary: lightBlue,
        secondary: lime,
      },
    },
    employee: {
      palette: {
        primary: green,
        secondary: pink,
      },
    },
  }
  return createMuiTheme(type[role])
}

export default configureTheme
