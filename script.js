//73eb66c3757f927a0232585d5e050034 API key
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=73eb66c3757f927a0232585d5e050034

const body = document.querySelector('.body');
const search = document.querySelector('.search');
const btn = document.querySelector('.button');

btn.addEventListener('click', findWeather);

function findWeather(){
    console.log('hello, you cunt')
    const location = search.value;
    console.log(`search location: ${location}`);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=73eb66c3757f927a0232585d5e050034` , {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log('found');
        console.log(response);
        console.log(response.main.temp)
        displayData(response);
    })
    .catch(function(err){
        console.log('error');
    })


}

function displayData(response){
    let weather = response.weather[0].main;
    let city = response.name;
    let country = response.sys.country;
    console.log(weather);
    console.log(response.timezone)
    console.log("hello");
    let d = new Date();
    let h = d.getHours() + (response.timezone/3600);
    let m = d.getMinutes();
    console.log(m);


    if ( h < 7 || h > 20){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "lightblue";
        body.style.color = "black";
    }

    body.innerText = `City: ${city}, Country: ${country}`;
    body.innerText += ` Temp: ${parseInt(response.main.temp-273)} degrees,`;
    body.innerText += ` The time: ${h}:${m},`;
    body.innerText += `   Weather: ${weather} `


}