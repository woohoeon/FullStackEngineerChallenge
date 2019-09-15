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
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import DialogTitle from '@material-ui/core/DialogTitle'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
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
		minWidth: '100%'
	}
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
}

const Container = styled.div`padding: 32px;`

const PerformanceReviewPresenter = ({
	performanceReviews,
	groupByPerformanceReviews,
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
	title,
	employeeId,
	employees,
	reviewers,
	reviewOpen,
	updateTitle,
	updateEmployeeId,
	updateReviewers,
	updateReviewOpen
}) => {
	const classes = useStyles()

	return loading ? (
		<Loader />
	) : (
		<Container>
			<Typography variant="h2" gutterBottom>
				Performance Review
			</Typography>
			{employees &&
			employees.length > 0 && (
				<Button variant="contained" color="default" size="large" onClick={handleOpen} className={classes.button}>
					add performance review
				</Button>
			)}
			{performanceReviews &&
			performanceReviews.length > 0 &&
			groupByPerformanceReviews &&
			groupByPerformanceReviews.length > 0 &&
			employees &&
			employees.length > 0 && (
				<React.Fragment>
					<Paper className={classes.root}>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<TableCell>Title</TableCell>
									<TableCell>Employee</TableCell>
									<TableCell>Reviewers</TableCell>
									<TableCell>Open Status</TableCell>
									<TableCell align="center">Edit</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{groupByPerformanceReviews.map(({ title, employeeId, employee, reviewers, reviewOpen }, index) => (
									<TableRow key={index}>
										<TableCell>{title}</TableCell>
										<TableCell>{employee}</TableCell>
										<TableCell>{reviewers.join(', ')}</TableCell>
										<TableCell>{reviewOpen}</TableCell>
										<TableCell align="center">
											<Button variant="outlined" color="default" size="small" id={employeeId} title={title} onClick={handleEditOpen}>
												Edit
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Paper>
					<Dialog open={openEdit} onClose={handleEditClose}>
						<DialogTitle id="add-user-title">Edit Performance Review</DialogTitle>
						<DialogContent>
							<TextField margin="dense" id="title" label="Title" type="text" value={title} onChange={updateTitle} fullWidth required />
							<FormControl className={classes.formControl} required>
								<InputLabel htmlFor="select-multiple-checkbox">Emplyee ID</InputLabel>
								<Select value={employeeId} onChange={updateEmployeeId}>
									{employees.map(({ id, name }, index) => (
										<MenuItem key={index} value={id}>
											{`${name} (${id})`}
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<FormControl className={classes.formControl} required>
								<InputLabel htmlFor="select-multiple-checkbox">Reivewers</InputLabel>
								<Select
									multiple
									value={reviewers}
									onChange={updateReviewers}
									input={<Input id="select-multiple-checkbox" />}
									renderValue={(selected) => selected.join(', ')}
									MenuProps={MenuProps}
								>
									{employees.filter(({ id }) => id !== employeeId).map(({ id, name }, index) => (
										<MenuItem key={index} value={id}>
											<Checkbox checked={reviewers.indexOf(id) > -1} />
											<ListItemText primary={`${name} (${id})`} />
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<FormControl className={classes.formControl} required>
								<InputLabel htmlFor="max-width">Status</InputLabel>
								<Select value={reviewOpen} onChange={updateReviewOpen}>
									<MenuItem value={0}>close</MenuItem>
									<MenuItem value={1}>open</MenuItem>
								</Select>
							</FormControl>
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
				</React.Fragment>
			)}
			{employees &&
			employees.length > 0 && (
				<Dialog open={open} onClose={handleClose}>
					<DialogTitle id="add-user-title">Add Performance Review</DialogTitle>
					<DialogContent>
						<TextField autoFocus margin="dense" id="title" label="Title" type="text" value={title} onChange={updateTitle} fullWidth required />
						<FormControl className={classes.formControl} required>
							<InputLabel htmlFor="select-multiple-checkbox">Emplyee ID</InputLabel>
							<Select value={employeeId} onChange={updateEmployeeId}>
								{employees.map(({ id, name }, index) => (
									<MenuItem key={index} value={id}>
										{`${name} (${id})`}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl className={classes.formControl} required>
							<InputLabel htmlFor="select-multiple-checkbox">Reivewers</InputLabel>
							<Select
								multiple
								value={reviewers}
								onChange={updateReviewers}
								input={<Input id="select-multiple-checkbox" />}
								renderValue={(selected) => selected.join(', ')}
								MenuProps={MenuProps}
							>
								{employees.filter(({ id }) => id !== employeeId).map(({ id, name }, index) => (
									<MenuItem key={index} value={id}>
										<Checkbox checked={reviewers.indexOf(id) > -1} />
										<ListItemText primary={`${name} (${id})`} />
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl className={classes.formControl} required>
							<InputLabel htmlFor="max-width">Status</InputLabel>
							<Select value={reviewOpen} onChange={updateReviewOpen}>
								<MenuItem value={0}>Close</MenuItem>
								<MenuItem value={1}>Open</MenuItem>
							</Select>
						</FormControl>
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
			)}
		</Container>
	)
}

PerformanceReviewPresenter.propTypes = {
	performanceReviews: PropTypes.array,
	groupByPerformanceReviews: PropTypes.array,
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
	title: PropTypes.string.isRequired,
	employeeId: PropTypes.string.isRequired,
	employees: PropTypes.array,
	reviewers: PropTypes.array.isRequired,
	reviewOpen: PropTypes.number.isRequired,
	updateTitle: PropTypes.func.isRequired,
	updateEmployeeId: PropTypes.func.isRequired,
	updateReviewers: PropTypes.func.isRequired,
	updateReviewOpen: PropTypes.func.isRequired
}

export default PerformanceReviewPresenter
