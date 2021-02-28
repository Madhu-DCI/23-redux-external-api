const defaultState = {};

const pollution = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_POLLUTION':
      return {
        pollutionData: action.pollutionData,
      };

    default:
      return state;
  }
};

export default pollution;
