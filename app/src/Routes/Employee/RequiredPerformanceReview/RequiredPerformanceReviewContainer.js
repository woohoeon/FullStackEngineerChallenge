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

	useEffect(() => {
		if (idContext === '' || roleContext !== 'employee') {
			history.push('/')
		} else {
			fetch()
		}
	}, [])

	return <RequiredPerformanceReviewPresenter />
}

RequiredPerformanceReviewContainer.propTypes = {
	history: PropTypes.object.isRequired
}
export default RequiredPerformanceReviewContainer
