const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'view'))
//setting ejs as the view engine 
app.set('view engine', 'ejs')

//Another middleware to serve static files(css)
app.use(express.static(path.join(__dirname, 'Express')))
app.use('/', require('./routes/routes'))

//starting the server
const port =  5000
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})





