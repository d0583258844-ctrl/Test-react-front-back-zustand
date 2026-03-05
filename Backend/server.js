import express from "express"
import cors from "cors"
import moviesRoutes from "./rouets/moviesRoutes.js"
import "dotenv/config"

const port = process.env.PORT || 3000
const app = express()
app.use(cors())

app.use("/", moviesRoutes)

app.listen(port, () => {
    console.log(`Server runing on port: ${port}`);
})