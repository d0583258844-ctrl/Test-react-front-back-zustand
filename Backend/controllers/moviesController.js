import movies from "../data/movies.json" with {type: "json"}

export const getMovies = (req, res) => {
    try {
      res.json(movies)  
    } catch (error) {
        res.status(500).json({error: "Data dosnt load"})
    }
}
