// export type Weather = {
//   main: {
//     temp: number,
//     feels_like: number,
//     pressure: number
//   },
//   name: string,
//   weather: [
//     {
//       description: string
//     }
//   ],
//   wind: {
//     speed: number
//   }
// };

export interface DayTemp {
  temp: number,
  feels_like: number,
  pressure: number,
  temp_max: number
  temp_min: number
}

export interface TimeInterval {
  dt: number
  dt_txt: string,
  main: DayTemp,
  weather: [
    {
      description: string
    }
  ],
  wind: {
    speed: number
  }
}

export type Weather = {
  city: {
    name: string,
  },
  list: [
    {
      dt: number
      dt_txt: string,
      main: DayTemp,
      weather: [
        {
          description: string
        }
      ],
      wind: {
        speed: number
      }
    }
  ],
};
