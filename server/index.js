import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import Router from './routes/route.js'
import Connection from './database/db.js'

const app = express()
dotenv.config()

//Middleware
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 8000
app.use('/', Router)
app.listen(port, () => {
    console.log(`Server start at ${port}`)
})
app.get('/', (req, res) => {
    res.send('Start')
})
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

Connection(username, password)