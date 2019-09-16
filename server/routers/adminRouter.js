import express from 'express'
import routes from '../routes'
import {
	adminLogin,
	admins,
	addAdmin,
	editAdmin,
	deleteAdmin,
	employees,
	addEmployee,
	editEmployee,
	deleteEmployee,
	performanceReviews,
	addPerformanceReview,
	editPerformanceReview
} from '../controllers/adminController'

const adminRouter = express.Router()

adminRouter.post(routes.adminLogin, adminLogin)
adminRouter.get(routes.admins, admins)
adminRouter.post(routes.addAdmin, addAdmin)
adminRouter.post(routes.editAdmin, editAdmin)
adminRouter.post(routes.deleteAdmin, deleteAdmin)
adminRouter.get(routes.employees, employees)
adminRouter.post(routes.addEmployee, addEmployee)
adminRouter.post(routes.editEmployee, editEmployee)
adminRouter.post(routes.deleteEmployee, deleteEmployee)
adminRouter.get(routes.performanceReviews, performanceReviews)
adminRouter.post(routes.addPerformanceReview, addPerformanceReview)
adminRouter.post(routes.editPerformanceReview, editPerformanceReview)

export default adminRouter
