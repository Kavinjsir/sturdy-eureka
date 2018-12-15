import * as superAgent from 'superagent';
import Weather from '../component/weather';

const config = require('../../config.json')

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}'

export const fetchCurrentWeatherByCity = async (city: string): Promise<Weather> => {
  const {city: rawCity, weatherApiKey} = config
  const url = WEATHER_API.replace('${cityId}', rawCity[city].id.toString()).replace('${apiKey}', weatherApiKey)
  console.log(11, url)
  const result = await superAgent.get(url)
  return result.body;
}