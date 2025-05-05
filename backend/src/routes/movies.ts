import {Router} from "express";
import {getMoviesList} from "../controllers/movies";
import {authMiddleware} from "../middlewares/auth";

const moviesRouter = Router()

moviesRouter.use(authMiddleware)

moviesRouter.get('/movies', (req, res) => {
    const page = Number(req.query.page) || 1

    getMoviesList(page, req, res)
})

export default moviesRouter
