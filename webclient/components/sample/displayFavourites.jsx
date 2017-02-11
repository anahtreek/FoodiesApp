import React from 'react';
import Restaurant from './restaurant.jsx';
import { Card } from 'semantic-ui-react';

class DisplayFavComponent  extends React.Component{

  constructor(){
    super();
  }

  trigger(id, img, name, address, cuisines, rating, page) {
    this.props.trigger(id, img, name, address, cuisines, rating, page);
  }

  render(){

    var divStyle = {
      margin: 70
    };
    var page = this.props.page;
    var trigger = this.trigger.bind(this);

    var JsonArray = this.props.json.map(function(item){
      if(page == 'favourites'){
        return <Restaurant id = {item.id} 
          name={item.name}
           img={item.img}
           address={item.address}
           cuisines={item.cuisines}
           rating={item.rating}
           page= 'favourites'
           trigger = {trigger}
         />
      }

    });
    return (
        <div style={divStyle}><Card.Group>{JsonArray}</Card.Group></div>
    );
  }
}

module.exports = DisplayFavComponent;
