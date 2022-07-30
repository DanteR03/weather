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
}