import dotenv from "dotenv"
import connectDb from "./config/db.js"
import reviews from "./data/reviews.js"
import Review from "./models/review.js"

//load .env content to process.env
dotenv.config()

//connect to db
connectDb()

const importData = async () => {
  try {
    //delete all reviews
    await Review.deleteMany()

    //insert reviews
    await Review.insertMany(reviews)

    console.log("Data Imported!")
    process.exit()
  } catch (error) {
    console.log(`Error while importing data: ${error}`)
    process.exit(1)
  }
}

importData()
