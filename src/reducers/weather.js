const defaultState = {};

const weather = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        weatherData: action.weatherData,
      };

    default:
      return state;
  }
};

export default weather;
