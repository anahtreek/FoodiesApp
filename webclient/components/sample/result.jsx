import React from 'react';
import Restaurant from './restaurant.jsx';
import {Card} from 'semantic-ui-react';

class ResultComponent extends React.Component {
    constructor() {
        super();
    }

    trigger(id, img, name, address, cuisines, rating) {
      this.props.trigger(id, img, name, address, cuisines, rating);
    }

    render() {
        var divStyle = {
            margin: 70
        }

        var bvalue = this.props.bvalue;
        var bcolor = this.props.bcolor;
        var bicon = this.props.bicon;
        var page = this.props.page;
        var trigger = this.trigger.bind(this);

        var rst = this.props.sr.map(function(item) {
          console.log(bvalue+'x');
            return (
                <div>
                    <Restaurant id = {item.restaurant.id}
                      img={item.restaurant.featured_image}
                      name={item.restaurant.name}
                      address={item.restaurant.location.address}
                      cuisines={item.restaurant.cuisines}
                      rating={item.restaurant.user_rating.aggregate_rating} 
                      bvalue={bvalue}
                      bcolor={bcolor}
                      bicon={bicon}
                      page={page}
                      trigger = {trigger}
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
