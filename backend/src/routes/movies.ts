import {Router} from "express";
import {getMoviesList, getMoviesUsingGraphql} from "../controllers/movies.ts";

const moviesRouter = Router()

moviesRouter.get('/movies', (req, res) => {
    const page = Number(req.query.page) || 1

    getMoviesList(page, req, res)
})

moviesRouter.get('/movies/graphql', getMoviesUsingGraphql)

export default moviesRouter
