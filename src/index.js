const express = require('express')
const app = express()
const userRouter = require('./routes/user')
// require('dotenv').config();

//port
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

//routes
app.use(userRouter)

app.listen(PORT, ()=> {
    console.log(`listen on port: ${PORT}`)
})
