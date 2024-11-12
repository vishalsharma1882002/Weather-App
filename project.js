const BASE_URL =
  "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7386464d3b9bcdef368ffc6c303f864d&units=metric";
const searchbar = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon img");

async function weatherAPI(cityName) {
  const newURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7386464d3b9bcdef368ffc6c303f864d&units=metric`;
  let response = await fetch(newURL);
  var data = await response.json();
  document.querySelector(".cityName").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".temp").innerHTML = data.main.temp + "° C";
  document.querySelector(".windspeed").innerHTML = data.wind.speed + " kmph";
  if (data.weather[0].main == "Haze") {
    weatherIcon.src = "drizzle.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "clouds.png";
  } else if (data.weather[0].main == "Humidity") {
    weatherIcon.src = "humidity.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "snow.png";
  }
}
searchbtn.addEventListener("click", () => {
  weatherAPI(searchbar.value);
});
