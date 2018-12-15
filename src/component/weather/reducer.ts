import Weather, { State } from ".";

export enum ActionTypes {
  SetWeatherByCity = 'SetWeatherByCity',
}

export type Action =
  | {
      type: ActionTypes.SetWeatherByCity;
      city: string;
      data: Weather;
    };

export default function reduce(state: State, action: Action): State {
  switch(action.type) {
    case ActionTypes.SetWeatherByCity: {
      const newWeathers = { ...state.weathers}
      newWeathers[action.city] = action.data
      return { ...state, weathers: newWeathers}
    }
  }
}