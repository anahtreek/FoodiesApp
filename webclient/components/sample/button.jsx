import React from 'react';
import {Button} from 'semantic-ui-react';

class RestaurantComponent extends React.Component {
	constructor () {
		super();
	}
  render () {
		return (
      <Button onClick={this.onClick} size='large' primary>{this.props.value}</Button>
    );
	}
}

export default RestaurantComponent;
