import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const SHeader = styled.header`
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
  :not(:first-child) {
    margin-left: 16px;
  }
  :not(:last-child) {
    margin-right: 16px;
  }
`

const Header = ({ role, id, handleLogout }) => (
	<SHeader>
		<AppBar position="static">
			<Toolbar>
				<Menu>
					{id !== '' && (
						<SLink to="/">
							<Typography>Home</Typography>
						</SLink>
					)}
					{id !== '' &&
					role === 'admin' && (
						<React.Fragment>
							<SLink to="/user">
								<Typography>User</Typography>
							</SLink>
							<SLink to="/performanceReview">
								<Typography>Performance Review</Typography>
							</SLink>
						</React.Fragment>
					)}
					{id !== '' &&
					role === 'employee' && (
						<React.Fragment>
							<SLink to="/requiredPerformanceReview">
								<Typography>Required Performance Review</Typography>
							</SLink>
						</React.Fragment>
					)}
				</Menu>
				{id !== '' && (
					<Tooltip title="logout" enterDelay={500} leaveDelay={200}>
						<IconButton onClick={handleLogout}>
							<ExitToAppIcon />
						</IconButton>
					</Tooltip>
				)}
			</Toolbar>
		</AppBar>
	</SHeader>
)

Header.propTypes = {
	role: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleLogout: PropTypes.func.isRequired
}

export default Header
