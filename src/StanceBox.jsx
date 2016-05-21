/**
 * Created by Chris on 5/20/2016.
 */
import React from "react";

class StanceBox extends React.Component {
    // current state - reference to state object + meta-state
    //
    render () {
        return (
            <text>{this.props.stance.name}</text>
        );
    }
    static propTypes() {
        return {
            stance: React.PropTypes.object.required
        }
    }
}

export default StanceBox;