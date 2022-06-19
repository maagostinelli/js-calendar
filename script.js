const date = new Date //returns date, time and browser time zone
console.log(date)
const renderCalendar = () => {
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const monthDays = document.querySelector('.days')
    
    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
    //0-> returns the last day of the previous month, .getDate()-> returns only the day
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    
    date.setDate(1)
    const firstDayIndex = date.getDay() // get week day of 1th current month
    
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay()
    
    document.querySelector('.date h1').innerHTML = months[date.getMonth()]
    document.querySelector('.date p').innerHTML = new Date().toDateString()
    
    let days = ""
    const nextDays = 42 - (firstDayIndex + lastDay) 

    for (let p = firstDayIndex; p >= 1; p--) {
        days += `<div class="prev-days">${prevLastDay - p + 1}</div>`
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`
        } else {
            days += `<div>${i}</div>`
        }
    }
    for (let n = 1; n <= nextDays; n++) { //42 - 30 firstDayIndex-1 + lastDay
        days += `<div class="next-days">${n}</div>`
    }
    
    monthDays.innerHTML = days
}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth()-1)
    renderCalendar()
})
document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth()+1)
    renderCalendar()
})

renderCalendar()