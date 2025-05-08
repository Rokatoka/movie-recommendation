import MovieModel from "../models/movie/movie.model.ts";
import type {Request, Response} from "express";
import {graphql} from "graphql";
import {schema} from "../graphql/schema/index.ts";

export async function getMoviesList(page: number, req: Request, res: Response) {
    const pageSize = 5
    const moviesList = await MovieModel.find({voteAverage: {$gt: 7}}).skip((page - 1) * pageSize).limit(pageSize)

    res.status(200).json({
        list: moviesList
    })
}

export async function getMoviesUsingGraphql(req: Request, res: Response) {
    const query = `{
        movies {
            voteAverage
            description
            adult
        }
    }`

    const result = await graphql({
        schema,
        source: query
    })

    res.json(result)
}
