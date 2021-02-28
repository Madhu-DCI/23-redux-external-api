import axios from 'axios';

const key = '40378e26c064ea4354dd1e2f0a5f91be';

const api = {
  getWeatherData: (city) => {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );
  },
  getCityGeocode: (city) => {
    return axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`
    );
  },
  getCityPollution: (lat, lng) => {
    return axios.get(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${key}`
    );
  },
};

export default api;
