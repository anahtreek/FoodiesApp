import React from 'react';
import Restaurant from './restaurant.jsx';
import {Card} from 'semantic-ui-react';

class ResultComponent extends React.Component {
    constructor() {
        super();
				}
				// triggerAdd() {
				// 	this.props.add()
				// }

    render() {
        var divStyle = {
            margin: 70
        }

        var rst = this.props.sr.map(function(item) {
            return (
							<div>
							<Restaurant img={item.restaurant.featured_image}
							name={item.restaurant.name}
							address={item.restaurant.location.address}
							cuisines={item.restaurant.cuisines}
							ratings={item.restaurant.user_rating.aggregate_rating}/>
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
