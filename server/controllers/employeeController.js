import User from '../models/User'

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

export const logout = (req, res) => res.send('logout')

export const requiredPerformanceReviews = (req, res) => res.send('requiredPerformanceReviews')

export const submitPerformanceReview = (req, res) => res.send('submitPerformanceReview')
