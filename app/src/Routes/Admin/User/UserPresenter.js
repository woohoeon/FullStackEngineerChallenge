import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import DialogTitle from '@material-ui/core/DialogTitle'
import Loader from '../../../Components/Loader'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		overflowX: 'auto'
	},
	table: {
		minWidth: 650
	},
	button: {
		margin: theme.spacing(1),
		display: 'flex',
		justifyContent: 'right'
	},
	formControl: {
		marginTop: theme.spacing(2),
		minWidth: 120
	}
}))

const Container = styled.div`padding: 32px;`

const SectionTitle = styled(Typography)`
	&&{
		margin-top: 26px;
	}
`

const UserPresenter = ({
	admins,
	employees,
	error,
	loading,
	open,
	handleOpen,
	handleClose,
	handleSave,
	openEdit,
	handleEditOpen,
	handleEditClose,
	handleEditSave,
	handleDeleteAdmin,
	handleDeleteEmployee,
	id,
	name,
	password,
	role,
	jobTitle,
	updateId,
	updateName,
	updatePassword,
	updateRole,
	updateJobTitle,
	isSystemAdmin
}) => {
	const classes = useStyles()

	return loading ? (
		<Loader />
	) : (
		<Container>
			<Typography variant="h2" gutterBottom>
				User
			</Typography>
			<Button variant="contained" color="default" size="large" onClick={handleOpen} className={classes.button}>
				add user
			</Button>
			{admins &&
			admins.length > 0 && (
				<React.Fragment>
					<SectionTitle gutterBottom>Admins</SectionTitle>
					<Paper className={classes.root}>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<TableCell>ID</TableCell>
									<TableCell>Name</TableCell>
									<TableCell>Job Title</TableCell>
									<TableCell align="center">Edit</TableCell>
									<TableCell align="center">Delete</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{admins.map((admin, index) => (
									<TableRow key={index}>
										<TableCell>{admin.id}</TableCell>
										<TableCell>{admin.name}</TableCell>
										<TableCell>{admin.jobTitle}</TableCell>
										<TableCell align="center">
											<Button variant="outlined" color="default" size="small" id={admin.id} onClick={handleEditOpen}>
												Edit
											</Button>
										</TableCell>
										<TableCell align="center">
											<Button variant="outlined" color="default" size="small" id={admin.id} onClick={handleDeleteAdmin} disabled={isSystemAdmin(admin.id)}>
												Delete
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Paper>
				</React.Fragment>
			)}
			{employees &&
			employees.length > 0 && (
				<React.Fragment>
					<SectionTitle gutterBottom>Employees</SectionTitle>
					<Paper className={classes.root}>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<TableCell>ID</TableCell>
									<TableCell>name</TableCell>
									<TableCell>jobTitle</TableCell>
									<TableCell align="center">Edit</TableCell>
									<TableCell align="center">Delete</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{employees.map((employee, index) => (
									<TableRow key={index}>
										<TableCell>{employee.id}</TableCell>
										<TableCell>{employee.name}</TableCell>
										<TableCell>{employee.jobTitle}</TableCell>
										<TableCell align="center">
											<Button variant="outlined" color="default" size="small" id={employee.id} onClick={handleEditOpen}>
												Edit
											</Button>
										</TableCell>
										<TableCell align="center">
											<Button variant="outlined" color="default" size="small" id={employee.id} onClick={handleDeleteEmployee}>
												Delete
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Paper>
				</React.Fragment>
			)}
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle id="add-user-title">Add User</DialogTitle>
				<DialogContent>
					<TextField autoFocus margin="dense" id="ID" label="Email Adress" type="email" value={id} onChange={updateId} fullWidth required />
					<TextField margin="dense" id="name" label="Name" type="text" value={name} onChange={updateName} fullWidth required />
					<TextField margin="dense" id="password" label="Password" type="text" value={password} onChange={updatePassword} fullWidth required />
					<FormControl className={classes.formControl} required>
						<InputLabel htmlFor="max-width">Role</InputLabel>
						<Select value={role} onChange={updateRole}>
							<MenuItem value={0}>Admin</MenuItem>
							<MenuItem value={1}>Employee</MenuItem>
						</Select>
					</FormControl>
					<TextField margin="dense" id="name" label="Job Title" type="text" value={jobTitle} onChange={updateJobTitle} fullWidth />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="default">
						Cancel
					</Button>
					<Button onClick={handleSave} color="primary">
						Save
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog open={openEdit} onClose={handleEditClose}>
				<DialogTitle id="add-user-title">Edit User</DialogTitle>
				<DialogContent>
					<TextField margin="dense" id="ID" label="Email Adress" type="email" value={id} disabled fullWidth />
					<TextField autoFocus margin="dense" id="name" label="Name" type="text" value={name} onChange={updateName} fullWidth required />
					<TextField margin="dense" id="password" label="Password" type="text" value={password} onChange={updatePassword} fullWidth required />
					<FormControl className={classes.formControl} required>
						<InputLabel htmlFor="max-width">Role</InputLabel>
						<Select value={role} onChange={updateRole}>
							<MenuItem value={0}>Admin</MenuItem>
							<MenuItem value={1}>Employee</MenuItem>
						</Select>
					</FormControl>
					<TextField margin="dense" id="name" label="Job Title" type="text" value={jobTitle} onChange={updateJobTitle} fullWidth />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleEditClose} color="default">
						Cancel
					</Button>
					<Button onClick={handleEditSave} color="primary">
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	)
}

UserPresenter.propTypes = {
	admins: PropTypes.array,
	employees: PropTypes.array,
	error: PropTypes.bool,
	loading: PropTypes.bool.isRequired,
	open: PropTypes.bool.isRequired,
	handleOpen: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleSave: PropTypes.func.isRequired,
	openEdit: PropTypes.bool.isRequired,
	handleEditOpen: PropTypes.func.isRequired,
	handleEditClose: PropTypes.func.isRequired,
	handleEditSave: PropTypes.func.isRequired,
	handleDeleteAdmin: PropTypes.func.isRequired,
	handleDeleteEmployee: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	role: PropTypes.number.isRequired,
	jobTitle: PropTypes.string.isRequired,
	updateId: PropTypes.func.isRequired,
	updateName: PropTypes.func.isRequired,
	updatePassword: PropTypes.func.isRequired,
	updateRole: PropTypes.func.isRequired,
	updateJobTitle: PropTypes.func.isRequired,
	isSystemAdmin: PropTypes.func.isRequired
}

export default UserPresenter
