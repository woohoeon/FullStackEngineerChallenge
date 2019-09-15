import mongoose from 'mongoose'

const PerformanceReviewSchema = new mongoose.Schema({
	title: {
		type: String,
		required: 'Title id is required'
	},
	employeeId: {
		type: String,
		required: 'Employee id is required'
	},
	reviewerId: {
		type: String,
		required: 'Reviewer id is required'
	},
	reviewStatus: {
		type: Number,
		default: 0
	},
	reviewOpen: {
		type: Number,
		required: 'Review open is required'
	},
	quality: {
		type: Number,
		default: 0
	},
	qualityComment: {
		type: String
	},
	productivity: {
		type: Number,
		default: 0
	},
	productivityComment: {
		type: String
	},
	jobKnowledge: {
		type: Number,
		default: 0
	},
	jobKnowledgeComment: {
		type: String
	},
	cooperation: {
		type: Number,
		default: 0
	},
	cooperationComment: {
		type: String
	},
	attendance: {
		type: Number,
		default: 0
	},
	attendanceComment: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
})

const performanceReview = mongoose.model('PerformanceReivew', PerformanceReviewSchema)

export default performanceReview
