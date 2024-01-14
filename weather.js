

const apiKey="f655ef7fe2235d856a22cddea432d9a6"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search=document.getElementById("input")

const searchButton=document.getElementById("btn")
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch(apiUrl + city +`&appid=${apiKey}`)
  if(response.status== 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }else{

    var data=await response.json()
    console.log(data);


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"  %";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if(weather[0].main=="Clouds"){
        weatherIcon.src="images/cloud.png"
    }
    else if(weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    else if(weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png"
    }

    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
}
}


searchButton.addEventListener("click",()=>{
    checkWeather(search.value)
})