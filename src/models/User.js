import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
	id: {
		type: String,
		required: 'Id is required'
	},
	name: {
		type: String,
		required: 'Name is required'
	},
	password: {
		type: String,
		required: 'Password is required'
	},
	role: {
		type: Number,
		required: 'Role is required'
	},
	jobTitle: {
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

const user = mongoose.model('User', UserSchema)

export default user
