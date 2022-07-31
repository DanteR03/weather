async function fetchWeather (city) {
  const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0dbbc34b5fefb544c3a3cc5fff66888e`, {mode: 'cors'})
  const weatherData = await response.json();
  let result = {
    city: weatherData.name,
    description: weatherData.weather[0].description,
    temp: weatherData.main.temp,
    humidity: weatherData.main.humidity,
    clouds: weatherData.clouds.all,
    wind: weatherData.wind.speed,
  };
  enterValues(result);
  addIcon(weatherData.weather[0].icon);
  console.log(weatherData);
}

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

function enterValues (object) {
  const city = document.querySelector('.city');
  const weather = document.querySelector('.weather');
  const temperature = document.querySelector('.temperature');
  const humidity = document.querySelector('.humidity');
  const wind = document.querySelector('.wind');
  const clouds = document.querySelector('.clouds');
  city.textContent = object.city;
  weather.textContent = capitalize(object.description);
  temperature.textContent = `Temp: ${object.temp} °C`;
  humidity.textContent = `Humidity: ${object.humidity} %`;
  wind.textContent = `Wind: ${object.wind} m/s`;
  clouds.textContent = `Clouds: ${object.clouds} %`;
}

function addIcon (id) {
  const icon = document.querySelector('.weather-icon');
  icon.setAttribute('src', `https://openweathermap.org/img/wn/${id}@2x.png`)
}