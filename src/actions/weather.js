import api from '../api/index';

const weather = {
  getWeatherData: (city) => async (dispatch) => {
    try {
      const { data } = await api.getWeatherData(city);
      dispatch({
        type: 'GET_WEATHER',
        weatherData: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default weather;
