/**
 * Created by Chris on 5/20/2016.
 */
import React from "react";
import ActionListItem from "./ActionListItem.jsx"

class ActionBar extends React.Component {
    render() {
        return (
          <div className="action-bar">
            <ul>
                {this.props.actions.map(action => (
                    <ActionListItem action={action} takeAction={this.props.takeAction}/>
                ))}
            </ul>
          </div>
        )
    }
    static propTypes() {
        return {
            actions: React.PropTypes.arrayOf(React.PropTypes.object),
        }
    }
}

export default ActionBar;
