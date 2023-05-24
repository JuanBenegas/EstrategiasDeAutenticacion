import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import exp from 'constants'
import prodsRouter from './src/routes/prodsRouter.js'


void (async () => {
    await mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const PORT = 8080
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/api', prodsRouter)

    app.listen(PORT, () => {
        console.log("Server listening in port -->8080<--")
    })
})()