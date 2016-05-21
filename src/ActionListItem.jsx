/**
 * Created by Chris on 5/20/2016.
 */
import React from "react";

class ActionListItem extends React.Component {
    render() {
        return (
            <li className="action-item">
                <button onClick={() => this.props.takeAction(this.props.action)}>
                    {this.props.action.event}
                </button>

            </li>
        )
    }
    static propTypes() {
        return {
            actions: React.PropTypes.arrayOf(React.PropTypes.object),
        }
    }
}

export default ActionListItem;
