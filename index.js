const express = require('express')
const cors = require('cors')
const placemarkRoute = require('./routes/placemark.routes')
const PORT = 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', placemarkRoute)


app.listen(PORT, () => console.log(`server started on port ${PORT}`))