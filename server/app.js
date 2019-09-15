import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import employeeRouter from './routers/employeeRouter'
import adminRouter from './routers/adminRouter'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use((req, res, next) => {
	// Enable CORS
	// https://create-react-app.dev/docs/proxying-api-requests-in-development
	const ACCESS_CONTROL_ALLOW_ORIGIN = process.env.ACCESS_CONTROL_ALLOW_ORIGIN || 'http://localhost:3000'
	res.header('Access-Control-Allow-Origin', ACCESS_CONTROL_ALLOW_ORIGIN)
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	next()
})

app.use('/api/employee', employeeRouter)
app.use('/api/admin', adminRouter)

export default app
