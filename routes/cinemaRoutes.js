import express from "express"
import { getCinemaByName } from "../controllers/cinemaControllers.js"

const router = express.Router()

router.get("/:name", getCinemaByName)

export default router
