var weather;
var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=001b0f58045147663b1ea518d34d88b4&";
var units = "units=metric";
var city;


function setup() {
    createCanvas(400, 200);
    document.getElementById("submit").addEventListener("click", weatherAsk);
}

function weatherAsk() {
    city = document.getElementById("city").value;
    var url = api + city + apiKey + units;
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data;

}

function draw() {
    background(0);
    if (weather) {
        var temp = weather.main.temp;
        var temp_min = weather.main.temp_min;
        ellipse(50, 100, temp, temp);
        ellipse(300, 100, temp_min, temp_min);
    }
}
