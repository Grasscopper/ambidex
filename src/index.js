import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

import ZeroEscapeIndexContainer from './ZeroEscapeIndexContainer'
import AmbidexIndexContainer from './AmbidexIndexContainer'
import AmbidexGameContainer from './AmbidexGameContainer'

import VirtueTestContainer from './VirtueTestContainer'
import VirtueGameContainer from './VirtueGameContainer'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="nonary">
      <Switch>
        <Route exact path="/" component={ZeroEscapeIndexContainer} />
        <Route exact path="/play" component={AmbidexIndexContainer} />
        <Route exact path="/game/:version/:name" component={AmbidexGameContainer} />
        <Route exact path="/virtue" component={VirtueTestContainer} />
        <Route exact path="/virtue/:id" component={VirtueGameContainer} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
