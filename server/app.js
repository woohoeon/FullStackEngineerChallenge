import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import routes from './routes'
import employeeRouter from './routers/employeeRouter'
import adminRouter from './routers/adminRouter'

const app = express()

app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

const appendApiPath = path => `/api${path}`

app.use(appendApiPath(routes.employees), employeeRouter)
app.use(appendApiPath(routes.admins), adminRouter)

export default app
