import React from 'react';
import { Card } from './Card';
import s from './Days.module.scss';

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

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      day_name: 'Mon',
      day_info: '28 aug',
      icon_id: 'sunshine',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Sunshine',
    },
    {
      day_name: 'Tue',
      day_info: '29 aug',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Small rain and sunshine',
    },
    {
      day_name: 'Wed',
      day_info: '30 aug',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Small rain',
    },
    {
      day_name: 'Thu',
      day_info: '31 aug',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Cloudy',
    },
    {
      day_name: 'Fri',
      day_info: '1 sep',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Cloudy',
    },
    {
      day_name: 'Sat',
      day_info: '2 sep',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Cloudy',
    },
    {
      day_name: 'Sun',
      day_info: '3 sep',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Cloudy',
    }
  ]

  return (
    <div className={s.days}>
      {days.map((day: Day) => <Card key={day.day_name} day={day} />)}
    </div>
  )
}
