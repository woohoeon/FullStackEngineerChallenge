import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import AppContext from '../appContext'
import Header from '../Components/Header'

const HeaderContainer = ({ history }) => {
	const { role, id, setUserInfo } = useContext(AppContext)

	const handleLogout = () => {
		setUserInfo({ role: 'admin', id: '' })
		sessionStorage.removeItem('USER_INFO')
		history.push('/login')
	}

	return <Header role={role} id={id} handleLogout={handleLogout} />
}

HeaderContainer.propTypes = {
	history: PropTypes.object.isRequired
}

export default withRouter(HeaderContainer)
