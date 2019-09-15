import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import AppContext from '../../appContext'
import LoginPresenter from './LoginPresenter'
import { adminApi, employeeApi } from '../../api'

const LoginContainer = ({ history }) => {
	const { role: roleContext, id: idContext, setUserInfo } = useContext(AppContext)
	const [ role, setRole ] = useState('admin')
	const [ id, setId ] = useState('')
	const [ password, setPassword ] = useState('')

	const ROLE_ADMIN = 'admin'
	const ROLE_EMPLOYEE = 'employee'

	const handleLogin = async () => {
		try {
			let res
			if (role === ROLE_ADMIN) {
				res = await adminApi.login(id, password)
			} else if (role === ROLE_EMPLOYEE) {
				res = await employeeApi.login(id, password)
			}
			const { data: { result } } = res
			if (result) {
				setUserInfo({ role, id })
				sessionStorage.setItem('USER_INFO', JSON.stringify({ role, id }))
			}
		} catch (err) {
			console.error(err.message)
		}
	}

	const updateRole = ({ target: { value } }) => {
		setRole(value)
		setUserInfo({ role: value, id: idContext })
	}

	const updateId = ({ target: { value } }) => setId(value)

	const updatePassword = ({ target: { value } }) => setPassword(value)

	useEffect(
		() => {
			if (idContext !== '') {
				history.push('/')
			}
		},
		[ idContext ]
	)

	return <LoginPresenter role={role} id={id} password={password} updateRole={updateRole} updateId={updateId} updatePassword={updatePassword} handleLogin={handleLogin} handleLogin={handleLogin} />
}

LoginContainer.propTypes = {
	history: PropTypes.object.isRequired
}

export default LoginContainer
