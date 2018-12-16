import * as React from 'react';

import WeatherCard from './weather';
import * as styles from './styles.scss';

export interface Props {}

export interface State {}

export default class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // FIXME: SHOULD ALIGN WITH REAL TIME
    const [date, time] = new Date().toLocaleString().split(',');

    return (
      <div>
        <div className={styles.topRow}>
          <WeatherCard />
        </div>
        <div className={styles.center}>
          <div className={styles.clock}>
            <div className={styles.date}>{date}</div>
            <div className={styles.time}>{time}</div>
          </div>
          <div>
            <input className={styles.input} type="text" />
          </div>
        </div>
      </div>
    );
  }
}
