import * as React from 'react';
import * as BlueBirdPromise from 'bluebird';

import { fetchCurrentWeatherByCity } from '@src/api';
import reduce, { Action, ActionTypes } from './reducer';
import { Weather, BriefWeather, MainWeather, Wind } from '@src/types';
import * as styles from '../styles.scss';

export interface State {
  weathers: { [key: string]: Weather };
}

export default class WeatherCard extends React.PureComponent<{}, State> {
  private cities: string[] = ['shanghai'];

  private futureState: State = { weathers: {} };

  constructor(props: any) {
    super(props);

    this.state = { weathers: {} };
  }

  async componentDidMount() {
    BlueBirdPromise.map(this.cities, c => this.setWeather(c));
  }

  private async setWeather(city: string) {
    const data = await fetchCurrentWeatherByCity(city);
    this.applyAction({ type: ActionTypes.SetWeatherByCity, city, data });
  }

  private applyAction(action: Action) {
    this.futureState = reduce(this.futureState, action);
    this.setState({ ...this.futureState });
  }

  renderBriefWeather(w: BriefWeather) {
    const { main, description } = w;
    return (
      <div>
        <div>Main: {main}</div>
        <div>Description: {description}</div>
      </div>
    );
  }

  renderMainWeather(m: MainWeather) {
    const { temp, pressure, humidity } = m;
    return (
      <div>
        <div>Temp: {temp}</div>
        <div>Pressure: {pressure}</div>
        <div>Humidity: {humidity}</div>
      </div>
    );
  }

  renderWind(w: Wind) {
    const { speed, deg } = w;
    return (
      <div>
        <div>Speed: {speed}</div>
        <div>Deg: {deg}</div>
      </div>
    );
  }

  render() {
    const w = this.state.weathers[this.cities[0]];
    if (!w) return <></>;
    const { weather, main, visibility, wind, clouds } = w;
    return (
      <div className={styles.topRight}>
        <div>
          {this.renderBriefWeather(weather[0])}
          {this.renderMainWeather(main)}
          <div>Visibility: {visibility}</div>
          {this.renderWind(wind)}
          <div>Clouds: {clouds.all}</div>
        </div>
      </div>
    );
  }
}
