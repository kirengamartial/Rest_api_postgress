const express = require('express')
const studentsRoutes = require('./src/student/routes')


const app = express()
const port = 3000
app.use(express.json())
app.use('/api/v1/students', studentsRoutes)

app.listen(port, () => console.log(`app listening to port${port}`))