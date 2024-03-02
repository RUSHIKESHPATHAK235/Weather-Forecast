const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apikey = ""

const searchBox = document.querySelector(".input-field input")
const searchButton = document.querySelector(".container-btn button")
const weatherIcon = document.querySelector(".clouds img")

async function checkClimate(city){
  const response = await fetch(api + city + `&appid=${apikey}`)
  
  

  if(response.status == 404){
    document.querySelector(".city-search").style.display = "none";
    document.querySelector(".error").style.display = "block";
  }
  else{
    var data = await response.json();

  document.querySelector(".city-name h1").innerHTML = data.name;
  document.querySelector(".temp h2").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity p").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-speed p").innerHTML = data.wind.speed + "Km/h";

  if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"
  }
  else if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png"
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png"
  }
  document.querySelector(".city-search").style.display = "block";
  document.querySelector(".error").style.display = "none";

  if(document.querySelector(".city-search").style.display = "block"){
    document.querySelector(".container").style.height = '800px';
  }
  }
  
}
searchButton.addEventListener('click', function(){
  checkClimate(searchBox.value);
})

checkClimate();
