import {ApolloServer} from "@apollo/server";
import {typeDefs} from "./schema/index.ts";
import MovieModel from "../models/movie/movie.model.ts";

const resolvers = {
    Query: {
        movies: async () => {
            const moviesList = await MovieModel.find()
            return moviesList
        }
    }
}

export const server = new ApolloServer({
    typeDefs,
    resolvers,
})
