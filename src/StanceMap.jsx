/**
 * Created by Chris on 5/20/2016.
 */
import React from "react";
import StanceBox from "./StanceBox.jsx";
import _ from "lodash";

class StanceMap extends React.Component {
    // current state - reference to state object + meta-state
    //
    render() {
        return (
            <div>
                {this.props.stance.name}
                <svg width="800" height="600">
                    <g transform="translate(350, 250)">
                        <StanceBox stance={this.props.stance}></StanceBox>
                    </g>
                    {this.renderBoxes()}
                </svg>
            </div>

        );
    }

    renderBoxes() {
        var x = 100;
        var y = 100;
        let results = [];
        for (var name in this.props.stances) {
            let stance = this.props.stances[name];
            x += 50;
            y += 20;
            let t = `translate(${x}, ${y})`;
            results.push(<g transform={t}><StanceBox stance={stance}/></g>);
        }
        return results;
    }

    static propTypes() {
        return {
            stance: React.PropTypes.object.required,
            stances: React.PropTypes.object
        }
    }
}

export default StanceMap;