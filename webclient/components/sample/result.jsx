import React from 'react';
import Restaurant from './restaurant.jsx';
import {Card} from 'semantic-ui-react';

class ResultComponent extends React.Component {
    constructor() {
        super();
    }

    add(id, img, name, address, cuisines, rating) {
      this.props.add(id, img, name, address, cuisines, rating);
    }

    render() {
        var divStyle = {
            margin: 70
        }

        var page = this.props.page;
        var add = this.add.bind(this);

        var rst = this.props.sr.map(function(item) {
            return (
                <div>
                    <Restaurant id = {item.restaurant.id}
                      img={item.restaurant.featured_image}
                      name={item.restaurant.name}
                      address={item.restaurant.location.address}
                      cuisines={item.restaurant.cuisines}
                      rating={item.restaurant.user_rating.aggregate_rating}
                      page={page}
                      add = {add}
                    />
                </div>
            );

        });

        return (
            <div style={divStyle}>
                <Card.Group>{rst}</Card.Group>
            </div>

        );
    }
}

export default ResultComponent;
