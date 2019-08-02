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



let cityName = document.getElementById('cityHead');
let temperatureElem = document.getElementById('temp');



temperatureElem.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
cityName.innerHTML = resultFromServer.name;

}

document.getElementById('searchbtn').addEventListener('click', () => {
  let searchTerm = document.getElementById('searchInput').value;
  if(searchTerm)
    searchWeather(searchTerm);
})
