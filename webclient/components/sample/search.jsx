import React from 'react';
import {Input, Button} from 'semantic-ui-react';

let divStyle = {
    margin: '0 30%',
    width: '40%'
};

let eleStyle = {
  margin: '10px'
}

class SearchComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            city: '',
            cuisine: ''
        };
    }
    onChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    triggerSearch() {
        this.props.search(this.state.city, this.state.cuisine);
    }

    render() {
        return (
            <div style={divStyle}>
                <Input style={eleStyle} type="text" name="city" value={this.state.city} placeholder="Enter city" onChange={this.onChange.bind(this)}/>
                <Input style={eleStyle} type="text" name="cuisine" value={this.state.cuisine} placeholder="Enter cuisines" onChange={this.onChange.bind(this)}/>
                <Button style={eleStyle} color = 'blue' onClick={this.triggerSearch.bind(this)}>Search</Button>
            </div>
        );
    }
}

export default SearchComponent;
