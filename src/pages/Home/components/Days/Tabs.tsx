import React from 'react';
import s from './Days.module.scss';

interface Props {

}

interface Tab {
  value: string
}

export const Tabs = (props: Props): JSX.Element => {
  const tabs: Tab[] = [
    {
      value: '3 hours'
    }
  ]

  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>{
        tabs.map((tab: Tab) => (
          <div className={s.tab} key={tab.value}>{tab.value}</div>
        ))
      }</div>
      <div className={s.cancel}>Cancel</div>
    </div>
  )
}