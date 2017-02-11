import React from 'react';
import { Card, Icon, Image} from 'semantic-ui-react';
import Button from './button.jsx'

var cardStyle = {
  height: '450px',
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

  // var page = this.props.page;
  // var buttonSet = '';
  // if(page === 'search') {
  //   buttonSet = <Button {this.props.bable} color = {this.props.bcolor} icon = {this.props.bicon}>{this.props.bvalue}</Button>
  // }
  trigger(id, img, name, address, cuisines, rating) {
    this.props.trigger(this.props.id, this.props.img, this.props.name, this.props.address, this.props.cuisines, this.props.rating)
  }

	render () {
    // var y = (this.props.bvalue);
    // console.log(y+'y')

    var bvalue = this.props.bvalue;
    var bcolor = this.props.bcolor;
    var bicon = this.props.bicon;
    var page = this.props.page;
    var trigger = this.trigger.bind(this);

    var bttn = '';
    if(page === 'search') {
      console.log(bvalue+'y')
      bttn = <Button bvalue= {bvalue} bcolor = {bcolor} bicon = {bicon} trigger = {trigger}></Button>
    }
    else if(page === 'favourites') {
      console.log(bvalue+'y')
      bttn = <Button bvalue= 'Delete' bcolor = {bcolor} bicon = {bicon} trigger = {trigger}></Button>
    }

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
                        <span style={inputStyle}>{this.props.rating}/5</span>
                    </a>
                </Card.Content>
                {bttn}
            </Card>
		);
	}
}

export default RestaurantComponent;
