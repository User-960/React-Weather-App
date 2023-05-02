import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';

interface Props {
  weather: Weather
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°C</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id={weather.weather[0].description} />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Time: <span>{
            new Date().toLocaleString('en-US',
              {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })
          }</span>
        </div>
        <div className={s.this__city}>
          City: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  )
}
