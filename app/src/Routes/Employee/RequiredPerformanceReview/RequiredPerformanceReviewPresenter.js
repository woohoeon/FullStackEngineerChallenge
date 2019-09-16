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
import DialogTitle from '@material-ui/core/DialogTitle'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Loader from '../../../Components/Loader'

const Container = styled.div`padding: 32px;`

const SFormWrapper = styled.div`margin-top: 16px;`

const InputField = styled(TextField)`
  &&{
    margin:16px 0;
  }
`

const SForm = ({ title, value, onChange }) => (
	<SFormWrapper>
		<FormLabel component="legend">{title}</FormLabel>
		<RadioGroup aria-label="role" name="Role" value={value} onChange={onChange}>
			<FormControlLabel value={0} control={<Radio />} label="Outstanding" />
			<FormControlLabel value={1} control={<Radio />} label="Exceeds Expecations" />
			<FormControlLabel value={2} control={<Radio />} label="Meets Expecations" />
			<FormControlLabel value={3} control={<Radio />} label="Improvement Needed" />
		</RadioGroup>
	</SFormWrapper>
)

SForm.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

const RequiredPerformanceReviewPresenter = ({
	performanceReviews,
	error,
	loading,
	open,
	employeeId,
	title,
	quality,
	qualityComment,
	productivity,
	productivityComment,
	jobKnowledge,
	jobKnowledgeComment,
	cooperation,
	cooperationComment,
	attendance,
	attendanceComment,
	handleOpen,
	handleClose,
	handleSave,
	updateQuality,
	updateQualityComment,
	updateProductivity,
	updateProductivityComment,
	updateJobKnowledge,
	updateJobKnowledgeComment,
	updateCooperation,
	updateCooperationComment,
	updateAttendance,
	updateAttendanceComment
}) => {
	const classes = useStyles()

	return loading ? (
		<Loader />
	) : (
		<Container>
			<Typography variant="h2" gutterBottom>
				Required Performance Review
			</Typography>
			{!performanceReviews && (
				<Typography variant="subtitle1" gutterBottom>
					There are no requested performance reviews.
				</Typography>
			)}
			{performanceReviews &&
			performanceReviews.length === 0 && (
				<Typography variant="subtitle1" gutterBottom>
					There are no requested performance reviews.
				</Typography>
			)}
			{performanceReviews &&
			performanceReviews.length > 0 && (
				<React.Fragment>
					<Paper className={classes.root}>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<TableCell>Title</TableCell>
									<TableCell>Employee</TableCell>
									<TableCell align="center">Write</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{performanceReviews.map(({ title, employeeId }, index) => (
									<TableRow key={index}>
										<TableCell>{title}</TableCell>
										<TableCell>{employeeId}</TableCell>
										<TableCell align="center">
											<Button variant="outlined" color="default" size="small" id={employeeId} title={title} onClick={handleOpen}>
												Write
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Paper>
					<Dialog open={open} onClose={handleClose} fullScreen>
						<DialogTitle id="add-user-title">Write Performance Review</DialogTitle>
						<DialogContent>
							<TextField margin="dense" id="title" label="Title" value={title} disabled fullWidth />
							<TextField margin="dense" id="employeeId" label="Employee Id" value={employeeId} disabled fullWidth />
							<SForm title="Quality" value={quality} onChange={updateQuality} />
							<InputField id="qualityComment" label="Quality Comment" value={qualityComment} onChange={updateQualityComment} margin="normal" fullWidth />
							<SForm title="Productivity" value={productivity} onChange={updateProductivity} />
							<InputField id="productivityComment" label="Productivity Comment" value={productivityComment} onChange={updateProductivityComment} margin="normal" fullWidth />
							<SForm title="JobKnowledge" value={jobKnowledge} onChange={updateJobKnowledge} />
							<InputField id="jobKnowledgeComment" label="JobKnowledge Comment" value={jobKnowledgeComment} onChange={updateJobKnowledgeComment} margin="normal" fullWidth />
							<SForm title="Cooperation" value={cooperation} onChange={updateCooperation} />
							<InputField id="cooperationComment" label="Cooperation Comment" value={cooperationComment} onChange={updateCooperationComment} margin="normal" fullWidth />
							<SForm title="Attendance" value={attendance} onChange={updateAttendance} />
							<InputField id="attendanceComment" label="Attendance Comment" value={attendanceComment} onChange={updateAttendanceComment} margin="normal" fullWidth />
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
				</React.Fragment>
			)}
		</Container>
	)
}

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

RequiredPerformanceReviewPresenter.propTypes = {
	performanceReviews: PropTypes.array,
	error: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	open: PropTypes.bool.isRequired,
	employeeId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	quality: PropTypes.number.isRequired,
	qualityComment: PropTypes.string,
	productivity: PropTypes.number.isRequired,
	productivityComment: PropTypes.string,
	jobKnowledge: PropTypes.number.isRequired,
	jobKnowledgeComment: PropTypes.string,
	cooperation: PropTypes.number.isRequired,
	cooperationComment: PropTypes.string,
	attendance: PropTypes.number.isRequired,
	attendanceComment: PropTypes.string,
	handleOpen: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleSave: PropTypes.func.isRequired,
	updateQuality: PropTypes.func.isRequired,
	updateQualityComment: PropTypes.func.isRequired,
	updateProductivity: PropTypes.func.isRequired,
	updateProductivityComment: PropTypes.func.isRequired,
	updateJobKnowledge: PropTypes.func.isRequired,
	updateJobKnowledgeComment: PropTypes.func.isRequired,
	updateCooperation: PropTypes.func.isRequired,
	updateCooperationComment: PropTypes.func.isRequired,
	updateAttendance: PropTypes.func.isRequired,
	updateAttendanceComment: PropTypes.func.isRequired
}

export default RequiredPerformanceReviewPresenter
