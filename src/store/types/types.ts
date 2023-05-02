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

// interface WeatherDay {
//   temp: number,
//   feels_like: number,
//   pressure: number,
//   temp_max: number
//   temp_min: number
// }

export type Weather = {
  city: {
    name: string,
  },
  list: [
    {
      main: {
        temp: number,
        feels_like: number,
        pressure: number,
        temp_max: number
        temp_min: number
      },
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
