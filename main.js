
const apiKey= "252878abf39b9fe809afadc7618b41ab";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
  const response = await fetch(apiUrl + '&appid=${apiKey}');
  var data =await response.json();

  console.log(data);
}

