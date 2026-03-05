import { Router } from "express";
import { getMovies } from "../controllers/moviesController.js";
import movies from "../data/movies.json" with { type: "json"}

const router = Router()

router.get("/", getMovies)


export default router