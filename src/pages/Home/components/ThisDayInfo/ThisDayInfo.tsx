import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';
import { useCustomSelector } from '../../../../hooks/store';
import { selectCurrentWeatherData } from '../../../../store/selectors';

interface Props {

}

export interface Item {
  icon_id: string
  name: string
  value: string
}

export const ThisDayInfo = (props: Props) => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const items: Item[] = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: `${Math.floor(weather.main.temp)}°C - feels like ${Math.floor(weather.main.feels_like)}°C`
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: `${weather.main.pressure} mmHg`
    },
    {
      icon_id: 'precipitation',
      name: 'Description',
      value: `${weather.weather[0].description}`
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: `${Math.floor(weather.wind.speed)} m/s`
    }
  ];

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item): JSX.Element => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img
        className={s.cloud__img}
        src={cloud}
        alt="cloud"
      />
    </div>
  )
}
