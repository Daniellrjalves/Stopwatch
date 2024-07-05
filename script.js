const buttonStart = document.querySelector(".btn-start")
const buttonPause = document.querySelector(".btn-pause")
const buttonStop = document.querySelector(".btn-stop")

let hours = 0
let minutes = 0
let seconds = 0
let cron
let h1 = document.querySelector("h1")


function start() {
    cron = setInterval( function(){
        seconds++
        h1.innerHTML = digitTime(hours) + ":" + digitTime(minutes) + ":" + digitTime(seconds)
        if (seconds==60) {
            seconds = 0
            minutes++
        if (minutes==60) {
            minutes = 0
            hours++
           
        }
        }
        

    }, 10)
}

function pause() {
    clearInterval(cron)
}

function stop() {
    clearInterval(cron)
    minutes = 0
    seconds = 0
    h1.innerHTML = "00:00:00"
}

function digitTime(digit) {
    if(digit < 10) {
        return ("0" + digit)
    } else {
        return (digit)
    }
}


buttonStart.addEventListener("click", start)
buttonPause.addEventListener("click", pause)
buttonStop.addEventListener("click", stop )
