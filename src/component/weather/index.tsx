import * as React from 'react'
import * as BlueBirdPromise from 'bluebird';

import { fetchCurrentWeatherByCity } from '../../api';
import reduce, { Action, ActionTypes } from './reducer';

export interface State {
  weathers: {[key: string]: Weather};
}

export default class Weather extends React.PureComponent<{}, State> {
  private cities: string[] = ['shanghai']

  private futureState: State = {weathers: {}}

  constructor(props: any) {
    super(props)

    this.state = {weathers: {}}
  }

  async componentDidMount() {
   BlueBirdPromise.map(this.cities, c => this.setWeather(c)) 
  }

  private async setWeather(city: string) {
    const data = await fetchCurrentWeatherByCity(city)
    this.applyAction({type: ActionTypes.SetWeatherByCity, city, data})
  }

  private applyAction(action: Action) {
    this.futureState = reduce(this.futureState, action);
    this.setState({ ...this.futureState })
  }

  render() {
    const { weathers } = this.state
    return <div>
      {Object.keys(weathers).map(w => {
        const value = JSON.stringify(weathers[w])
        return <p key={value}>{value}</p>})}
    </div>
  }
  
}