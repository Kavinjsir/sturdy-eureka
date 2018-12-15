import * as React from 'react';

import Weather from './weather'

export interface Props {
};

export default class Home extends React.PureComponent<Props, {}> {
  render() {
    return <Weather />
  };
};