import express from 'express'
import { json } from 'body-parser'

const app = express()
app.use(json())

app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "welcome to auth service" })
})

app.listen(3000, () => console.log("server is running on:3000"))