
const apiKey="a9bb2f5c17ad90bf0bd6548e34989938";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let weatherIcon=document.getElementById("weatherIcon");

async function checkWeather(city_name){
    city_name=document.getElementById("search").value;
    const response= await fetch(url + city_name+ `&appid=${apiKey}`);
    const data = await response.json();
     
   

    document.getElementById("city").innerHTML=data.name;
    document.getElementById("temp").innerHTML=Math.round(data.main.temp)  +"°C";
    document.getElementById("humid").innerHTML=data.main.humidity + "%";
    document.getElementById("windSpeed").innerHTML=data.wind.speed +" km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src= "images/clouds.png"
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src= "images/clear.png"
    }

    else if(data.weather[0].main =="Rain"){
        weatherIcon.src= "images/rain.png"
    }

    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src= "images/drizzle.png"
    }

    else if(data.weather[0].main =="Mist"){
        weatherIcon.src= "images/mist.png"
    }


}
const getWeather=document.getElementById("searchClick");

document.getElementById("search").addEventListener("keypress",(event)=>{
          if(event.keyCode ==13){
            checkWeather(search.value);
          }
})


getWeather.addEventListener("click",()=>{
    
    checkWeather(search.value);
})




