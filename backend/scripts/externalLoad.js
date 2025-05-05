import MovieModel from "../src/models/movie/movie.model";

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2MyOTdjMGZlMGU2ODFiYTBlMjc3YTg3YTU0YmM1ZSIsIm5iZiI6MTc0NjE2OTAyNy40MjEsInN1YiI6IjY4MTQ2Y2MzMWMzYThlMzIwYTkxMjhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WL6PdE-xbF_9ZgigkbM8fAM9JmHPZwudDpQNA_YCT_Y'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(async (json) => {
        const moviesPromises = json.results.map((movie) => {
            const newMovie = new MovieModel({
                title: movie.title,
                description: movie.overview,
                adult: movie.adult,
                releaseDate: movie['release_date'],
                voteAverage: movie['vote_average']
            })

            return newMovie.save()
        })

        await Promise.all(moviesPromises)

        res.status(200).json({
            message: 'Movies uploaded successfully'
        })
    })
    .catch(err => console.error(err));
