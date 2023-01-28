const express = require('express')
const cors = require('cors')
const app = express()
const message = require('./src/helper/message')
const indexRoutes = require('./src/routes/indexRoutes')
const PORT = proces.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/', indexRoutes)
app.listen(PORT, message(PORT) )
