/**
* Created by Chris on 5/20/2016.
*/
import React from "react";
import StanceBox from "./StanceBox.jsx";
import stances from "./data/stances.json"
import _ from "lodash";

class StanceMap extends React.Component {
  // current state - reference to state object + meta-state
  //
  render() {
    const currentStance = (
      <svg x="325px" y="20%">
        <g transform={`translate(0, 20)`}>
          <StanceBox stance={this.props.stance} selected={true} />
        </g>
      </svg>
    )

    return (
      <div className="stance-map">
        <svg width="800" height="600">
          {currentStance}
          <svg x="0" y="60%">
            { this.renderTransitionStances() }
          </svg>
        </svg>
      </div>
    );
  }

  renderTransitionStances() {
    const X_OFF = 100;
    const BOX_WIDTH = 175;
    const allStances = _.map(this.props.stance.actions, action => stances[action.stance]);

    return _(allStances)
      .zip(_.range(allStances.length))
      .map(([stance, i]) => {
        return (
          <g transform={`translate(${X_OFF + BOX_WIDTH * i}, 20)`}>
            <StanceBox stance={stance} selected={false} />
          </g>
        );
      })
      .value();
  }

  static propTypes() {
    return {
      stance: React.PropTypes.object.required,
    }
  }
}

export default StanceMap;
