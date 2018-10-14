import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
    buildTool: string;
};

export default class Hello extends React.PureComponent<HelloProps, {}> {
    render() {
        return [
            <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>,
            <h1>Support by {this.props.buildTool}</h1>
    ];
    };
};