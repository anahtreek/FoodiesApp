import React from 'react';
import ReactDOM from 'react-dom';
import Component from './sample/index.jsx';

class MainComponent extends React.Component {
    constructor() {
        super();
        }

    render() {
        return (
            <div>
                <Component/>
            </div>
        );
    }
}

ReactDOM.render(
    <MainComponent/>, document.getElementById('mountapp'));

    module.exports = MainComponent
