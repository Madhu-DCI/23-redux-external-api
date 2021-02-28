import api from '../api';

const pollution = {
  getCityPollution: (lat, lng) => async (dispatch) => {
    try {
      const { data } = await api.getCityPollution(lat, lng);
      dispatch({
        type: 'GET_POLLUTION',
        pollutionData: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default pollution;
