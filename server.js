import express from "express"
import dotenv from "dotenv"
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js"
import connectDb from "./config/db.js"
import reviewRoutes from "./routes/reviewRoutes.js"

//load .env file to process.env
dotenv.config()

//connect to mongodb
connectDb()

const app = express()

//to parse json
app.use(express.json())

//Reviews routes
app.use("/api/reviews", reviewRoutes)

//404 Error, if the url not found
app.use(notFound)

//Error Handling
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})
