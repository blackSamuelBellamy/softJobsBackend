const express = require('express')
const cors = require('cors')
const app = express()
const indexRoutes = require('./src/routes/indexRoutes')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/', indexRoutes)
app.listen(3000, console.log('SERVER ON'))
