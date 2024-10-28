const button = document.getElementById('search-btn');
const input = document.getElementById('city-input');

async function getData(cityName){
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d90a7686af3b40c19a4175112242510&q=${cityName}&aqi=yes`);

   return await promise.json();
} 
button.addEventListener('click', async ()=> {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
});

