import Movie from "../models/Movie.js"; 

export default class MovieService {
    async create(data) {
        return await Movie.create(data);
    }
}