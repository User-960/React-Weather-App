import React, { useState } from 'react';
import { Popup } from '../../../../shared/Popup/Popup';
import { Card } from './Card';
import s from './Days.module.scss';
import { Tabs } from './Tabs';
import { useCustomSelector } from '../../../../hooks/store';
import { selectCurrentWeatherData } from '../../../../store/selectors';
import { TimeInterval } from '../../../../store/types/types';

interface Props { }

export const Days = (props: Props): JSX.Element => {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const [popup, setPopup] = useState(false);

  return (
    <>
      {popup && <Popup closePopup={() => setPopup(false)} />}
      <Tabs />
      <div className={s.days}>
        {weather.list.map((interval: TimeInterval) => <Card key={interval.dt_txt} interval={interval} openPopup={() => setPopup(true)} />)}
      </div>
    </>
  )
}
