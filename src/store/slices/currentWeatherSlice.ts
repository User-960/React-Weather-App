import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Weather } from "../types/types";

type CurrentWeather = {
  weather: Weather,
  isLoading: boolean,
  response: Response
};

type Response = {
  status: number,
  message: string
};

const initialState: CurrentWeather = {
  weather: {
    city: {
      name: 'moscow'
    },
    list: [
      {
        dt: 0,
        dt_txt: '',
        main: {
          temp: 0,
          feels_like: 0,
          pressure: 0,
          temp_max: 0,
          temp_min: 0,
        },
        weather: [
          {
            description: 'clear sky'
          }
        ],
        wind: {
          speed: 0
        }
      }
    ],
  },
  isLoading: false,
  response: {
    status: 0,
    message: ''
  }
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    },
    fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    }
  }
});

export default currentWeatherSlice.reducer;
