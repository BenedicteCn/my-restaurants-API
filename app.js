// This is where we will live code a basic express server

// import the express functionality

const express = require('express')
const app = express()
const port = 3000

// configuration
// use a JSON middleware parser
app.use(express.json())

const restaurantsRouter = require('./routes/restaurants.routes.js')
app.use('/', restaurantsRouter)

app.use('/category', restaurantsRouter)

app.use('/type_of_food', restaurantsRouter)


// const addErrorHandling = require('./error-handling.js')
// addErrorHandling(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
