import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';

interface Props {

}

export const ThisDayInfo = (props: Props) => {
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}></div>
      <img src={cloud} alt="cloud" />
    </div>
  )
}
