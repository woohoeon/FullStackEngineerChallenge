import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 10;
`

const Menu = styled.div`
  display: flex;
  flex-grow: 1;
`

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default () => (
  <Header>
    <AppBar position="static">
      <Toolbar>
        <Menu>
          <SLink to="/">
            <Typography>Home</Typography>
          </SLink>
        </Menu>
        <Tooltip title="logout" enterDelay={500} leaveDelay={200}>
          <IconButton onClick={() => console.log('logout')}>
            <ExitToAppIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  </Header>
)
