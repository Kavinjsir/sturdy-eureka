import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Home from './component/home';
import './style.css';

const main = document.createElement('div');
main.setAttribute('id', 'main');
document.body.appendChild(main);

ReactDOM.render(
  <Home  />,
  main
);