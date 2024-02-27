//customized middle to verify working hours
const workingHours = (req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay(); //day of the week, here it starts counting from 0-6  i.e saturday is 6, sunday is 0.
    const hourOfDay = date.getHours()

    //The condition for the above function. The web application is only available during working hours (Monday to Friday,  from 9 to 17).
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay <= 17){
        //means it is a working day and hours
        next()
    } else{
        res.send('Sorry, the website is only available during working hours (Monday to Friday, from 9am to 5pm)')
    }
}

module.exports = workingHours;