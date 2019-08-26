let appId = '138a8b27c66fbcceb4b62dbfadc44c46';
let units = 'metric';
let searchMethod = 'q';

function searchWeather(searchTerm) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
    return result.json();
  }).then(result => {
    init(result);
  })
}

function init(resultFromServer) {

  switch (resultFromServer.weather[0].description) {
    case 'few clouds':
      document.body.style.backgroundImage = 'url("img/fewclouds.svg")';
      break;

    case 'clear sky':
      document.body.style.backgroundImage = 'url("img/clearsky.svg")';
      break;

    case 'thunderstorm':
    case 'light thunderstorm':
    case 'heavy thunderstorm':
    case 'ragged thunderstorm':
      document.body.style.backgroundImage = 'url("img/thunderstorm.svg")';
      break;

    case 'broken clouds':
      document.body.style.backgroundImage = 'url("img/brokenclouds.svg")';
      break;

    case 'thunderstorm with light rain':
    case 'thunderstorm with heavy rain':
    case 'thunderstorm with light drizzle':
    case 'thunderstorm with heavy drizzle':
    case 'thunderstorm with drizzle':
    case 'thunderstorm with rain':
      document.body.style.backgroundImage = 'url("img/thunderstormwrain.svg")';
      break;

    case 'rain':
    case 'extreme rain':
    case 'very heavy rain':
    case 'heavy intensity rain':
    case 'moderate rain':
    case 'light rain':
      document.body.style.backgroundImage = 'url("img/lightrain.svg")';
      break;

    case 'drizzle':
    case 'light intensity drizzle':
    case 'heavy intensity drizzle':
    case 'light intensity drizzle rain':
    case 'heavy intensity drizzle rain':
    case 'shower rain and drizzle':
    case 'heavy shower rain and drizzle':
    case 'shower drizzle':
    case 'drizzle rain':
    case 'shower rain':
    case 'heavy intensity shower rain':
    case 'ragged shower rain':
    case 'light intensity shower rain':
      document.body.style.backgroundImage = 'url("img/drizzle.svg")';
      break;

    case 'scattered clouds':
    case 'overcast clouds':
      document.body.style.backgroundImage = 'url("img/scatteredclouds.svg")';
      break;

    case 'mist':
    case 'Smoke':
    case 'haze':
    case 'sand/ dust whirls':
    case 'fog':
    case 'sand':
    case 'dust':
    case 'volcanic ash':
    case 'squalls':
    case 'tornado':
      document.body.style.backgroundImage = 'url("img/mist.svg")';


    default:

  }

  console.log(resultFromServer);


let cityName = document.getElementById('cityHead');
let temperatureElem = document.getElementById('temp');
let unit = document.getElementById('unit');
let weatherDescription = document.getElementById('weatherdescrip');
let seperate = document.getElementById('seperation');


temperatureElem.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
cityName.innerHTML = resultFromServer.name;
unit.innerHTML = "C";
weatherdescrip.innerHTML = resultFromServer.weather[0].description;


}

document.getElementById('searchbtn').addEventListener('click', () => {
  let searchTerm = document.getElementById('searchInput').value;
  if(searchTerm)
    searchWeather(searchTerm);
})
