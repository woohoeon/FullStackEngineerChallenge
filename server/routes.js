// Employees

const LOGIN = '/login'
const LOGOUT = '/logout'
const REQUIRED_PERFORMANCE_REVIEWS = '/required-performance-reviews'
const SUBMIT_PERFORMANCE_REVIEW = '/submit-performance-review'

// Admins

const ADMIN_LOGIN = '/login'
const ADMIN_LOGOUT = '/logout'
const ADMINS = '/admins'
const ADMIN_DETAIL = '/:id'
const ADD_ADMIN = '/add'
const EDIT_ADMIN = '/:id/edit'
const DELETE_ADMIN = '/:id/delete'
const EMPLOYEES = '/employees'
const EMPLOYEE_DETAIL = '/:id'
const ADD_EMPLOYEE = '/add'
const EDIT_EMPLOYEE = '/:id/edit'
const DELETE_EMPLOYEE = '/:id/delete'
const PERFORMANCE_REVIEWS = '/performance-reviews'
const PERFORMANCE_REVIEW_DETAIL = '/:id'
const ADD_PERFORMANCE_REVIEW = '/add'
const EDIT_PERFORMANCE_REVIEW = '/:id/edit'

const routes = {
  login: LOGIN,
  logout: LOGOUT,
  requiredPerformanceReviews: REQUIRED_PERFORMANCE_REVIEWS,
  submitPerformanceReview: SUBMIT_PERFORMANCE_REVIEW,
  adminLogin: ADMIN_LOGIN,
  adminLogout: ADMIN_LOGOUT,
  admins: ADMINS,
  adminDetail: ADMIN_DETAIL,
  addAdmin: ADD_ADMIN,
  editAdmin: EDIT_ADMIN,
  deleteAdmin: DELETE_ADMIN,
  employees: EMPLOYEES,
  employeeDetail: EMPLOYEE_DETAIL,
  addEmployee: ADD_EMPLOYEE,
  editEmployee: EDIT_EMPLOYEE,
  deleteEmployee: DELETE_EMPLOYEE,
  performanceReviews: PERFORMANCE_REVIEWS,
  performanceReviewDetail: PERFORMANCE_REVIEW_DETAIL,
  addPerformanceReview: ADD_PERFORMANCE_REVIEW,
  editPerformanceReview: EDIT_PERFORMANCE_REVIEW,
}

export default routes
