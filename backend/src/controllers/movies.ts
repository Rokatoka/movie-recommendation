import MovieModel from "../models/movie/movie.model";
import type {Request, Response} from "express";

export async function getMoviesList(page: number, req: Request, res: Response) {
    const pageSize = 5
    const moviesList = await MovieModel.find({voteAverage: {$gt: 7}}).skip((page - 1) * pageSize).limit(pageSize)

    res.status(200).json({
        list: moviesList
    })
}
