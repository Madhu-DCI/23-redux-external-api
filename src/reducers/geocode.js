const defaultState = {};

const geocode = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_GEOCODE':
      return {
        geocodeData: action.geocodeData,
        latitude: action.latitude,
        longitude: action.longitude,
      };

    default:
      return state;
  }
};

export default geocode;
