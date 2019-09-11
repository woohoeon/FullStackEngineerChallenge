import express from 'express'
import routes from '../routes'
import {login, logout, requiredPerformanceReviews, submitPerformanceReview} from '../controllers/employeeController'

const employeeRouter = express.Router()

employeeRouter.get(routes.login, login)
employeeRouter.get(routes.logout, logout)
employeeRouter.get(routes.requiredPerformanceReviews, requiredPerformanceReviews)
employeeRouter.get(routes.submitPerformanceReview, submitPerformanceReview)

export default employeeRouter
