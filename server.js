const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/DB')
const bodyParser = ('body-parser')
const cors = require('cors')

//config dotenv
require('dotenv').config({
    path: './config/config.env'
})

const app = express()

//connect to database
connectDB();

//body parser
app.use(bodyParser.json())