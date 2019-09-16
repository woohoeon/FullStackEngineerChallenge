import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { adminApi } from '../../../api'
import AppContext from '../../../appContext'
import UserPresenter from './UserPresenter'

const UserContainer = ({ history }) => {
	const { role: roleContext, id: idContext } = useContext(AppContext)
	const [ admins, setAdmins ] = useState()
	const [ employees, setEmployees ] = useState()
	const [ error, setError ] = useState()
	const [ loading, setLoading ] = useState(true)
	const [ open, setOpen ] = useState(false)
	const [ openEdit, setOpenEdit ] = useState(false)
	const [ id, setId ] = useState('')
	const [ name, setName ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ role, setRole ] = useState(0)
	const [ jobTitle, setJobTitle ] = useState('')

	const ROLE_ADMIN = 0
	const ROLE_EMPLOYEE = 1

	const fetch = async () => {
		try {
			const { data: { admins } } = await adminApi.admins()
			const { data: { employees } } = await adminApi.employees()
			setAdmins(admins)
			setEmployees(employees)
		} catch (err) {
			setError(`Can't find users.`)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	const addUser = async () => {
		try {
			if (role === ROLE_ADMIN) {
				await adminApi.addAdmin(id, name, password, jobTitle)
			}
			if (role === ROLE_EMPLOYEE) {
				await adminApi.addEmployee(id, name, password, jobTitle)
			}
			await fetch()
		} catch (err) {
			setError(`Can't add user.`)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	const editUser = async () => {
		try {
			if (role === ROLE_ADMIN) {
				await adminApi.editAdmin(id, name, password, jobTitle)
			}
			if (role === ROLE_EMPLOYEE) {
				await adminApi.editEmployee(id, name, password, jobTitle)
			}
			await fetch()
		} catch (err) {
			setError(`Can't edit user.`)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	const deleteUser = async (role, id) => {
		try {
			if (role === ROLE_ADMIN) {
				await adminApi.deleteAdmin(id)
			}
			if (role === ROLE_EMPLOYEE) {
				await adminApi.deleteEmployee(id)
			}
			await fetch()
		} catch (err) {
			setError(`Can't delete user.`)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	const initForm = () => {
		setId('')
		setName('')
		setPassword('')
		setRole(0)
		setJobTitle('')
	}

	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	const handleSave = () => {
		if (id !== '' && name !== '' && password !== '' && (role === ROLE_ADMIN || role === ROLE_EMPLOYEE)) {
			setLoading(true)
			addUser()
			handleClose()
			initForm()
		}
	}

	const handleEditOpen = ({ currentTarget: { id } }) => {
		let target = admins.find(({ id: adminId }) => adminId === id)
		if (!target) {
			target = employees.find(({ id: employeeId }) => employeeId === id)
		}
		if (target) {
			const { id, name, password, role, jobTitle } = target
			setId(id)
			setName(name)
			setPassword(password)
			setRole(role)
			setJobTitle(jobTitle)
			setOpenEdit(true)
		}
	}

	const handleEditClose = () => setOpenEdit(false)

	const handleEditSave = () => {
		if (id !== '' && name !== '' && password !== '' && (role === ROLE_ADMIN || role === ROLE_EMPLOYEE)) {
			setLoading(true)
			editUser()
			handleEditClose()
			initForm()
		}
	}

	const handleDeleteAdmin = ({ currentTarget: { id } }) => deleteUser(ROLE_ADMIN, id)

	const handleDeleteEmployee = ({ currentTarget: { id } }) => deleteUser(ROLE_EMPLOYEE, id)

	const updateId = ({ target: { value } }) => setId(value)

	const updateName = ({ target: { value } }) => setName(value)

	const updatePassword = ({ target: { value } }) => setPassword(value)

	const updateRole = ({ target: { value } }) => setRole(value)

	const updateJobTitle = ({ target: { value } }) => setJobTitle(value)

	const isSystemAdmin = (id) => id === 'administrator@system.com'

	useEffect(() => {
		if (idContext === '' || roleContext !== 'admin') {
			history.push('/')
		} else {
			fetch()
		}
	}, [])

	return (
		<UserPresenter
			admins={admins}
			employees={employees}
			error={error}
			loading={loading}
			open={open}
			handleOpen={handleOpen}
			handleClose={handleClose}
			handleSave={handleSave}
			openEdit={openEdit}
			handleEditOpen={handleEditOpen}
			handleEditClose={handleEditClose}
			handleEditSave={handleEditSave}
			handleDeleteAdmin={handleDeleteAdmin}
			handleDeleteEmployee={handleDeleteEmployee}
			id={id}
			name={name}
			password={password}
			role={role}
			jobTitle={jobTitle}
			updateId={updateId}
			updateName={updateName}
			updatePassword={updatePassword}
			updateRole={updateRole}
			updateJobTitle={updateJobTitle}
			isSystemAdmin={isSystemAdmin}
		/>
	)
}

UserContainer.propTypes = {
	history: PropTypes.object.isRequired
}

export default UserContainer
