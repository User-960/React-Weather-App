import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import { useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { TimeInterval } from '../../store/types/types';
import s from './Popup.module.scss';

interface Props {
  intTime: TimeInterval
  closePopup: () => void
}

export const Popup = ({ intTime, closePopup }: Props) => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  const dateWeekDay = (date: TimeInterval): string => {
    let timestamp = date.dt;
    let weekDay = new Date(timestamp * 1000);
    return weekDay.toString().slice(0, 3);
  };

  const items: Item[] = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: `${Math.floor(intTime.main.temp)}°C - feels like ${Math.floor(intTime.main.feels_like)}°C`
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: `${intTime.main.pressure} mmHg`
    },
    {
      icon_id: 'precipitation',
      name: 'Description',
      value: `${intTime.weather[0].description}`
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: `${Math.floor(intTime.wind.speed)} m/s`
    }
  ];

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.top__block}>
            <div className={s.day__temp}>{Math.floor(intTime.main.temp)}°C</div>
            <div className={s.day__name}>{dateWeekDay(intTime)}</div>
          </div>
          <div className={s.img}>
            <GlobalSvgSelector id={intTime.weather[0].description} />
          </div>
          <div className={s.bottom__block}>
            <div className={s.day__time}>
              Time: <span>{intTime.dt_txt.slice(10, 16)}</span>
            </div>
            <div className={s.day__date}>
              Date: <span>{intTime.dt_txt.slice(0, 10)}</span>
            </div>
            <div className={s.day__city}>
              City: <span>{weather.city.name}</span>
            </div>
          </div>
        </div >
        <div className={s.this__day_info_items}>
          {items.map((item: Item): JSX.Element => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close} onClick={closePopup}>
          <GlobalSvgSelector id='close' />
        </div>
      </div >
    </>
  )
}
