const express = require('express')
const connectToMongo = require('./db')
var cors = require('cors')
const app = express()
connectToMongo();
const port = 5000
//middlewares
app.use(express.json())
app.use(cors())
//Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
