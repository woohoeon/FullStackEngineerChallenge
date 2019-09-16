import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URL = process.env.PRDUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL
mongoose.connect(MONGO_URL, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
})

const db = mongoose.connection

const handleOpen = () => console.log('✅ Connected to DB')
const handleError = (error) => console.log(`❌ Error on DB Connetion: ${error}`)

db.once('open', handleOpen)
db.on('error', handleError)
