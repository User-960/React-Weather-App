import axios, { AxiosResponse } from "axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<any>> {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b178e36737a1b78abd26914eec95656d`);
  }
};
