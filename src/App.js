import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { geocode, pollution, weather } from './actions';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);
  const geocodeData = useSelector((state) => state.geocode);
  const pollutionData = useSelector((state) => state.pollution.pollutionData);
  const [city, setCity] = useState('dusseldorf');

  useEffect(() => {
    dispatch(
      pollution.getCityPollution(geocodeData.latitude, geocodeData.longitude)
    );
  }, [dispatch, geocodeData]);

  return (
    <>
      <input onChange={(e) => setCity(e.target.value)} />
      <button
        onClick={() => {
          dispatch(weather.getWeatherData(city));
          dispatch(geocode.getCityGeocode(city));
        }}
      >
        SEARCH
      </button>
      {weatherData && geocodeData && pollutionData ? (
        <>
          <div>{weatherData ? weatherData.weather[0].description : null}</div>
          <div>{geocodeData.geocodeData[0].name}</div>
          <div>{pollutionData.list[0].main.aqi}</div>
        </>
      ) : (
        <h1>Waiting for City...</h1>
      )}
    </>
  );
}

export default App;
