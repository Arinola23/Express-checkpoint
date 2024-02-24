const express = require('express')
const app = express()
const path = require('path')

//setting ejs as the view engine 
app.set('view engine', 'ejs')

//customized middle to verify working hours
const workingHours = (req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay(); //day of the week, here it starts counting from 0-6  i.e saturday is 6, sunday is 0.
    const hourOfDay = date.getHours()

    //The condition for the above function. The web application is only available during working hours (Monday to Friday,  from 9 to 17).
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay <=17){
        //means it is a working day and hours
        next()
    } else{
        res.send('Sorry, the website is only available during working hours (Monday to Friday, from 9am to 5pm)')
    }
}

//Another middleware to serve static files(css)
app.use(express.static(path.join(__dirname, 'public')))

//middleware to verify working hours for all routes
app.use(workingHours)

//Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/sevices', (req, res) => {
    res.render('sevices')
})

app.get('/contacts', (req, res) => {
    res.render('contact')
})

//starting the server
const port =  5000
app.listen(port, () => {
    console.log(`Server is running on port {port}`)
})