import React from 'react';
import { Day } from './Days';
import s from './Days.module.scss';

interface Props {
  day: Day
}

export const Card = ({ day }: Props) => {
  return (
    <div className={s.card}>
      Component
    </div>
  )
}