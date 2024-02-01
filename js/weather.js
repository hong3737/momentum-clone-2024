function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather .weather__main");
            const icon = document.querySelector("#weather .weather__icon");
            const temp = document.querySelector("#weather .weather__temp");
            const city = document.querySelector("#weather .weather__city");
            weather.innerText = `${data.weather[0].main}`;
            temp.innerText = `${data.main.temp}°C`;
            city.innerText = data.name;

            switch (data.weather[0].main) {
                case "Clear":
                    icon.innerHTML =
                        '<i class="fa-solid fa-sun" style="color:var(--yellow)"></i>';
                    break;
                case "Wind":
                    icon.innerHTML = '<i class="fa-solid fa-wind"></i>';
                    break;
                case "Clouds":
                    icon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
                    break;
                case "Rain":
                    icon.innerHTML = '<i class="fa-solid fa-umbrella"></i>';
                    break;
                case "Snow":
                    icon.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
                    break;
                default:
                    icon.innerHTML =
                        '<i class="fa-solid fa-sun" style="color:var(--yellow)"></i>';
                    break;
            }
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
