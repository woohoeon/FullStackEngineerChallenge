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
		type: Number, // Unwritten: 0, Wrote: 1
		default: 0
	},
	reviewOpen: {
		type: Number, // Close: 0, Open: 1
		required: 'Review open is required'
	},
	quality: {
		type: Number, // Outstanding: 0, Exceeds Expecations: 1, Meets Expecations: 2, Improvement Needed: 3
		default: 0
	},
	qualityComment: {
		type: String,
		default: ''
	},
	productivity: {
		type: Number, // Outstanding: 0, Exceeds Expecations: 1, Meets Expecations: 2, Improvement Needed: 3
		default: 0
	},
	productivityComment: {
		type: String,
		default: ''
	},
	jobKnowledge: {
		type: Number, // Outstanding: 0, Exceeds Expecations: 1, Meets Expecations: 2, Improvement Needed: 3
		default: 0
	},
	jobKnowledgeComment: {
		type: String,
		default: ''
	},
	cooperation: {
		type: Number, // Outstanding: 0, Exceeds Expecations: 1, Meets Expecations: 2, Improvement Needed: 3
		default: 0
	},
	cooperationComment: {
		type: String,
		default: ''
	},
	attendance: {
		type: Number, // Outstanding: 0, Exceeds Expecations: 1, Meets Expecations: 2, Improvement Needed: 3
		default: 0
	},
	attendanceComment: {
		type: String,
		default: ''
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
