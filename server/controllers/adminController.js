import User from '../models/User'
import PerformanceReview from '../models/PerformanceReview'

const ROLE_ADMIN = 0
const ROLE_EMPLOYEE = 1

export const adminLogin = async (req, res) => {
	try {
		const { id, password } = req.body.params
		const admin = await User.findOne({ id, role: 0 })
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

export const admins = async (req, res) => {
	try {
		const admins = await User.find({ role: ROLE_ADMIN })
		res.send({ admins })
	} catch (err) {
		console.error(err)
		res.send({ admins: [] })
	}
}

export const addAdmin = async (req, res) => {
	try {
		const { id, name, password, jobTitle } = req.body.params
		const newAdmin = await User.create({
			id,
			name,
			password,
			role: ROLE_ADMIN,
			jobTitle
		})
		res.send({ adminDetail: newAdmin })
	} catch (err) {
		console.error(err)
		res.send({ adminDetail: {} })
	}
}

export const editAdmin = async (req, res) => {
	try {
		const { id, name, password, jobTitle } = req.body.params
		await User.updateOne(
			{ id },
			{
				name,
				password,
				role: ROLE_ADMIN,
				jobTitle
			}
		)
		res.send({})
	} catch (err) {
		console.error(err)
		res.send({})
	}
}

export const deleteAdmin = async (req, res) => {
	try {
		const { id } = req.body.params
		await User.deleteOne({ id })
		res.send({})
	} catch (err) {
		console.error(err)
		res.send({})
	}
}

export const employees = async (req, res) => {
	try {
		const employees = await User.find({ role: ROLE_EMPLOYEE })
		res.send({ employees })
	} catch (err) {
		console.error(err)
		res.send({ employees: [] })
	}
}

export const addEmployee = async (req, res) => {
	try {
		const { id, name, password, jobTitle } = req.body.params
		const newEmployee = await User.create({
			id,
			name,
			password,
			role: ROLE_EMPLOYEE,
			jobTitle
		})
		res.send({ employeeDetail: newEmployee })
	} catch (err) {
		console.error(err)
		res.send({ employeeDetail: {} })
	}
}

export const editEmployee = async (req, res) => {
	try {
		const { id, name, password, jobTitle } = req.body.params
		await User.updateOne(
			{ id },
			{
				name,
				password,
				role: ROLE_EMPLOYEE,
				jobTitle
			}
		)
		res.send({})
	} catch (err) {
		console.error(err)
		res.send({})
	}
}

export const deleteEmployee = async (req, res) => {
	try {
		const { id } = req.body.params
		await User.deleteOne({ id })
		res.send({})
	} catch (err) {
		console.error(err)
		res.send({})
	}
}

export const performanceReviews = async (req, res) => {
	try {
		const performanceReviews = await PerformanceReview.find({})
		res.send({ performanceReviews })
	} catch (err) {
		console.error(err)
		res.send({ performanceReviews: [] })
	}
}

export const addPerformanceReview = async (req, res) => {
	try {
		const { title, employeeId, reviewers, reviewOpen } = req.body.params
		const arr = reviewers.map((reviewerId) => ({ title, employeeId, reviewerId, reviewOpen }))
		const added = await PerformanceReview.create(arr)
		res.send({ performanceReviews: added })
	} catch (err) {
		console.error(err)
		res.send({ addedPerformanceReviews: [] })
	}
}

export const editPerformanceReview = async (req, res) => {
	try {
		const { originTitle, originEmployeeId, title, employeeId, reviewers, reviewOpen } = req.body.params
		await PerformanceReview.deleteMany({ title: originTitle, employeeId: originEmployeeId })
		const arr = reviewers.map((reviewerId) => ({ title, employeeId, reviewerId, reviewOpen }))
		const added = await PerformanceReview.create(arr)
		res.send({ performanceReviews: added })
	} catch (err) {
		console.error(err)
		res.send({})
	}
}
