import express from 'express'
import routes from '../routes'
import {
  adminLogin,
  adminLogout,
  admins,
  adminDetail,
  addAdmin,
  editAdmin,
  deleteAdmin,
  employees,
  employeeDetail,
  addEmployee,
  editEmployee,
  deleteEmployee,
  performanceReviews,
  performanceReviewDetail,
  addPerformanceReview,
  editPerformanceReview,
} from '../controllers/adminController'

const adminRouter = express.Router()

adminRouter.get(routes.adminLogin, adminLogin)
adminRouter.get(routes.adminLogout, adminLogout)
adminRouter.get(routes.admins, admins)
adminRouter.get(routes.adminDetail, adminDetail)
adminRouter.get(routes.addAdmin, addAdmin)
adminRouter.get(routes.editAdmin, editAdmin)
adminRouter.get(routes.deleteAdmin, deleteAdmin)
adminRouter.get(routes.employees, employees)
adminRouter.get(routes.employeeDetail, employeeDetail)
adminRouter.get(routes.addEmployee, addEmployee)
adminRouter.get(routes.editEmployee, editEmployee)
adminRouter.get(routes.deleteEmployee, deleteEmployee)
adminRouter.get(routes.performanceReviews, performanceReviews)
adminRouter.get(routes.performanceReviewDetail, performanceReviewDetail)
adminRouter.get(routes.addPerformanceReview, addPerformanceReview)
adminRouter.get(routes.editPerformanceReview, editPerformanceReview)

export default adminRouter
