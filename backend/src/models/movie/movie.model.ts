import mongoose from "mongoose"

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    adult: {
        type: Boolean,
        required: true,
    },
    releaseDate: {
        type: String,
        required: true,
    },
    voteAverage: {
        type: Number,
    }
})

const MovieModel = mongoose.model('movies', MovieSchema)

export default MovieModel
