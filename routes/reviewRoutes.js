import express from "express"
import { createReview, getReviews } from "../controllers/reviewController.js"

const router = express.Router()

//id == film id
router.get("/:id", getReviews)
router.post("/", createReview)

export default router
