import axios from 'axios';

const API_KEY = "5e068a4a8a0c390a333c64aeba12ab2c";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// London ID = 2643743
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},gb`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
