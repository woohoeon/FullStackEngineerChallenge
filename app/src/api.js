import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000'

const api = axios.create({ baseURL: API_BASE_URL })

const appendAdminPath = (path) => `api/admin/${path}`

const appendEmployeePath = (path) => `api/employee/${path}`

export const adminApi = {
	login: (id, password) => api.post(appendAdminPath('login'), { params: { id, password } }),
	logout: () => api.post(appendAdminPath('logout')),
	admins: () => api.get(appendAdminPath('admins')),
	addAdmin: (id, name, password, jobTitle) =>
		api.post(appendAdminPath('admins/add'), {
			params: {
				id,
				name,
				password,
				jobTitle
			}
		}),
	editAdmin: (id, name, password, jobTitle) =>
		api.post(appendAdminPath('admins/edit'), {
			params: {
				id,
				name,
				password,
				jobTitle
			}
		}),
	deleteAdmin: (id) => api.post(appendAdminPath('admins/delete'), { params: { id } }),
	employees: () => api.get(appendAdminPath('employees')),
	addEmployee: (id, name, password, jobTitle) =>
		api.post(appendAdminPath('employees/add'), {
			params: {
				id,
				name,
				password,
				jobTitle
			}
		}),
	editEmployee: (id, name, password, jobTitle) =>
		api.post(appendAdminPath('employees/edit'), {
			params: {
				id,
				name,
				password,
				jobTitle
			}
		}),
	deleteEmployee: (id) => api.post(appendAdminPath('employees/delete'), { params: { id } }),
	performanceReviews: () => api.get(appendAdminPath('performance-reviews')),
	addPerformanceReview: (title, employeeId, reviewers, reviewOpen) =>
		api.post(appendAdminPath('performance-reviews/add'), {
			params: {
				title,
				employeeId,
				reviewers,
				reviewOpen
			}
		}),
	editPerformanceReview: (originTitle, originEmployeeId, title, employeeId, reviewers, reviewOpen) =>
		api.post(appendAdminPath('performance-reviews/edit'), {
			params: {
				originTitle,
				originEmployeeId,
				title,
				employeeId,
				reviewers,
				reviewOpen
			}
		})
}

export const employeeApi = {
	login: (id, password) => api.post(appendEmployeePath('login'), { params: { id, password } }),
	logout: () => api.post(appendEmployeePath('logout')),
	requiredPerformanceReviews: (id) => api.get(appendEmployeePath('required-performance-reviews'), { params: { id } }),
	submitPerformanceReview: () => api.post(appendEmployeePath('submit-performance-review'))
}

export default api
