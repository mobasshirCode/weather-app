const apiKey = "53da9af0955b1f0030e21e97d478f736";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const detailbtn = document.querySelector(".weather button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";
    document.querySelector(".low").textContent = data.main.temp_min + "°C";
    document.querySelector(".high").textContent = data.main.temp_max + "°C";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    }
    if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/mist.png";
    }
    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    }
    if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }
    if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".card").style.height = "480px";
    document.querySelector(".card").style.transition =
      "height 1.5s ease-in-out";
  }
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});

detailbtn.addEventListener("click", () => {
  if (document.querySelector(".weather button").textContent.includes("Show")) {
    document.querySelector(".card").style.height = "670px";
    document.querySelector(".card").style.transition =
      "height 1.5s ease-in-out";
    document.querySelector(".weather button").textContent = "⮝ Hide Details ⮝";
  } else {
    document.querySelector(".weather button").textContent = "⮟ Show Details ⮟";
    document.querySelector(".card").style.height = "480px";
    document.querySelector(".card").style.transition = "all 1.5s ease-in-out";
  }
});
