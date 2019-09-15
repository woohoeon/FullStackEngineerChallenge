import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { adminApi } from '../../../api'
import AppContext from '../../../appContext'
import PerformanceReviewPresenter from './PerformanceReviewPresenter'

const PerformanceReviewContainer = ({ history }) => {
	const { role: roleContext, id: idContext } = useContext(AppContext)
	const [ performanceReviews, setPerformanceReviews ] = useState()
	const [ groupByPerformanceReviews, setGroupByPerformanceReviews ] = useState()
	const [ employees, setEmployees ] = useState()
	const [ error, setError ] = useState()
	const [ loading, setLoading ] = useState(true)
	const [ open, setOpen ] = useState(false)
	const [ openEdit, setOpenEdit ] = useState(false)
	const [ title, setTitle ] = useState('')
	const [ originTitle, setOriginTitle ] = useState('')
	const [ employeeId, setEmployeeId ] = useState('')
	const [ originEmployeeId, setOriginEmployeeId ] = useState('')
	const [ reviewers, setReviewers ] = useState([])
	const [ reviewOpen, setReviewOpen ] = useState(0)

	const REVIEW_CLOSE = 0

	const fetch = async () => {
		try {
			const { data: { performanceReviews } } = await adminApi.performanceReviews()
			const { data: { employees } } = await adminApi.employees()
			setPerformanceReviews(performanceReviews)
			setEmployees(employees)
			setTableData(performanceReviews, employees)
		} catch (err) {
			setError(`Can't find performance reviews.`)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	const setTableData = (performanceReviews, employees) => {
		if (performanceReviews.length > 0) {
			const groupBy = performanceReviews.reduce((acc, review) => {
				const group = acc.find(({ title, employeeId }) => title === review.title && employeeId === review.employeeId)
				const reviewer = employees.find(({ id }) => id === review.reviewerId)
				if (reviewer) {
					if (group) {
						group.reviewers.push(`${reviewer.name} (${review.reviewerId})`)
					} else {
						acc.push({
							title: review.title,
							employeeId: review.employeeId,
							employee: `${employees.find(({ id }) => id === review.employeeId).name} (${review.employeeId})`,
							reviewers: [ `${reviewer.name} (${review.reviewerId})` ],
							reviewOpen: review.reviewOpen === REVIEW_CLOSE ? 'close' : 'open'
						})
					}
				}
				return acc
			}, [])
			setGroupByPerformanceReviews(groupBy)
		}
	}

	const initForm = () => {
		setTitle('')
		setOriginTitle('')
		setEmployeeId('')
		setOriginEmployeeId('')
		setReviewers([])
		setReviewOpen(REVIEW_CLOSE)
	}

	const addPerformanceReview = async () => {
		try {
			await adminApi.addPerformanceReview(title, employeeId, reviewers, reviewOpen)
			await fetch()
		} catch (err) {
			setError(`Can't add performance review.`)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	const editPerformanceReview = async () => {
		try {
			await adminApi.editPerformanceReview(originTitle, originEmployeeId, title, employeeId, reviewers, reviewOpen)
			await fetch()
		} catch (err) {
			setError(`Can't edit performance review.`)
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	const handleSave = () => {
		if (title !== '' && employeeId !== '' && reviewers.length > 0) {
			setLoading(true)
			addPerformanceReview()
			handleClose()
			initForm()
		}
	}

	const handleEditOpen = ({ currentTarget: { id, title } }) => {
		const reviews = performanceReviews.filter(({ title: reviewTitle, employeeId }) => reviewTitle === title && employeeId === id)
		if (reviews.length > 0) {
			const { title, employeeId, reviewOpen } = reviews[0]
			const reviewers = reviews.filter(({ reviewerId }) => employees.find(({ id }) => id === reviewerId)).map(({ reviewerId }) => reviewerId)
			setOriginTitle(title)
			setTitle(title)
			setOriginEmployeeId(employeeId)
			setEmployeeId(employeeId)
			setReviewOpen(reviewOpen)
			setReviewers(reviewers)
			setOpenEdit(true)
		}
	}

	const handleEditClose = () => setOpenEdit(false)

	const handleEditSave = () => {
		if (title !== '' && employeeId !== '' && reviewers.length > 0) {
			setLoading(true)
			editPerformanceReview()
			handleEditClose()
			initForm()
		}
	}

	const updateTitle = ({ target: { value } }) => setTitle(value)

	const updateEmployeeId = ({ target: { value } }) => {
		setReviewers([])
		setEmployeeId(value)
	}

	const updateReviewers = ({ target: { value } }) => {
		setReviewers(value)
	}

	const updateReviewOpen = ({ target: { value } }) => setReviewOpen(value)

	useEffect(() => {
		if (idContext === '' || roleContext !== 'admin') {
			history.push('/')
		} else {
			fetch()
		}
	}, [])

	return (
		<PerformanceReviewPresenter
			performanceReviews={performanceReviews}
			groupByPerformanceReviews={groupByPerformanceReviews}
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
			title={title}
			employeeId={employeeId}
			employees={employees}
			reviewers={reviewers}
			reviewOpen={reviewOpen}
			updateTitle={updateTitle}
			updateEmployeeId={updateEmployeeId}
			updateReviewers={updateReviewers}
			updateReviewOpen={updateReviewOpen}
		/>
	)
}

PerformanceReviewContainer.propTypes = {
	history: PropTypes.object.isRequired
}

export default PerformanceReviewContainer
