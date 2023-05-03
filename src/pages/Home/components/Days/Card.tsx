import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { TimeInterval } from '../../../../store/types/types';
import s from './Days.module.scss';

interface Props {
  interval: TimeInterval
  openPopup: () => void
  getIntTime: (e: any) => void
}

export const Card = ({ interval, openPopup, getIntTime }: Props) => {
  const { dt_txt, main, weather } = interval;

  const openModal = (e: any) => {
    e.target.value = interval;
    getIntTime(e.target.value);
    openPopup();
  };

  return (
    <div className={s.card} onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => openModal(e)}>
      <div className={s.day__name}>{dt_txt.slice(10, 16)}</div>
      <div className={s.day__info}>{dt_txt.slice(5, 10)}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={weather[0].description} />
      </div>
      <div className={s.temp__day}>{Math.floor(main.temp)}°C</div>
      <div className={s.temp__night}>{Math.floor(main.temp_min)}°C</div>
      <div className={s.info}>{weather[0].description}</div>
    </div>
  )
}