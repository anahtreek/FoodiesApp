import React from 'react';
import Restaurant from './restaurant.jsx';
import {Card} from 'semantic-ui-react';

class DisplayFavComponent extends React.Component {

    constructor() {
        super();
    }

    del(id) {
        this.props.del(id);
    }

    update(id, comments) {
        this.props.update(id, comments);
    }

    render() {

        let divStyle = {
            margin: 70
        };
        let page = this.props.page;
        let del = this.del.bind(this);
        let update = this.update.bind(this);

        let JsonArray = this.props.json.map(function(item) {
            if (page === 'favourites') {
                return <Restaurant id={item._id} name={item.name} img={item.img} address={item.address} cuisines={item.cuisines} rating={item.rating} comments={item.comments} page='favourites' del={del} update={update}/>
            }

        });
        return (
            <div style={divStyle}>
                <Card.Group>{JsonArray}</Card.Group>
            </div>
        );
    }
}

module.exports = DisplayFavComponent;
