import React from 'react';
import { Card } from './Card';
import s from './Days.module.scss';
import { Tabs } from './Tabs';

interface Props {

}

export interface Day {
  day_name: string,
  day_info: string,
  icon_id: string,
  temp_day: string,
  temp_night: string,
  info: string,
}

export const Days = (props: Props): JSX.Element => {
  const days: Day[] = [
    {
      day_name: 'Mon',
      day_info: '28 aug',
      icon_id: 'clear sky',
      temp_day: '+18',
      temp_night: '+15',
      info: 'clear sky',
    },
    {
      day_name: 'Tue',
      day_info: '29 aug',
      icon_id: 'moderate rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'moderate rain',
    },
    {
      day_name: 'Wed',
      day_info: '30 aug',
      icon_id: 'few clouds',
      temp_day: '+18',
      temp_night: '+15',
      info: 'few clouds',
    },
    {
      day_name: 'Thu',
      day_info: '31 aug',
      icon_id: 'heavy intensity rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'heavy intensity rain',
    },
    {
      day_name: 'Fri',
      day_info: '1 sep',
      icon_id: 'moderate rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'moderate rain',
    },
    {
      day_name: 'Sat',
      day_info: '2 sep',
      icon_id: 'light rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'light rain',
    },
    {
      day_name: 'Sun',
      day_info: '3 sep',
      icon_id: 'rain and snow',
      temp_day: '+18',
      temp_night: '+15',
      info: 'rain and snow',
    }
  ]

  return (
    <>
      <Tabs />
      <div className={s.days}>
        {days.map((day: Day) => <Card key={day.day_name} day={day} />)}
      </div>
    </>
  )
}
