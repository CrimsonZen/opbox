/**
 * Created by Chris on 5/20/2016.
 */
import React from "react";
import ActionListItem from "./ActionListItem.jsx"

class ActionBar extends React.Component {
    render() {
        return (
            <ul>
                {this.props.actions.map(action => (
                    <ActionListItem action={action} takeAction={this.props.takeAction}/>
                ))}
            </ul>
        )
    }
    static propTypes() {
        return {
            actions: React.PropTypes.arrayOf(React.PropTypes.object),
        }
    }
}

export default ActionBar;