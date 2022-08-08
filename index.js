const express = require('express')
const placemarkRoute = require('./routes/placemark.routes')
const PORT = 5000

const app = express()

app.use(express.json())
app.use('/api', placemarkRoute)


app.listen(PORT, () => console.log(`server started on port ${PORT}`))