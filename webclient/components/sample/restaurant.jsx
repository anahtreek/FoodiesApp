import React from 'react';
import { Card, Icon, Image, Input} from 'semantic-ui-react';
import Button from './button.jsx'

var cardStyle = {
  height: '470px',
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
    this.state = {
      comments:'',
      bvalue:'Add',
      bcolor:'green',
      bicon:'plus'
    }
	}

  add() {
    this.props.add(this.props.id, this.props.img, this.props.name, this.props.address, this.props.cuisines, this.props.rating);
    this.setState({bvalue:'Added'})
  }

  del() {
    this.props.del(this.props.id)
  }

  update() {
    this.props.update(this.props.id, this.state.comments);
  }

  onChange(event) {
    this.setState({comments:event.target.value});
  }


	render () {

    var add = this.add.bind(this);
    var del = this.del.bind(this);
    var update = this.update.bind(this);
    var onChange = this.onChange.bind(this);
    var page = this.props.page;

    var bttn = '';
    var commentBox = '';
    if(page === 'search') {
      bttn = <Button bvalue = {this.state.bvalue} bcolor = {this.state.bcolor} bicon = {this.state.bicon} trigger = {add}></Button>
    }
    else if(page === 'favourites') {
      bttn = <div><Button bvalue = 'Add Comments' bcolor = 'red' bicon = 'comment' trigger = {update}></Button>
    <Button bcolor = 'grey' bicon = 'trash' trigger = {del}></Button></div>
      commentBox = <Input type = 'text' placeholder = 'Comments...' value = {this.state.comments} onChange = {onChange}/>
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
                {commentBox}
                {bttn}
            </Card>
		);
	}
}

export default RestaurantComponent;
