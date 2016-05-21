import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';

import ActionBar from "./ActionBar.jsx"
import StanceMap from "./StanceMap.jsx"
import { AButton, BButton } from './Controller.jsx';

import stances from "./data/stances.json"


class App extends React.Component {
  render() {

    const stance = stances[this.props.params.stanceId || 'STANDING'];
    return (
      <div>
        <div className="option-box">
          <StanceMap stance={stance}></StanceMap>
          <ActionBar actions={stance.actions}></ActionBar>
        </div>
      </div>
    );
  }
}

class Playground extends React.Component {
  render() {
    return (
      <div className="playground">
        <p>Temporary scratchpad in case you want to render anything in particular:</p>
        <AButton />
        <BButton />
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/:stanceId" component={App} />
    <Route path="/playground" component={Playground} />
  </Router>,
  document.getElementById('app')
);
