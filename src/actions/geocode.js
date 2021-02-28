import api from '../api';

const geocode = {
  getCityGeocode: (city) => async (dispatch) => {
    try {
      const { data } = await api.getCityGeocode(city);
      dispatch({
        type: 'GET_GEOCODE',
        geocodeData: data,
        latitude: data[0].lat,
        longitude: data[0].lon,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default geocode;
