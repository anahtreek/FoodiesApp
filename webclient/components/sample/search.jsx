import React from 'react';
import Result from './result.jsx'
import {Input, Button} from 'semantic-ui-react';

var divStyle = {
  margin:'2% 30%'
}

class SearchComponent extends React.Component {
    constructor() {
        super();
        this.state = {city:'',
      cuisine:''};
    }
    onChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({[name]:value});
    }


    triggerSearch() {
        this.props.search(this.state.city, this.state.cuisine);
    }

    render() {
        return (
            <div style={divStyle}>
                <Input type="text" name="city" value={this.state.city} placeholder="Enter city" onChange = {this.onChange.bind(this)}/>
                <Input type="text" name="cuisine" value={this.state.cuisine} placeholder="Enter cuisines" onChange = {this.onChange.bind(this)}/>
                <Button onClick={this.triggerSearch.bind(this)}>Search</Button>
            </div>
        );
    }
}

export default SearchComponent;
