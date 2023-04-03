const API_KEY = "d13a27c3ad20eb43b533adad08e5c0d1"


function geoSuccess(potato){ // 성공 콜백
    const lat = potato.coords.latitude;
    const lon = potato.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json()) // 응답
        .then(data => {
            const city = data.name;
            const weather = data.weather[0].main;
            const temp = data.main.temp;
            // const showCity = document.querySelector("#weather span:first-child");
            const showWeather = document.querySelector("#weather span:first-child");
            // const showTemp = document.querySelector("#weather span:last-child");
            // showCity.innerHTML = city;
            showWeather.innerHTML = `It is ${weather} in ${city} where you are. Temperature: ${temp}°C`;
            // showTemp.innerHTML = temp;
            }
        ); 
}

function geoFail(){ // 실패 콜백
    alert("Cannnot find you :(")
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoFail)


