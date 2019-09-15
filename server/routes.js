// Employees

const LOGIN = '/login'
const LOGOUT = '/logout'
const REQUIRED_PERFORMANCE_REVIEWS = '/required-performance-reviews'
const SUBMIT_PERFORMANCE_REVIEW = '/submit-performance-review'

// Admins

const ADMIN_LOGIN = '/login'
const ADMIN_LOGOUT = '/logout'
const ADMINS = '/admins'
const ADD_ADMIN = '/admins/add'
const EDIT_ADMIN = '/admins/edit'
const DELETE_ADMIN = '/admins/delete'
const EMPLOYEES = '/employees'
const ADD_EMPLOYEE = '/employees/add'
const EDIT_EMPLOYEE = '/employees/edit'
const DELETE_EMPLOYEE = '/employees/delete'
const PERFORMANCE_REVIEWS = '/performance-reviews'
const ADD_PERFORMANCE_REVIEW = '/performance-reviews/add'
const EDIT_PERFORMANCE_REVIEW = '/performance-reviews/edit'

const routes = {
	login: LOGIN,
	logout: LOGOUT,
	requiredPerformanceReviews: REQUIRED_PERFORMANCE_REVIEWS,
	submitPerformanceReview: SUBMIT_PERFORMANCE_REVIEW,
	adminLogin: ADMIN_LOGIN,
	adminLogout: ADMIN_LOGOUT,
	admins: ADMINS,
	addAdmin: ADD_ADMIN,
	editAdmin: EDIT_ADMIN,
	deleteAdmin: DELETE_ADMIN,
	employees: EMPLOYEES,
	addEmployee: ADD_EMPLOYEE,
	editEmployee: EDIT_EMPLOYEE,
	deleteEmployee: DELETE_EMPLOYEE,
	performanceReviews: PERFORMANCE_REVIEWS,
	addPerformanceReview: ADD_PERFORMANCE_REVIEW,
	editPerformanceReview: EDIT_PERFORMANCE_REVIEW
}

export default routes
