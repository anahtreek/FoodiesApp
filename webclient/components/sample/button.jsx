import React from 'react';
import {Button, Icon} from 'semantic-ui-react';

let updateStyle = {
    width: '246px'
}

class ButtonComponent extends React.Component {
    constructor() {
        super();
    }

    trigger() {
        this.props.trigger();
    }

    render() {
        let bttn = <Button onClick={this.trigger.bind(this)} color={this.props.bcolor} size='large'>
            <Icon name={this.props.bicon}></Icon>
            {this.props.bvalue}</Button>
        if (this.props.bvalue === 'Added') {
            bttn = <Button disabled>{this.props.bvalue}</Button>
        }
        if (this.props.bicon === 'trash') {
            bttn = <Button circular icon={this.props.bicon} onClick={this.trigger.bind(this)}/>
        }
        if (this.props.bicon === 'comment') {
            bttn = <Button style={updateStyle} onClick={this.trigger.bind(this)} color={this.props.bcolor} size='large'>
                <Icon name={this.props.bicon}></Icon>
                {this.props.bvalue}</Button>
        }

        return (bttn);
    }
}

export default ButtonComponent;
