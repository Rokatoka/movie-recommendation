import express from 'express'
import authRouter from "./routes/auth";
import moviesRouter from "./routes/movies";
import {connectToMongoDB} from "./config/db/mongo";
import config from "./config";

const session = require('express-session')

const app = express()

// Connect to databases
connectToMongoDB()

// Common middlewares
app.use(express.json())
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
}))

// Router middlewares
app.use(authRouter)
app.use(moviesRouter)

export default app
