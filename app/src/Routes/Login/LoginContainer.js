import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import LoginPresenter from './LoginPresenter'
import { adminApi, employeeApi } from '../../api'

const LoginContainer = ({ history }) => {
  const user = null //{ role: 'admin', id: 'fjwoij-f9-aaa0sdf-f23fvv' }

  const handleLogin = async () => {
    try {
      console.log('login')
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(
    () => {
      if (user) {
        history.push('/')
      }
    },
    [user]
  )

  return <LoginPresenter handleLogin={handleLogin} />
}

LoginContainer.propTypes = {
  history: PropTypes.object.isRequired,
}

export default LoginContainer
