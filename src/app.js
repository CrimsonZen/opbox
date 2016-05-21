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
        <div className="playground">
          <p>Temporary scratchpad in case you want to render anything in particular:</p>
          <AButton />
          <BButton />
        </div>
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      events: {
        SOON: {},
        TAP_DOWN: {},
        JUMP: {}
      },
    };
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/:stanceId" component={App} />
  </Router>,
  document.getElementById('app')
);
