/**
* Created by Chris on 5/20/2016.
*/
import React from "react";

class StanceBox extends React.Component {
  // current state - reference to state object + meta-state
  //
  render () {
    const fontStyle = this.props.selected ? "bold" : "normal";
    const picture = this.props.stance.picture || "https://placehold.it/150x150";
    return (
      <g className="stance-box">
        <image href={picture} width="150px" height="150px"/>
        <text style={{ fontWeight: fontStyle }}>{this.props.stance.name}</text>
      </g>
    );
  }
  static propTypes() {
    return {
      stance: React.PropTypes.object.required,
      selected: React.PropTypes.bool.required,
    };
  }
}

export default StanceBox;
