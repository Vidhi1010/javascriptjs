const button = document.getElementById('search-btn');
const input = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(cityName){
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d90a7686af3b40c19a4175112242510&q=${cityName}&aqi=yes`);

   return await promise.json();
} 
button.addEventListener('click', async ()=> {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    console.log(result);
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = `${result.current.temp_c} °C `;
});

 