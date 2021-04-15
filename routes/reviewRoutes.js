import express from "express"
import { createReview, getReviews } from "../controllers/reviewController.js"

const router = express.Router()

//id == film id
router.get("/", getReviews)
router.get("/", createReview)

export default router
