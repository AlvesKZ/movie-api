import MovieService from "../services/MovieService.js";

export default class MovieController {
    constructor() {
        this.movieService = new MovieService();
        this.create = this.create.bind(this);
    }

    async create(req, res) {
        try {
            const movie = await this.movieService.create(req.body);

            return res.status(201).json({
                message: "Movie successfully registered.",
                movie
            });
        } catch (error) {
            if (error.name === "ValidationError") {
                return res.status(400).json({
                    message: error.message,
                });
            }

            return res.status(500).json({
                message: "Internal error",
            });
        }
    }
}