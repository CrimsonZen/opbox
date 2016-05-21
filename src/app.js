import ActionBar from "./ActionBar.jsx"
import StanceMap from "./StanceMap.jsx"
import React from "react";
import ReactDOM from "react-dom";
import stances from "./data/stances.json"

import { AButton, BButton } from './Controller.jsx';

class App extends React.Component {
  render() {
    const stance = stances[this.state.currentStance];
    return (
      <div>
        <div className="option-box">
          <StanceMap stance={stance}></StanceMap>
          <ActionBar actions={stance.actions} takeAction={this.takeAction}></ActionBar>
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
    this.takeAction = this.takeAction.bind(this);
    this.state = {
      events: {
        SOON: {},
        TAP_DOWN: {},
        JUMP: {}
      },
      currentStance: 'STANDING'
    };
  }

  takeAction(action) {
    this.setState({
      currentStance: action.stance
    });
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
