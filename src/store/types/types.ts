export type Weather = {
  main: {
    temp: number,
    feels_like: number,
    pressure: number
  },
  name: string,
  weather: [
    {
      description: string
    }
  ],
  wind: {
    speed: number
  }
};
