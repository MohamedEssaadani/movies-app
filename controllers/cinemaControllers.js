import asyncHandler from "express-async-handler"
import Cinema from "../models/cinema.js"

//@desc Get cinema by name
//@route /api/cinemas/:name
//@access PUBLIC
const getCinemaByName = asyncHandler(async (req, res) => {
  const cinema = await Cinema.findOne({
    name: req.params.name,
  })

  res.json(cinema)
})

export { getCinemaByName }
