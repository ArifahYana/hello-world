var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var speed = document.querySelector('.speed');
var deg = document.querySelector('.deg');
var pressure = document.querySelector('.pressure');
var humidity = document.querySelector('.humidity');
var button= document.querySelector('.submit');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var pressureValue = data['main']['pressure'];
  var humidityValue = data['main']['humidity'];
  var nameValue = data['name'];
  var nameValue = data['name'];
  var speedValue = data['wind']['speed'];
  var degValue = data['wind']['deg'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Weather ~ "+descValue;
  temp.innerHTML = "Temperature ~ "+tempValue +"°C";
  humidity.innerHTML = "Humidity ~ "+humidityValue +"%";
  pressure.innerHTML="Pressure ~ "+pressureValue +" mb ";
  speed.innerHTML = "Wind speed ~ "+speedValue +" m/s ";
  deg.innerHTML = "Wind degree ~ "+degValue +" °";
  input.value ="";

})
//error popup message if enter wrong city name
.catch(err => alert("Wrong city name!"));
})