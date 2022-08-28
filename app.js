let city = document.querySelector("#city");
let search = document.querySelector(".search");

search.addEventListener("click", (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6b68e8e028dd61523de8c13bdad58764`)
    .then(response => response.json())
    .then(data => {
        let output = document.querySelector(".city-cont");
        output.innerHTML += 
        `<div class="city-inner-cont">
            <div class="cityname">${data.name}</div>
            <div class="temp">Temprature:<span>${Math.floor(data["main"].temp-273)} °C </span></div>
            <div class="pressure">Pressure:<span>${data["main"].pressure}</span></div>
            <div class="humidity">Humidity:<span>${data["main"].humidity}</span></div>
        </div>`
    }).catch(error=> alert("Enter valid City name."));
});