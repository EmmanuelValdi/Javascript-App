/* Manipula el DOM, la interface */
/* Obtengo los ID para hacer cambios*/
export class UI { //exporto para poder usarlas en otros lados de la app

    constructor() {
      this.location = document.getElementById('weather-location');
      this.temp = document.getElementById('weather-temperature');
      this.cloud = document.getElementById('weather-cloudiness');
      this.humidity = document.getElementById('weather-humidity');
      this.wind = document.getElementById('weather-wind');
    }
  
    render(weather) {
      console.log(weather);
      this.location.textContent = weather.name + ' / ' + weather.sys.country;
      this.cloud.textContent = weather.weather[0]['description'];
      this.temp.textContent = Math.round(weather.main.temp) + '°C';
      this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '%';
      this.wind.textContent = 'Wind: ' + weather.wind.speed + ' m/s';
    }
}
  