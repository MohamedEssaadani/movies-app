import asyncHandler from "express-async-handler"
import Review from "../models/review.js"

//@desc Get All Reviews
//@route /api/reviews
//@access PUBLIC
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({
    filmId: req.params.id,
  })

  res.json(reviews)
})

//@desc Create New Review
//@route /api/reviews
//@access PUBLIC
const createReview = asyncHandler(async (req, res) => {
  const { filmId, name, review, rating } = req.body

  const createdReview = await Review.create({
    filmId,
    name,
    review,
    rating,
  })

  if (createdReview) {
    res.status(201).json(createdReview)
  } else {
    res.status(400)
    throw new Error("Invalid informations! ")
  }
})

export { getReviews, createReview }
