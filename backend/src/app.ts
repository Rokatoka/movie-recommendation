import express from 'express'
import authRouter from "./routes/auth.ts";
import moviesRouter from "./routes/movies.ts";
import {connectToMongoDB} from "./config/db/mongo.ts";
import config from "./config/index.ts";
import session from "express-session";
import {expressMiddleware} from "@apollo/server/express4";
import {server} from "./graphql/server.ts";

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
