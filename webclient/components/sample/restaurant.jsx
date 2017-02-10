import React from 'react';
import { Card, Icon, Image} from 'semantic-ui-react';

var cardStyle = {
  height: '400px',
  margin: '10px 10px 0 0'
}

var imgStyle = {
    height: '200px'
}
var textStyle = {
    color: 'green',
    fontSize: '110%'
}
var inputStyle = {
    color: 'black'
}

class RestaurantComponent extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
      <Card style={cardStyle}>
                <Image style={imgStyle} src={this.props.img}/>
                <Card.Content>
                    <Card.Header>
                        {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            <span style={textStyle}>Address :</span>
                            <span style={inputStyle}>{this.props.address}</span>
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        <span style={textStyle}>Cuisines :</span>
                        <span style={inputStyle}>{this.props.cuisines}</span>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <span style={textStyle}>Ratings :</span>
                        <span style={inputStyle}>{this.props.ratings}/5</span>
                    </a>
                </Card.Content>
            </Card>
		);
	}
}

export default RestaurantComponent;
