

// WEATHER API

const APIkey = 'tFlfX5ZFpnWErhD84pVb2Vhrb4J66IW4';
const BNEkey = 24741;

// GET WEATHER INFO - CURRENT CONDITIONS



const getWeather = async (cityKey) => {

const URLbase = 'http://dataservice.accuweather.com/currentconditions/v1/';
const queryParams = `${cityKey}?apikey=${APIkey}`;

const response = await fetch(URLbase + queryParams);
const data = await response.json();

return data[0];

};


//GET CITY INFO
const getCity = async (city) => {

    const URLbase = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryParams = `?apikey=${APIkey}&q=${city}`;

    const response = await fetch(URLbase + queryParams);
    const data = await response.json();

    return (data[0])
};

getCity('brisbane')
    .then(data => {
        return getWeather(data.Key);
    }).then(data => console.log(data.WeatherText))
    .catch(error => console.log(error));











// FETCH


// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => console.log(data));












// const images = document.querySelectorAll('.upscale');
// console.log(images);

// function toggleUpsizeClass() {
//     this.classList.toggle('upsize')
// };

// images.forEach((image) => {image.addEventListener('mouseover', toggleUpsizeClass)});
// images.forEach((image) => {image.addEventListener('mouseleave', toggleUpsizeClass)});

