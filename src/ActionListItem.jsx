/**
* Created by Chris on 5/20/2016.
*/
import React from "react";
import { Link } from 'react-router';

class ActionListItem extends React.Component {
  render() {
    return (
      <li className="action-item">
        <Link to={`/${this.props.action.stance}`}>
          <span className="content">
            {this.props.action.event}
          </span>
        </Link>
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
