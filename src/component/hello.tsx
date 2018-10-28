import * as React from 'react';
import { DatePicker } from 'antd';

export interface HelloProps {
  compiler: string;
  framework: string;
  buildTool: string;
};

export default class Hello extends React.PureComponent<HelloProps, {}> {
  render() {
    return [
      <h1 key="0">Hello from {this.props.compiler} and {this.props.framework}</h1>,
      <h1 key="1">Support by {this.props.buildTool}</h1>,
      <DatePicker key="2"/>
    ];
  };
};