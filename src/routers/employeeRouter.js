import express from 'express'
import routes from '../routes'
import { login, requiredPerformanceReviews, submitPerformanceReview } from '../controllers/employeeController'

const employeeRouter = express.Router()

employeeRouter.post(routes.login, login)
employeeRouter.post(routes.requiredPerformanceReviews, requiredPerformanceReviews)
employeeRouter.post(routes.submitPerformanceReview, submitPerformanceReview)

export default employeeRouter
