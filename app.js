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
    case 'clear sky':
      document.body.style.backgroundImage = 'url("brokenclouds.svg")';
      break;

    case 'broken clouds':

      break;

    case 'rain':

      break;

    default:

  }


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
