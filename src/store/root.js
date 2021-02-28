import { combineReducers } from 'redux';
import { weather, geocode, pollution } from '../reducers';

export default combineReducers({
  weather,
  geocode,
  pollution,
});
