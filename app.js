import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { test } from "./backend/controllers/UsersController.js"

dotenv.config()

mongoose.connect(process.env.url)
    .then(() => {
        console.log('jala')
    })
    .catch((err) => {
        console.log('no jala', err)
    })

const app = express()
app.use(cors())

app.listen(4000, () => {
    console.log('hay server')
})

test()