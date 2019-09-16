import User from '../models/User'
import PerformanceReview from '../models/PerformanceReview'

const REVIEW_STATUS_UNWRITTEN = 0
const REVIEW_STATUS_WROTE = 1
const REVIEW_OPEN = 1

export const login = async (req, res) => {
	try {
		const { id, password } = req.body.params
		const admin = await User.findOne({ id, role: 1 })
		if (admin && admin.password === password) {
			res.send({ result: true })
		} else {
			res.send({ result: false })
		}
	} catch (err) {
		console.error(err)
		res.send({ result: false })
	}
}

export const requiredPerformanceReviews = async (req, res) => {
	try {
		const { reviewerId } = req.body.params
		const performanceReviews = await PerformanceReview.find({
			reviewerId,
			reviewStatus: REVIEW_STATUS_UNWRITTEN,
			reviewOpen: REVIEW_OPEN
		})
		res.send({ performanceReviews })
	} catch (err) {
		console.error(err)
		res.send({ performanceReviews: [] })
	}
}

export const submitPerformanceReview = async (req, res) => {
	try {
		const {
			title,
			employeeId,
			reviewerId,
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
		} = req.body.params
		const result = await PerformanceReview.findOneAndUpdate(
			{ title, employeeId, reviewerId },
			{
				reviewStatus: REVIEW_STATUS_WROTE,
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
			}
		)
		res.send({ result })
	} catch (err) {
		console.error(err)
		res.send({ result: false })
	}
}
