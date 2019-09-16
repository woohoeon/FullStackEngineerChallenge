import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { employeeApi } from '../../../api'
import AppContext from '../../../appContext'
import RequiredPerformanceReviewPresenter from './RequiredPerformanceReviewPresenter'

const RequiredPerformanceReviewContainer = ({ history }) => {
	const { role: roleContext, id: idContext } = useContext(AppContext)
	const [ performanceReviews, setPerformanceReviews ] = useState()
	const [ error, setError ] = useState()
	const [ loading, setLoading ] = useState(true)
	const [ open, setOpen ] = useState(false)
	const [ employeeId, setEmployeeId ] = useState('')
	const [ title, setTitle ] = useState('')
	const [ quality, setQuality ] = useState(0)
	const [ qualityComment, setQualityComment ] = useState('')
	const [ productivity, setProductivity ] = useState(0)
	const [ productivityComment, setProductivityComment ] = useState('')
	const [ jobKnowledge, setJobKnowledge ] = useState(0)
	const [ jobKnowledgeComment, setJobKnowledgeComment ] = useState('')
	const [ cooperation, setCooperation ] = useState(0)
	const [ cooperationComment, setCooperationComment ] = useState('')
	const [ attendance, setAttendance ] = useState(0)
	const [ attendanceComment, setAttendanceComment ] = useState('')

	const fetch = async () => {
		try {
			const { data: { performanceReviews } } = await employeeApi.requiredPerformanceReviews(idContext)
			setPerformanceReviews(performanceReviews)
		} catch (err) {
			setError(`Can't find performance reviews.`)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	const initForm = () => {
		setEmployeeId('')
		setTitle('')
		setQuality(0)
		setQualityComment('')
		setProductivity(0)
		setProductivityComment('')
		setJobKnowledge(0)
		setJobKnowledgeComment('')
		setCooperation(0)
		setCooperationComment('')
		setAttendance(0)
		setAttendanceComment('')
	}

	const submitPerformanceReview = async () => {
		try {
			await employeeApi.submitPerformanceReview({
				title,
				employeeId,
				reviewerId: idContext,
				quality,
				qualityComment,
				productivity,
				productivityComment,
				jobKnowledge,
				jobKnowledgeComment,
				cooperation,
				cooperationComment,
				attendance,
				attendanceComment
			})
			await fetch()
		} catch (err) {
			setError(`Can't submit performance reviews.`)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	const handleOpen = ({ currentTarget: { id, title } }) => {
		const {
			employeeId,
			quality,
			qualityComment,
			productivity,
			productivityComment,
			jobKnowledge,
			jobKnowledgeComment,
			cooperation,
			cooperationComment,
			attendance,
			attendanceComment
		} = performanceReviews.find(({ title: reviewTitle, employeeId }) => reviewTitle === title && employeeId === id)
		if (employeeId) {
			setEmployeeId(employeeId)
			setTitle(title)
			setQuality(quality)
			setQualityComment(qualityComment)
			setProductivity(productivity)
			setProductivityComment(productivityComment)
			setJobKnowledge(jobKnowledge)
			setJobKnowledgeComment(jobKnowledgeComment)
			setCooperation(cooperation)
			setCooperationComment(cooperationComment)
			setAttendance(attendance)
			setAttendanceComment(attendanceComment)
			setOpen(true)
		}
	}

	const handleClose = () => setOpen(false)

	const handleSave = () => {
		setLoading(true)
		submitPerformanceReview()
		handleClose()
		initForm()
	}

	const updateQuality = ({ currentTarget: { value } }) => setQuality(parseInt(value))

	const updateQualityComment = ({ currentTarget: { value } }) => setQualityComment(value)

	const updateProductivity = ({ currentTarget: { value } }) => setProductivity(parseInt(value))

	const updateProductivityComment = ({ currentTarget: { value } }) => setProductivityComment(value)

	const updateJobKnowledge = ({ currentTarget: { value } }) => setJobKnowledge(parseInt(value))

	const updateJobKnowledgeComment = ({ currentTarget: { value } }) => setJobKnowledgeComment(value)

	const updateCooperation = ({ currentTarget: { value } }) => setCooperation(parseInt(value))

	const updateCooperationComment = ({ currentTarget: { value } }) => setCooperationComment(value)

	const updateAttendance = ({ currentTarget: { value } }) => setAttendance(parseInt(value))

	const updateAttendanceComment = ({ currentTarget: { value } }) => setAttendanceComment(value)

	useEffect(() => {
		if (idContext === '' || roleContext !== 'employee') {
			history.push('/')
		} else {
			fetch()
		}
	}, [])

	return (
		<RequiredPerformanceReviewPresenter
			performanceReviews={performanceReviews}
			error={error}
			loading={loading}
			open={open}
			employeeId={employeeId}
			title={title}
			quality={quality}
			qualityComment={qualityComment}
			productivity={productivity}
			productivityComment={productivityComment}
			jobKnowledge={jobKnowledge}
			jobKnowledgeComment={jobKnowledgeComment}
			cooperation={cooperation}
			cooperationComment={cooperationComment}
			attendance={attendance}
			attendanceComment={attendanceComment}
			handleOpen={handleOpen}
			handleClose={handleClose}
			handleSave={handleSave}
			updateQuality={updateQuality}
			updateQualityComment={updateQualityComment}
			updateProductivity={updateProductivity}
			updateProductivityComment={updateProductivityComment}
			updateJobKnowledge={updateJobKnowledge}
			updateJobKnowledgeComment={updateJobKnowledgeComment}
			updateCooperation={updateCooperation}
			updateCooperationComment={updateCooperationComment}
			updateAttendance={updateAttendance}
			updateAttendanceComment={updateAttendanceComment}
		/>
	)
}

RequiredPerformanceReviewContainer.propTypes = {
	history: PropTypes.object.isRequired
}
export default RequiredPerformanceReviewContainer
