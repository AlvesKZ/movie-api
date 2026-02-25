import { Router } from "express";
import MovieController from "../controllers/MovieController.js";

const router = Router();
const movieController = new MovieController();

router.get('/', (req, res) => {
    res.send("Hi");
});

router.post('/movie', movieController.create);

export default router;