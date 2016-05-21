import ActionBar from "./ActionBar.jsx"
import StanceMap from "./StanceMap.jsx"
import React from "react";
import ReactDOM from "react-dom";
import stances from "./data/stances.json"

class App extends React.Component {
    render() {
        const stance = stances[this.state.currentStance];
        return (
            <div>
                <StanceMap stance={stance} stances={stances}></StanceMap>
                <ActionBar actions={stance.actions} takeAction={this.takeAction}></ActionBar>
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
