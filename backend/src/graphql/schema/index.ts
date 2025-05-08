import {GraphQLSchema, GraphQLString, GraphQLObjectType, GraphQLFloat, GraphQLList, GraphQLBoolean} from "graphql";
import MovieModel from "../../models/movie/movie.model.ts";

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
        title: {
            type: GraphQLString,
        },
        voteAverage: {
            type: GraphQLFloat
        },
        description: {
            type: GraphQLString
        },
        adult: {
            type: GraphQLBoolean
        }
    }
})

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType<any, any>({
        name: 'RootQuery',
        fields: {
            movies: {
                type: new GraphQLList(MovieType),
                resolve: () => {
                    return MovieModel.find();
                }
            }
        }
    })
})

export const typeDefs = `#graphql
    type Movie {
        title: String!
        voteAverage: Float!
    }

    type User {
        username: String!
    }

    type Query {
        movies: [Movie!]!
        users: [User!]!
    }
`
