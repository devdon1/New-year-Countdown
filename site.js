/*
    A HTML page that displays the days, hours, minutes and seconds left to new year 
*/

function CountDown()
{
    let countDownDate = new Date(2021,0,1);
    let countDownHour = countDownDate.getHours();
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();
    let millisecondsInADay = (1000*60*60*24);

    //Days
    let timeDifference = countDownDate.getTime() - currentDate.getTime();
    let daysLeft = Math.floor(timeDifference / millisecondsInADay);
    // console.log('Days: ' + daysLeft);

    document.getElementById('days').innerHTML = daysLeft;

    //Hours
    let hourFromCountDownDate = countDownHour == 0 ? 24 : countDownHour;
    let hoursLeft =  Math.floor((((hourFromCountDownDate - currentHour) * 60) - currentMinute) / 60);
    // console.log('Hours: ' + hoursLeft);

    document.getElementById('hours').innerHTML = hoursLeft;

    //Minutes
    let minutesLeft = 60 - currentMinute;
    // console.log('Minutes: ' + minutesLeft);

    document.getElementById('minutes').innerHTML = minutesLeft;

    //Seconds
    let secondsLeft = 60 - currentSecond;
    // console.log('Seconds: ' + secondsLeft);

    document.getElementById('seconds').innerHTML = secondsLeft;
}

CountDown();
setInterval(CountDown, 1000);