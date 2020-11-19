//greet and time
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
        sec
    )} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Run
showTime();


fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=c83b165993a31dceb97ea4218a5a17f8')
.then(resp=>resp.json())
.then(json=>{
    let city = json.name
    let tempKelv = json.main.temp
    let tempF = (tempKelv - 273.15) * 9/5 + 32
    let roundedTemp = Math.round(tempF)
    let temp = document.getElementById('temp')
    temp.innerText = roundedTemp + '°'
    let newCity = document.getElementById('city')
    newCity.append(city)
    let humidity = json.main.humidity
    let humidityDiv = document.getElementById('humidity')
    humidityDiv.innerText = humidity + '% Humidity'
})
